import React, { useState, useEffect } from "react";
import axios from "axios";
import "./photoList.css";

const PhotoList = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/protected/photos"
        );
        setPhotos(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPhotos();
  }, []);

  const bufferToDataURL = (buffer) => {
    const blob = new Blob([new Uint8Array(buffer.data)], {
      type: "image/jpeg",
    });
    const dataURL = URL.createObjectURL(blob);
    return dataURL;
  };

  return (
    <div>
      <h2>Photo Gallery</h2>
      {photos.length > 0 ? (
        <div className="feed">
          {photos.map((photo) => (
            <div className="card">
              <img
                key={photo._id}
                src={bufferToDataURL(photo.data)}
                alt={`Phot ${photo._id}`}
                className="image"
              />
            </div>
          ))}
        </div>
      ) : (
        <p>No photos available.</p>
      )}
    </div>
  );
};

export default PhotoList;
