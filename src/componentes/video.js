import React, { useEffect, useRef } from 'react';
import YouTubePlayer from 'youtube-player';

const YouTubeVideo = ({ videoId }) => {
  const videoRef = useRef(null);
  const playerRef = useRef(null);

  useEffect(() => {
    playerRef.current = YouTubePlayer(videoRef.current, {
      videoId: videoId,
      playerVars: { autoplay: 0 }
    });
  }, [videoId]);

  const handlePlay = () => {
    playerRef.current.playVideo();
  };

  const handlePause = () => {
    playerRef.current.pauseVideo();
  };

  return (
    <div>
      <div ref={videoRef} id="youtube-video"></div>
      <button onClick={handlePlay}>Play</button>
      <button onClick={handlePause}>Pause</button>
    </div>
  );
};

export default YouTubeVideo;

