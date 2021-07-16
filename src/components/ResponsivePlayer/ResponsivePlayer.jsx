import React from "react";

const ResponsivePlayer = ({ videoId }) => {
  return (
    <div className="aspect-w-16 aspect-h-9 -z-2">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default ResponsivePlayer;
