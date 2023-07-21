import React from 'react';
import { inspirationData } from './constants';
import InspirationCard from './InspirationCard/InspirationCard';
import "./Inspiration.css";

const Inspiration = () => {
  return (
    <div className="inspiration-container">
        <p className='inspiration-title'>Inspiration for your first Order</p>
        <div className='inspiration-cards-container'>
            {inspirationData.map((inspiration)=>(
                <InspirationCard key={inspiration.id} image={inspiration.image} text={inspiration.text}/>
            ))}
        </div>    
    </div>
  )
}

export default Inspiration