import React from "react";
import styles from './FileExplorer.module.css';

const FileExplorer = ({ onFilesSelected, onVideoClick, videoFiles }) => {
  const handleDirectorySelect = (e) => {
    const files = Array.from(e.target.files).filter(file => file.type.startsWith("video/"));
    onFilesSelected(files);
  };

  return (
    <div className={styles.fileExplorer}>
      <h3 className={styles.header}>Select Video Folder</h3>
      <label className={styles.fileInputLabel}>
        Klasör Seç
        <input
          type="file"
          className={styles.fileInput}
          webkitdirectory="true"
          directory="true"
          multiple
          onChange={handleDirectorySelect}
        />
      </label>
      <ul className={styles.fileList}>
        {videoFiles.map((file, index) => (
          <li
            key={index}
            className={styles.fileItem}
            onClick={() => onVideoClick(file)}
          >
            {file.webkitRelativePath}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FileExplorer;