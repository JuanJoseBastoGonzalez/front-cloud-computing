import React, { useEffect, useState, useRef } from "react";
import "./banner.scss";

const API_KEY = "wEr4DGtNLeSEIWKODVfOCjEnW7L1AiOwYQyqCiSPu4FKi7kKeiK8MzwO";
const QUERY = "car"; // Puedes cambiar el término de búsqueda

function Banner() {
  const [photos, setPhotos] = useState([]);
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    fetch(`https://api.pexels.com/v1/search?query=${QUERY}&per_page=4`, {
      headers: { Authorization: API_KEY },
    })
      .then((res) => res.json())
      .then((data) => setPhotos(data.photos || []));
  }, []);

  // Auto-advance logic
  useEffect(() => {
    if (photos.length === 0) return;
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % photos.length);
    }, 3000); // Cambia cada 3 segundos
    return () => clearTimeout(timeoutRef.current);
  }, [current, photos.length]);

  if (photos.length === 0) return null;

  return (
    <div className="banner">
      <section className="carousel" aria-label="Gallery">
        <ol className="carousel__viewport">
          {photos.map((photo, idx) => (
            <li
              key={photo.id}
              id={`carousel__slide${idx + 1}`}
              tabIndex={0}
              className={`carousel__slide${
                current === idx ? " active" : ""
              }`}
              style={{ display: current === idx ? "block" : "none" }}
            >
              <img
                src={photo.src.large}
                alt={photo.alt || `Car ${idx + 1}`}
                className="carousel__image"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              <div className="carousel__snapper">
                <button
                  className="carousel__prev"
                  onClick={() =>
                    setCurrent((prev) =>
                      prev === 0 ? photos.length - 1 : prev - 1
                    )
                  }
                >
                  Prev
                </button>
                <button
                  className="carousel__next"
                  onClick={() =>
                    setCurrent((prev) => (prev + 1) % photos.length)
                  }
                >
                  Next
                </button>
              </div>
            </li>
          ))}
        </ol>
        <aside className="carousel__navigation">
          <ol className="carousel__navigation-list">
            {photos.map((_, idx) => (
              <li className="carousel__navigation-item" key={idx}>
                <button
                  className={`carousel__navigation-button${
                    current === idx ? " active" : ""
                  }`}
                  onClick={() => setCurrent(idx)}
                >
                  Go to slide {idx + 1}
                </button>
              </li>
            ))}
          </ol>
        </aside>
      </section>
    </div>
  );
}

export default Banner;