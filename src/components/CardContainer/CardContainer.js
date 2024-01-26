import Card from "../Card/Card";
import { useState, useEffect } from 'react';
import imagesInput from "../../data/data.json";
import image1 from "../../assets/adobestock_552174442_720.jpg";



const CardContainer = () => {
    const [shuffledCards, setShuffledCards] = useState([]);

  const shuffleCards = (imagesInput) => {
    let shuffledContent = imagesInput;
    for (let i = shuffledContent.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [shuffledContent[i], shuffledContent[j]] = [
        shuffledContent[j],
        shuffledContent[i],
      ];
    }
    return shuffledContent;
  };
  useEffect(() => {
    setShuffledCards(shuffleCards(imagesInput));
  }, []);
  return (
    <>
      <div className="card-container">
        {shuffledCards.map((card) => {
          return (
            <>
              <Card content={card} />
            </>
          );
        })}
      </div>
    </>
  );

};

export default CardContainer;