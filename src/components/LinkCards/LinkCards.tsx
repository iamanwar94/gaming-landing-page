import { useState } from "react";
import "./LinkCards.css"; // Create this CSS file if necessary

const LinkCards = () => {
  const [isSliderOpen, setIsSliderOpen] = useState(false);

  const handleCardClick = () => {
    setIsSliderOpen(true);
  };

  const handleCloseSlider = () => {
    setIsSliderOpen(false);
  };

  return (
    <div className="link-cards-container">
      <div className="cards-container">
        {[1, 2, 3, 4].map((card, index) => (
          <div key={index} className="card" onClick={handleCardClick}>
            Card {card}
          </div>
        ))}
      </div>
      <div className={`slider ${isSliderOpen ? "open" : ""}`}>
        <button onClick={handleCloseSlider}>X</button>
        {/* <p>Slider Content Here</p> */}
      </div>
    </div>
  );
};

export default LinkCards;
