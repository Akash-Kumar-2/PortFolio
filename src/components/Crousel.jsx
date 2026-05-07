import Carousel from "react-spring-3d-carousel";
import { useState } from "react";
import { config } from "react-spring";

export default function Carroussel({ cards, height, width, margin, offset }) {
  const [goToSlide, setGoToSlide] = useState(0);

  const table = cards.map((element, index) => ({
    ...element,
    onClick: () => setGoToSlide(index),
  }));

  const prev = () => setGoToSlide((i) => (i === 0 ? cards.length - 1 : i - 1));
  const next = () => setGoToSlide((i) => (i === cards.length - 1 ? 0 : i + 1));

  return (
    <div className="relative" style={{ width, height, margin }}>
      <Carousel
        slides={table}
        goToSlide={goToSlide}
        offsetRadius={offset}
        showNavigation={false}
        animationConfig={config.gentle}
      />

      {/* custom arrows centered vertically */}
      <button
        onClick={prev}
        className="absolute left-0 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-full bg-black/60 hover:bg-black/80 transition-colors z-10"
        aria-label="Previous">
        <img src="/assets/left-arrow.png" alt="prev" className="w-4 h-4" />
      </button>
      <button
        onClick={next}
        className="absolute right-0 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-full bg-black/60 hover:bg-black/80 transition-colors z-10"
        aria-label="Next">
        <img src="/assets/right-arrow.png" alt="next" className="w-4 h-4" />
      </button>
    </div>
  );
}
