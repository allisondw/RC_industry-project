
import "./Card.scss";
import React from "react";
import { useState } from "react";
import "../../data/data.json";

function Card({content}) {
  const [isHovered, setIsHovered] = useState(false);
  const handleCardClick = () => {
    setIsHovered(!isHovered);
  };
  const {
    image,
    title,
    subtitle,
    copy,
    backgroundColor
  } = content;
  return (
    <div
      className={`flip-container ${isHovered ? "hover" : ""}`}
      onClick={handleCardClick}
    >
      <div className="flipper">
      <div className="front" style={{ backgroundImage: `url(${image})`  }}>
          <h2>{title}</h2>
        </div>
        <div className="back" style={{ backgroundColor: backgroundColor }}>
          <h3>{subtitle}</h3>
            <p>{copy}</p>
        </div>
      </div>
    </div>
  );
}
export default Card;