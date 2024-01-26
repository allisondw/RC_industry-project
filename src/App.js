import React from "react";
import "./App.css";
import Card from "./components/Card/Card";
import { useEffect, useState } from "react";
import imagesInput from "../src/data/data.json";
function App() {
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
    <div className="card-container">
      {shuffledCards.map((card) => {
          return (
            <Card
              title={card.title}
              body={card.body}
              image={card.backgroundImage}
            />
          );
      })}
    </div>
  );
}
export default App;