import React, { useEffect, useRef } from "react";

const VideoPlayer = ({ file }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current && file) {
      videoRef.current.load(); 
    }
  }, [file]);

  if (!file) {
    return (
      <div style={{ flex: 1, padding: "1rem" }}>
        <p>Select a video</p>
      </div>
    );
  }

  const videoURL = URL.createObjectURL(file);

  return (
    <div style={{ flex: 1, padding: "1rem" }}>
      <video ref={videoRef} controls style={{ width: "100%", height: "100%" }}>
        <source src={videoURL} type={file.type} />
        Unsupported browser..!
      </video>
    </div>
  );
};

export default VideoPlayer;
