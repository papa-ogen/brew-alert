import { IStatus } from "../types";
import { http, HttpResponse } from "msw";

export const handlers = [
  // Example handler for a GET request
  http.get("http://192.168.68.112/rpc/Shelly.GetStatus", () => {
    return HttpResponse.json({
      "switch:0": {
        apower: 10,
      },
    } as IStatus);
  }),
];
