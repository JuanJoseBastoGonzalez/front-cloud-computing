import React, { useRef, useState, useEffect } from "react";
import Navbar from "../../components/Nav/Nav";
import "./BuyCar.scss";

function BuyCar() {
  const [carData, setCarData] = useState(null);
  const [imgId, setImgId] = useState(0);
  const showcaseRef = useRef(null);

  // Simula fetch de datos (puedes reemplazar por fetch real)
  useEffect(() => {
    // Simulación de respuesta JSON
    const fetchCar = async () => {
      // Aquí iría tu fetch real, por ejemplo:
      // const res = await fetch("/api/vehiculo/123");
      // const data = await res.json();
      const data = {
        title: "Toyota Corolla 2022",
        brandLink: "#",
        brandText: "Ver más de Toyota",
        rating: 4.8,
        ratingCount: 53,
        images: [
          "https://cdn.pixabay.com/photo/2017/01/06/19/15/auto-1957037_1280.jpg",
          "https://cdn.pixabay.com/photo/2012/05/29/00/43/car-49278_1280.jpg",
          "https://cdn.pixabay.com/photo/2013/07/12/15/55/car-150334_1280.png",
          "https://cdn.pixabay.com/photo/2015/01/19/13/51/car-604019_1280.jpg",
        ],
        oldPrice: "$25,000",
        newPrice: "$23,500",
        discount: "6% OFF",
        details: [
          "Toyota Corolla 2022, automático, motor 1.8L, 140HP, bajo consumo, ideal para ciudad y carretera. Equipado con pantalla táctil, cámara de reversa, sensores de proximidad y aire acondicionado.",
          "Garantía de fábrica vigente. Único dueño, mantenimientos al día y sin accidentes."
        ],
        specs: [
          { label: "Color", value: "Gris metálico" },
          { label: "Disponibilidad", value: "En stock" },
          { label: "Categoría", value: "Sedán" },
          { label: "Transmisión", value: "Automática" },
          { label: "Kilometraje", value: "15,000 km" },
          { label: "Ubicación", value: "Ciudad de México" },
          { label: "Envío", value: "Gratis en CDMX" },
        ]
      };
      setCarData(data);
    };
    fetchCar();
  }, []);

  // Slide effect
  useEffect(() => {
    const slideImage = () => {
      if (showcaseRef.current) {
        const displayWidth = showcaseRef.current.querySelector("img")?.clientWidth || 0;
        showcaseRef.current.style.transform = `translateX(${-imgId * displayWidth}px)`;
      }
    };
    slideImage();
    window.addEventListener("resize", slideImage);
    return () => window.removeEventListener("resize", slideImage);
  }, [imgId, carData]);

  if (!carData) {
    return (
      <>
        <Navbar />
        <div className="card-wrapper">
          <div className="card">
            <div style={{ padding: "2rem" }}>Cargando información del vehículo...</div>
          </div>
        </div>
      </>
    );
  }

  const fullStars = Math.floor(carData.rating);
  const halfStar = carData.rating % 1 >= 0.5;

  return (
    <>
      <Navbar />
      <div className="card-wrapper">
        <div className="card">
          {/* card left */}
          <div className="product-imgs">
            <div className="img-display">
              <div className="img-showcase" ref={showcaseRef}>
                {carData.images.map((src, idx) => (
                  <img src={src} alt="car" key={idx} />
                ))}
              </div>
            </div>
            <div className="img-select">
              {carData.images.map((src, idx) => (
                <div className="img-item" key={idx}>
                  <a
                    href="#"
                    data-id={idx + 1}
                    onClick={e => {
                      e.preventDefault();
                      setImgId(idx);
                    }}
                  >
                    <img src={src} alt="car" />
                  </a>
                </div>
              ))}
            </div>
          </div>
          {/* card right */}
          <div className="product-content">
            <h2 className="product-title">{carData.title}</h2>
            <a href={carData.brandLink} className="product-link">{carData.brandText}</a>
            <div className="product-rating">
              {[...Array(fullStars)].map((_, i) => (
                <i className="fas fa-star" key={i}></i>
              ))}
              {halfStar && <i className="fas fa-star-half-alt"></i>}
              <span>{carData.rating} ({carData.ratingCount})</span>
            </div>

            <div className="product-price">
              <p className="last-price">Precio anterior: <span>{carData.oldPrice}</span></p>
              <p className="new-price">Precio actual: <span>{carData.newPrice} ({carData.discount})</span></p>
            </div>

            <div className="product-detail">
              <h2>Detalles del vehículo:</h2>
              {carData.details.map((txt, idx) => (
                <p key={idx}>{txt}</p>
              ))}
              <ul>
                {carData.specs.map((spec, idx) => (
                  <li key={idx}>{spec.label}: <span>{spec.value}</span></li>
                ))}
              </ul>
            </div>

            <div className="purchase-info">
              <input type="number" min="1" defaultValue="1" />
              <button type="button" className="btn">
                Agregar al carrito <i className="fas fa-shopping-cart"></i>
              </button>
              <button type="button" className="btn">Comparar</button>
            </div>

            <div className="social-links">
              <p>Compartir en: </p>
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-whatsapp"></i></a>
              <a href="#"><i className="fab fa-pinterest"></i></a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BuyCar;