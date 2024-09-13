import { useState, useEffect } from "react";
import imagen1 from "../../../assets/carousel/foto1.webp";
import imagen2 from "../../../assets/carousel/foto2.webp";
import imagen3 from "../../../assets/carousel/foto3.webp";
import imagen4 from "../../../assets/carousel/foto4.webp";

const images = [imagen1, imagen2, imagen3, imagen4];

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel w-full min-h-40">
      <img src={images[currentSlide]} className="w-full object-cover" />
      <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between"></div>
    </div>
  );
};

export default Carousel;
