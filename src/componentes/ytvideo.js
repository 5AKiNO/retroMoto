import React from 'react';

const Video = () => {
  return (
    <div id="video" className="youtube-video">
      <h2>Nuestro proceso:</h2>
      <iframe
        src="https://www.youtube.com/embed/Dg8xeAcM9zY"
        title="YouTube video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Video;
