import React from "react";
import "./banner.scss";

const slides = [
  {
    id: "carousel__slide1",
    prev: "#carousel__slide4",
    next: "#carousel__slide2",
    prevLabel: "Go to last slide",
    nextLabel: "Go to next slide",
  },
  {
    id: "carousel__slide2",
    prev: "#carousel__slide1",
    next: "#carousel__slide3",
    prevLabel: "Go to previous slide",
    nextLabel: "Go to next slide",
  },
  {
    id: "carousel__slide3",
    prev: "#carousel__slide2",
    next: "#carousel__slide4",
    prevLabel: "Go to previous slide",
    nextLabel: "Go to next slide",
  },
  {
    id: "carousel__slide4",
    prev: "#carousel__slide3",
    next: "#carousel__slide1",
    prevLabel: "Go to previous slide",
    nextLabel: "Go to first slide",
  },
];

function Banner() {
  return (
    <div className="banner">
      <section className="carousel" aria-label="Gallery">
        <ol className="carousel__viewport">
          {slides.map((slide, idx) => (
            <li
              key={slide.id}
              id={slide.id}
              tabIndex={0}
              className="carousel__slide"
            >
              <div className="carousel__snapper">
                <a href={slide.prev} className="carousel__prev">
                  {slide.prevLabel}
                </a>
                <a href={slide.next} className="carousel__next">
                  {slide.nextLabel}
                </a>
              </div>
            </li>
          ))}
        </ol>
        <aside className="carousel__navigation">
          <ol className="carousel__navigation-list">
            {slides.map((slide, idx) => (
              <li className="carousel__navigation-item" key={slide.id}>
                <a
                  href={`#${slide.id}`}
                  className="carousel__navigation-button"
                >
                  Go to slide {idx + 1}
                </a>
              </li>
            ))}
          </ol>
        </aside>
      </section>
    </div>
  );
}

export default Banner;