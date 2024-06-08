import { appDataDir, join } from "@tauri-apps/api/path";
import { convertFileSrc } from "@tauri-apps/api/tauri";
const appDataDirPath = await appDataDir();
const filePath = await join(
  appDataDirPath,
  "assets/ding-ding-small-bell-76305.mp3"
);
const assetUrl = convertFileSrc(filePath);

export function playSound(video: HTMLVideoElement) {
  if (!video) return;
  const source = document.createElement("source");
  source.type = "video/mp4";
  source.src = assetUrl;

  video.appendChild(source);
  video.load();
}
