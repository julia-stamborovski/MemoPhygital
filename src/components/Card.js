import React, { useEffect, useState } from 'react'
import flipSound from '../assets/flipcard.mp3';

function Card({ card, setSelectedCards, selectedCards }) {

    const [ isFlipped, setIsFlipped ] = useState(false);
        
    const handleClick = () => {
        playFlipSound();
        setSelectedCards([...selectedCards, card])
    }

    useEffect(() => {
        if(selectedCards[0] === card || selectedCards[1] === card || card.isMatch){
            setIsFlipped(true)
        } else {
            setIsFlipped(false) 
        }
    },[selectedCards])

    const playFlipSound = () => {
        const audio = new Audio(flipSound);
        audio.play();
      };

    // o stop-clicking é para evitar do usuário encontrar a carta par clicando duas vezes na carta
  return  (
  <div className={isFlipped?"card open stop-clicking" : "card"} onClick={handleClick}>
    <div className='front'>
        <img className='card-img' src={card.img} alt='' />
    </div>
    <div className='back'>

    </div>
  </div>)
}

export default Card