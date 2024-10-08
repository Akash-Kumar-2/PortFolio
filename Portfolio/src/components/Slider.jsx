import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";

export default (props) => {
  const [activeSlide, setActiveSlide] = useState(props.activeSlide || 0);

  const next = () =>
    activeSlide < props.data.length - 1 && setActiveSlide(activeSlide + 1);

  const prev = () => activeSlide > 0 && setActiveSlide(activeSlide - 1);

  const getStyles = (index) => {
    if (activeSlide === index)
      return {
        opacity: 1,
        transform: "translateX(0px) translateZ(0px) rotateY(0deg)",
        zIndex: 10,
      };
    else if (activeSlide - 1 === index)
      return {
        opacity: 1,
        transform: "translateX(-240px) translateZ(-400px) rotateY(35deg)",
        zIndex: 9,
      };
    else if (activeSlide + 1 === index)
      return {
        opacity: 1,
        transform: "translateX(240px) translateZ(-400px) rotateY(-35deg)",
        zIndex: 9,
      };
    else if (activeSlide - 2 === index)
      return {
        opacity: 1,
        transform: "translateX(-480px) translateZ(-500px) rotateY(35deg)",
        zIndex: 8,
      };
    else if (activeSlide + 2 === index)
      return {
        opacity: 1,
        transform: "translateX(480px) translateZ(-500px) rotateY(-35deg)",
        zIndex: 8,
      };
    else if (index < activeSlide - 2)
      return {
        opacity: 0,
        transform: "translateX(-480px) translateZ(-500px) rotateY(35deg)",
        zIndex: 7,
      };
    else if (index > activeSlide + 2)
      return {
        opacity: 0,
        transform: "translateX(480px) translateZ(-500px) rotateY(-35deg)",
        zIndex: 7,
      };
  };

  return (
    <>
      {/* Carousel */}
      <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        {props.data.map((item, i) => (
          <div
            key={item.id}
            className="absolute w-full h-full transition-transform duration-500"
            style={{
              ...getStyles(i),
            }}
          >
            <div
              className="flex items-center justify-center w-full h-full"
              style={{ backgroundColor: item.bgColor }}
            >
              {item.icon}
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="absolute inset-0 flex justify-between items-center px-8">
        <FontAwesomeIcon
          className="cursor-pointer text-white"
          onClick={prev}
          icon={faChevronLeft}
          size="2x"
        />
        <FontAwesomeIcon
          className="cursor-pointer text-white"
          onClick={next}
          icon={faChevronRight}
          size="2x"
        />
      </div>
    </>
  );
};
