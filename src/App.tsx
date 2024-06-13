import { useEffect, useState } from "preact/hooks";
import "./App.css";
import { fetch } from "@tauri-apps/api/http";
import { BrewState, IStatus } from "./types";
import { move_window, Position } from "tauri-plugin-positioner-api";
import { useNotification } from "./useNotification";
import { CoffeeIcon } from "./CoffeeIcon";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

const SHELLY_PLUGIN_URL = "http://192.168.68.112";
const COFFEE_POWER_THRESHOLD = 10;
const FETCH_INTERVAL = 1000;

type BrewTime = {
  start: number;
  end: number;
};

move_window(Position.RightCenter);

const Off = () => {
  const { notify } = useNotification({
    body: "Coffee machine is off!",
    sound: "default",
  });

  useEffect(() => {
    notify();
  }, []);

  return (
    <div className="base off">
      <div className="status">
        <h1>Off</h1>
        <CoffeeIcon empty />
      </div>
    </div>
  );
};

const Brewing = ({ statusText }: { statusText?: string }) => {
  const { notify } = useNotification({
    body: "Coffee is Brewing!",
  });

  useEffect(() => {
    notify();
  }, []);

  return (
    <div className="base brewing">
      <div className="status">
        <h1>Brewing</h1>
        <CoffeeIcon state="ON" />
        {statusText && <span className="status-text">{statusText}</span>}
      </div>
    </div>
  );
};

const Done = ({ statusText }: { statusText?: string }) => {
  const { notify } = useNotification({
    body: "Coffee is Done!",
  });

  useEffect(() => {
    notify();
  }, []);

  return (
    <div className="base done">
      <div className="status">
        <h1>Done</h1>
        <CoffeeIcon />
        {statusText && <span className="status-text">{statusText}</span>}
      </div>
    </div>
  );
};

const Brew = () => {
  const [brewState, setBrewState] = useState<BrewState>("OFF");
  const [debug, setDebug] = useState(true);
  const [power, setPower] = useState(0);
  const [brewTime, setBrewTime] = useState<BrewTime>({
    start: 0,
    end: 0,
  });
  const [statusText, setStatusText] = useState(
    `Started: ${dayjs(new Date()).fromNow()}`
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setBrewTime((prevBrewTime) => ({
        ...prevBrewTime,
        end: Date.now(),
      }));
      setStatusText(`Started: ${dayjs(brewTime.start).fromNow()}`);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (brewState === "ON") {
      setBrewTime({ start: Date.now(), end: 0 });
    } else if (brewState === "DONE") {
      setBrewTime({ ...brewTime, end: Date.now() });
    }
  }, [brewState]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${SHELLY_PLUGIN_URL}/rpc/Shelly.GetStatus`
        );

        const data = response.data as IStatus;

        setPower(data["switch:0"].apower);

        if (data["switch:0"].apower === 0) {
          setBrewState("OFF");
        } else if (data["switch:0"].apower < COFFEE_POWER_THRESHOLD) {
          setBrewState("DONE");
        } else {
          setBrewState("ON");
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, FETCH_INTERVAL);

    return () => clearInterval(interval);
  }, []);

  if (debug) {
    return (
      <div style={{ padding: "1rem" }}>
        <pre style={{ color: "black", padding: "1rem;" }}>
          power: {JSON.stringify(power, undefined, 2)}
        </pre>
        <button type="button" onClick={() => setDebug(false)}>
          Hide Debug
        </button>
      </div>
    );
  }

  if (brewState === "OFF") {
    return <Off />;
  } else if (brewState === "ON") {
    return <Brewing statusText={statusText} />;
  } else {
    return <Done statusText={statusText} />;
  }
};

function App() {
  return (
    <main className="koulen-regular text-white">
      <Brew />
    </main>
  );
}

export default App;
