import VideoJS from "./VideoJS.tsx";
import videojs from "video.js";
import { useRef } from "react";
import { Link } from "react-router";
import type Player from "video.js/dist/types/player";

function Viewer() {
  const playerRef = useRef<null | Player>(null);
  const videoJsOptions = {
    sources: [
      { src: "http://qthttp.apple.com.edgesuite.net/1010qwoeiuryfg/sl.m3u8" },
    ],
  };

  const handlePlayerReady = (player: Player) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on("waiting", () => {
      videojs.log("player is waiting");
    });

    player.on("dispose", () => {
      videojs.log("player will dispose");
    });
  };

  return (
    <div>
      <Link to="/">Home</Link>
      <h1 className="my-10 text-4xl">Viewer</h1>
      <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
    </div>
  );
}

export default Viewer;
