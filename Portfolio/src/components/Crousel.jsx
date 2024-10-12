import Carousel from "react-spring-3d-carousel";
import { useState, useEffect } from "react";
import { config } from "react-spring";

export default function Carroussel({
  cards,
  height,
  width,
  margin,
  offset,
  showArrows,
}) {
  const table = cards.map((element, index) => {
    return { ...element, onClick: () => setGoToSlide(index) };
  });

  const [goToSlide, setGoToSlide] = useState(null);

  return (
    <div style={{ width: width, height: height, margin: margin }}>
      <Carousel
        slides={table}
        goToSlide={goToSlide}
        offsetRadius={offset}
        showNavigation={showArrows}
        animationConfig={config.gentle}
      />
    </div>
  );
}
