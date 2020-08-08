import React, { useState } from "react";
import "./VideoSideBar.css";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import MessageIcon from "@material-ui/icons/Message";
import ShareIcon from "@material-ui/icons/Share";

function VideoSideBar({ likes, shares, messages }) {
  const [liked, setLiked] = useState(false);
  return (
    <div className="VideoSideBar">
      <div className="VideoSideBar__button">
        {liked ? (
          <FavoriteIcon onClick={(e) => setLiked(false)} />
        ) : (
          <FavoriteBorderIcon onClick={(e) => setLiked(true)} />
        )}
        <p>{liked ? likes + 1 : likes}</p>
      </div>
      <div className="VideoSideBar__button">
        <MessageIcon />
        <p>{messages}</p>
      </div>
      <div className="VideoSideBar__button">
        <ShareIcon />
        <p>{shares}</p>
      </div>
    </div>
  );
}

export default VideoSideBar;
