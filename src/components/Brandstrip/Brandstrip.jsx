import React from "react";
import "./Brandstrip.scss";

const brands = [
  { src: "https://via.placeholder.com/150", alt: "Brand 1" },
  { src: "https://via.placeholder.com/150", alt: "Brand 2" },
  { src: "https://via.placeholder.com/150", alt: "Brand 3" },
  { src: "https://via.placeholder.com/150", alt: "Brand 4" },
  { src: "https://via.placeholder.com/150", alt: "Brand 5" },
];

function Brandstrip() {
  return React.createElement(
    "div",
    { className: "brandstrip" },
    brands.map((brand, idx) =>
      React.createElement(
        "div",
        { className: "brandstrip__item", key: idx },
        React.createElement("img", { src: brand.src, alt: brand.alt })
      )
    )
  );
}

export default Brandstrip;
