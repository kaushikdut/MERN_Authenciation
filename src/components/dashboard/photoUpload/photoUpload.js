import React, { useState } from "react";
import axios from "axios";

const PhotoUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleFileUpload = async () => {
    try {
      const formData = new FormData();
      formData.append("photo", selectedFile);

      await axios
        .post("http://localhost:8000/protected/upload", formData)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));

      setSelectedFile(null);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      {selectedFile && (
        <div>
          <p>Selected File: {selectedFile.name}</p>
          <img
            src={URL.createObjectURL(selectedFile)}
            alt="Preview"
            style={{ maxWidth: "100%", maxHeight: "200px" }}
          />
          <button onClick={handleFileUpload}>Upload</button>
        </div>
      )}
    </div>
  );
};

export default PhotoUpload;
