// import React, { useState } from 'react';
// import './Card.scss';

// const Card = ({ content }) => {
//     const [isFlipped, setIsFlipped] = useState(false);

//     const handleClick = () => {
//         setIsFlipped(!isFlipped);
//     };

//     return (
//         <div className={`card-wrapper ${isFlipped ? 'flipped' : ''}`} onClick={handleClick}>
//             <div className='card'>
//                 {/* <div className="card__front" style={{ backgroundImage: `url(${content.image})` }}> */}
//                 <div className="card__front" >
//                     {/* <h1>{content.title}</h1> */}
//                     <h1>Title</h1>
//                 </div>
//                 <div className="card__back">   
//                     {/* <p>{content.body}</p> */}
//                     <p>body copy</p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Card;


import "./Card.scss";
import React from "react";
import { useState } from "react";
function Card({content}) {
  const [isHovered, setIsHovered] = useState(false);
  const handleCardClick = () => {
    setIsHovered(!isHovered);
  };
  const {
    image,
    title,
    body
  } = content;
  return (
    <div
      className={`flip-container ${isHovered ? "hover" : ""}`}
      onClick={handleCardClick}
    >
      <div className="flipper" style={{ backgroundImage: `url(${image})` }}>
        <div className="front">
          <h2>{title}</h2>
        </div>
        <div className="back">
          <h2>{body}</h2>
        </div>
      </div>
    </div>
  );
}
export default Card;