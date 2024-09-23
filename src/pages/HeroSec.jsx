import React, { useEffect, useState } from "react";
import "../pagesCss/HeroSec.css";

const HeroSec = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [firstSlidePlayed, setFirstSlidePlayed] = useState(false);

  const crousalsImages = [
    "/images/pic13.jpg",
    "/images/pic3.jpg",
    "/images/pic15.jpeg",
    "/images/pic1.jpg",
    "/images/pic5.jpg",
    "/images/picss.jpg",
    "/images/pic12.jpeg",
    "/images/pic9.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % crousalsImages.length;
        if (newIndex === 1) setFirstSlidePlayed(true); // Mark the first slide as played when the second slide appears
        return newIndex;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [crousalsImages.length]);

  return (
    <main className="new-sec bg-dark">
      <ul className="slide">
        {crousalsImages.map((imageItem, index) => (
          <li
            key={index}
            className={`item ${index === currentIndex ? "active" : ""} ${
              index === 0 && !firstSlidePlayed ? "first-slide" : ""
            } ${index === 0 && firstSlidePlayed ? "first-slide-done" : ""}`}
          >
            <img
              src={imageItem}
              alt={`crousalsImages ${index + 1}`}
              className="img-fluids"
            />
          </li>
        ))}
      </ul>
    </main>
  );
};

export default HeroSec;
