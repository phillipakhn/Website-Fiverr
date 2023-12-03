import React from "react";
import { useDropzone } from "react-dropzone";
import "./CSS/Apply.css";

const Apply = () => {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: "application/pdf",
    onDrop: (acceptedFiles) => {
      console.log(acceptedFiles);
    },
  });

  return (
    <div className="apply-container">
      <div
        {...getRootProps()}
        className={`dropzone ${isDragActive ? "active" : ""}`}
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p>Drag 'n' drop your resume here, or click to select files</p>
        )}
      </div>
    </div>
  );
};

export default Apply;
