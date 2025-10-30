import React, { useState } from "react";
import "./imgSlider.css";

const ImgSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Sample cards data - you can replace these with your actual images
  const cards = [
    {
      id: 1,
      image: "https://via.placeholder.com/400x300/FF6B35/FFFFFF?text=Beer+1",
      title: "Craft Lager",
      description: "Smooth and refreshing craft lager"
    },
    {
      id: 2,
      image: "https://via.placeholder.com/400x300/F7931E/FFFFFF?text=Beer+2",
      title: "IPA Special",
      description: "Hoppy India Pale Ale with citrus notes"
    },
    {
      id: 3,
      image: "https://via.placeholder.com/400x300/FFD23F/333333?text=Beer+3",
      title: "Wheat Beer",
      description: "Light and cloudy wheat beer"
    },
    {
      id: 4,
      image: "https://via.placeholder.com/400x300/EE4B2B/FFFFFF?text=Beer+4",
      title: "Dark Stout",
      description: "Rich and creamy dark stout"
    },
    {
      id: 5,
      image: "https://via.placeholder.com/400x300/40E0D0/333333?text=Beer+5",
      title: "Pilsner",
      description: "Classic crisp pilsner"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => 
      prev === cards.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => 
      prev === 0 ? cards.length - 1 : prev - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="slider-container">
      <div className="slider-wrapper">
        <button className="slider-btn prev-btn" onClick={prevSlide}>
          &#8249;
        </button>

        <div className="slider-track">
          <div
            className="slider-content"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {cards.map((card) => (
              <div key={card.id} className="slider-card">
                <div className="card-image-container">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="card-image"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <button className="slider-btn next-btn" onClick={nextSlide}>
          &#8250;
        </button>
      </div>

      <div className="slider-dots">
        {cards.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImgSlider;