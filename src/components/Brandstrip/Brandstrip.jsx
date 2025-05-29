import React from "react";
import "./Brandstrip.scss";

const brands = [
  { domain: "toyota.com", alt: "Toyota" },
  { domain: "ford.com", alt: "Ford" },
  { domain: "chevrolet.com", alt: "Chevrolet" },
  { domain: "honda.com", alt: "Honda" },
  { domain: "bmw.com", alt: "BMW" },
];

function Brandstrip() {
  return (
    <div className="brandstrip">
      {brands.map((brand, idx) => (
        <div className="brandstrip__item" key={idx}>
          <img
            src={`https://logo.clearbit.com/${brand.domain}`}
            alt={brand.alt}
            style={{ width: "80px", height: "auto", objectFit: "contain" }}
          />
        </div>
      ))}
    </div>
  );
}

export default Brandstrip;
