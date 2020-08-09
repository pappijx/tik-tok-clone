import React, { useRef, useState } from "react";
import "./Video.css";
import VideoFooter from "./VideoFooter";
import VideoSideBar from "./VideoSideBar";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";

function Video({ url, channel, description, song, likes, messages, shares }) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  const onVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <div className="video">
      <div className="playBtn">
        <PlayCircleFilledIcon fontSize="large" />
      </div>
      <video
        className="video__player"
        loop
        autoPlay=""
        onClick={onVideoPress}
        ref={videoRef}
        src={url}></video>
      <VideoFooter channel={channel} description={description} song={song} />
      <VideoSideBar likes={likes} shares={shares} messages={messages} />
    </div>
  );
}

export default Video;
