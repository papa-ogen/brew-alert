export interface IConfig {
  leds: {
    mode: string;
    colors: {
      [key: string]: {
        on: {
          rgb: number[];
          brightness: number;
        };
        off: {
          rgb: number[];
          brightness: number;
        };
      };
    };
    night_mode: {
      enable: boolean;
      brightness: number;
      active_between: any[];
    };
  };
  controls: {
    [key: string]: {
      in_mode: string;
    };
  };
}

export interface IStatus {
  ble: {};
  cloud: {
    connected: boolean;
  };
  mqtt: {
    connected: boolean;
  };
  plugs_ui: {};
  "switch:0": {
    id: number;
    source: string;
    output: boolean;
    apower: number;
    voltage: number;
    current: number;
    aenergy: {
      total: number;
      by_minute: number[];
      minute_ts: number;
    };
    temperature: {
      tC: number;
      tF: number;
    };
  };
  sys: {
    mac: string;
    restart_required: boolean;
    time: string;
    unixtime: number;
    uptime: number;
    ram_size: number;
    ram_free: number;
    fs_size: number;
    fs_free: number;
    cfg_rev: number;
    kvs_rev: number;
    schedule_rev: number;
    webhook_rev: number;
    available_updates: {};
    reset_reason: number;
  };
  wifi: {
    sta_ip: string;
    status: string;
    ssid: string;
    rssi: number;
  };
  ws: {
    connected: boolean;
  };
}
