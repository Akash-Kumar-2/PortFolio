import React, { useState } from "react";

export default (props) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const next = () =>
    activeSlide < props.data.images.length - 1 && setActiveSlide(activeSlide + 1);

  const prev = () => activeSlide > 0 && setActiveSlide(activeSlide - 1);

  const getStyles = (index) => {
    if (activeSlide === index) return { zIndex: 10, transform: "scale(1)" };
    else return { zIndex: 8, transform: "scale(0.85)", opacity: 0.6 };
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="relative w-3/4 h-3/4 flex justify-between items-center">
          {props.data.images.map((image, index) => (
            <div
              key={image.id}
              className="absolute transition-all duration-300 ease-in-out"
              style={{ width: "300px", height: "400px", ...getStyles(index) }}
            >
              <img
                src={image.path}
                alt={image.name}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="absolute bottom-10 w-full flex justify-between px-4">
          <button
            className="p-2 bg-gray-800 text-white rounded-full"
            onClick={prev}
          >
            Prev
          </button>
          <button
            className="p-2 bg-gray-800 text-white rounded-full"
            onClick={next}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};
