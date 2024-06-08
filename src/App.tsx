import { useEffect, useState } from "preact/hooks";
import "./App.css";
import { fetch } from "@tauri-apps/api/http";
import { IStatus } from "./types";
import { move_window, Position } from "tauri-plugin-positioner-api";

const SHELLY_PLUGIN_URL = "http://192.168.0.47/rpc/Shelly.GetStatus";
const COFFEE_POWER_THRESHOLD = 10;

move_window(Position.RightCenter);

function App() {
  const [data, setData] = useState<IStatus | null>(null);
  const [alert, setAlert] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(SHELLY_PLUGIN_URL);

        const data = response.data as IStatus;
        setData(data);

        if (data["switch:0"].apower < COFFEE_POWER_THRESHOLD) {
          // Assuming power < 10 W indicates brewing is done
          setAlert("Brewing is done!");
        } else {
          setAlert("");
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 1000); // Fetch data every 5 seconds

    return () => clearInterval(interval);
  }, []);

  console.log(data);

  return (
    <div>
      <h1>Power Consumption Monitor</h1>
      {data !== null ? (
        <p>Current power consumption: {data["switch:0"].apower} W</p>
      ) : (
        <p>Fetching power data...</p>
      )}
      {alert && <p>{alert}</p>}
      <p></p>
    </div>
  );
}

export default App;
