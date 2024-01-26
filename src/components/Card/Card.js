import React, { useState } from 'react';
import './Card.css';

const Card = ({ content }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div className={`card-wrapper ${isFlipped ? 'flipped' : ''}`} onClick={handleClick}>
            <div className='card'>
                <div className="card__front" style={{ backgroundImage: `url(${content.image})` }}>
                    <h1>{content.title}</h1>
                </div>
                <div className="card__back">   
                    <p>{content.body}</p>
                </div>
            </div>
        </div>
    );
};

export default Card;