import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css"; // Use the same CSS file

const UNSPLASH_ACCESS_KEY = "Gb5iNFlPwG8mAqrVbk1sG1vnrOT-POGfp1A3JgE-LrE"; // Replace with your API Key

function ImageGenerator() {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);

  const fetchImages = async () => {
    if (query === "") return;
    try {
      const response = await fetch(
        `https://api.unsplash.com/search/photos?query=${query}&client_id=${UNSPLASH_ACCESS_KEY}`
      );
      const data = await response.json();
      setImages(data.results);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  return (
    <div className="app-container">
      <h1>Image Generator</h1>
      <Link to="/" className="back-button">
        ← Back to Login
      </Link>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for images..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={fetchImages}>Search</button>
      </div>
      <div className="image-grid">
        {images.map((image) => (
          <div key={image.id} className="image-item">
            <img src={image.urls.small} alt={image.alt_description} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageGenerator;
