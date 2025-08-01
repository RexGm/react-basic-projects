import React, { useState } from "react";
import FileExplorer from "./components/FileExplorer/FileExplorer";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";

function App() {
  const [videoFiles, setVideoFiles] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFilesSelected = (files) => {
    setVideoFiles(files);
    setSelectedFile(null); // Reset selected file when new files are selected
  };

  const handleVideoClick = (file) => {
    setSelectedFile(file);
  };

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <FileExplorer
        onFilesSelected={handleFilesSelected}
        onVideoClick={handleVideoClick}
        videoFiles={videoFiles}
      />
      <VideoPlayer file={selectedFile} />
    </div>
  );
}

export default App;
