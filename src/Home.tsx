import { useEffect, useState } from "react";
import { getVideos, type VideoDescriptor } from "./api.ts";
import { Link, useNavigate } from "react-router";

function Home() {
  const [videos, setVideos] = useState<null | VideoDescriptor[]>(null);
  const nav = useNavigate();

  // TODO: Use `getVideos` from `api.ts` to fetch the list of videos
  //   and display them in a list. Each video should be clickable and navigate
  //   to the `/viewer/:videoId` route.

  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/foo">App Intro</Link>
        <Link to="/foo">Videos</Link>
        <Link to="/foo">Player</Link>
      </nav>
      <h1>Video List</h1>
      {videos?.map((video) => (
        <div
          key={video.id}
          onClick={() => {
            nav(`/viewer/${video.id}`);
          }}
        >
          <img src={video.thumbnail} alt={video.title} />
          <h2>{video.title}</h2>
        </div>
      ))}
    </>
  );
}

export default Home;
