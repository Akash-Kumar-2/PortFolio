import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import Carousel from './Crousel';
import Card from './Card/Card';

const MobileSlider = ({ project }) => {
  const [current, setCurrent] = useState(0);
  const images = project.images;
  const total = images.length;

  const prev = () => setCurrent((i) => (i === 0 ? total - 1 : i - 1));
  const next = () => setCurrent((i) => (i === total - 1 ? 0 : i + 1));

  return (
    <div className="relative w-full flex items-center justify-center overflow-hidden rounded-xl bg-black-300">
      <img
        src={images[current].path}
        alt={images[current].name}
        className="w-full h-auto object-cover rounded-xl"
      />
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-full bg-black/60 hover:bg-black/80 transition-colors z-10"
        aria-label="Previous image">
        <img src="/assets/left-arrow.png" alt="prev" className="w-4 h-4" />
      </button>
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-full bg-black/60 hover:bg-black/80 transition-colors z-10"
        aria-label="Next image">
        <img src="/assets/right-arrow.png" alt="next" className="w-4 h-4" />
      </button>
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-colors ${i === current ? 'bg-white' : 'bg-white/40'}`}
          />
        ))}
      </div>
    </div>
  );
};

const Slider = ({ project }) => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const cards = project.images.map((img) => ({
    key: img?.id,
    content: <Card imagen={img?.path} />,
  }));

  if (isMobile) return <MobileSlider project={project} />;

  return (
    <Carousel
      cards={cards}
      height="500px"
      width="65%"
      margin="0 auto"
      offset={2}
      showArrows={true}
    />
  );
};

export default Slider;
