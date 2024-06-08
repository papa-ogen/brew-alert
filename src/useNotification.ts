import {
  isPermissionGranted,
  requestPermission,
  sendNotification,
} from "@tauri-apps/api/notification";

export const useNotification = ({
  title = "BREW ALERT",
  body,
  sound = "done",
  icon = "assets/done.png",
}: {
  title?: string;
  body: string;
  sound?: string;
  icon?: string;
}) => {
  const notify = async () => {
    let permissionGranted = await isPermissionGranted();
    if (!permissionGranted) {
      const permission = await requestPermission();
      permissionGranted = permission === "granted";
    }

    if (permissionGranted) {
      sendNotification({
        title,
        body,
        sound,
        icon,
      });
    }
  };

  return { notify };
};
