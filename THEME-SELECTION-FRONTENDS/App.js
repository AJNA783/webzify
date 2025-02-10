import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [websiteType, setWebsiteType] = useState("");
  const [designTone, setDesignTone] = useState("");
  const [images, setImages] = useState([]);

  // Fetch images when both dropdown values are selected
  useEffect(() => {
    if (websiteType && designTone) {
      axios
        .get("http://localhost:5000/api/images/get-approved", {
          params: { websiteType, designTone },
        })
        .then((response) => {
          console.log("API Response:", response.data);
          setImages(response.data);
        })
        .catch((error) => {
          console.error("Error fetching images:", error);
        });
    }
  }, [websiteType, designTone]);

  return (
    <div className="App">
      <header className="hero">
        <div className="hero-overlay">
          <h1 className="hero-title">Discover Your Perfect Theme</h1>
          <p className="hero-subtitle">
            Choose your website type and design tone to unveil stunning templates.
          </p>
        </div>
      </header>
      <main className="main-content">
        <div className="form-container">
          <div className="dropdown">
            <label htmlFor="websiteType">Website Type</label>
            <select
              id="websiteType"
              value={websiteType}
              onChange={(e) => setWebsiteType(e.target.value)}
            >
              <option value="">Select Type</option>
              <option value="E-commerce">E-commerce</option>
              <option value="Service-Based">Service-Based</option>
              <option value="Informative">Informative</option>
            </select>
          </div>
          <div className="dropdown">
            <label htmlFor="designTone">Design Tone</label>
            <select
              id="designTone"
              value={designTone}
              onChange={(e) => setDesignTone(e.target.value)}
            >
              <option value="">Select Tone</option>
              <option value="Professional">Professional</option>
              <option value="Playful and Chill">Playful and Chill</option>
              <option value="Relax">Relax</option>
            </select>
          </div>
        </div>
        <section className="gallery">
          {images.length > 0 ? (
            images.map((img, index) => (
              <div key={index} className="card">
                <img src={img.imageUrl} alt="Template" />
              </div>
            ))
          ) : (
            <div className="no-images">
              <p>
                Select your options above to reveal your creative website template!
              </p>
            </div>
          )}
        </section>
      </main>
      <footer className="footer">
        <p>&copy; 2025 Creative Themes. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
