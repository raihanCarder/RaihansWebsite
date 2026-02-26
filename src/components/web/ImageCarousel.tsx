import { useEffect, useRef, useState } from "react";
import { images } from "../../utils/carouselImages";

export default function ImageCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef<number | null>(null);

  const restartTimer = () => {
    if (intervalRef.current !== null) {
      window.clearInterval(intervalRef.current);
    }
    intervalRef.current = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 6500);
  };

  useEffect(() => {
    restartTimer();
    return () => {
      if (intervalRef.current !== null) {
        window.clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <div className="about-carousel">
      <div className="carousel-frame">
        <img
          src={images[activeIndex]}
          alt={`About me ${activeIndex + 1}`}
          className="about-image"
          loading="lazy"
          decoding="async"
        />
        <div className="carousel-dots" role="tablist" aria-label="About images">
          {images.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`carousel-dot ${index === activeIndex ? "active" : ""}`}
              onClick={() => {
                setActiveIndex(index);
                restartTimer();
              }}
              aria-label={`Show image ${index + 1}`}
              aria-pressed={index === activeIndex}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
