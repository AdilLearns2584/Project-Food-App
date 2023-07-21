import React from 'react';
import "./InspirationCard.css"

const InspirationCard = ({image,text}) => {
  return (
    <div className='inspiration-card-container'>
        <img className="inspiration-card-image" src={image} alt={text} />
        <p className='inspiration-card-text'>{text}</p>
    </div>
  )
}

export default InspirationCard