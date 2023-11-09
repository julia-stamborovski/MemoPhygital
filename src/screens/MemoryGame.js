import '../App.css';
import { useEffect, useState } from "react";

import Card from '../components/Card';
import GameOver from '../components/GameOver'

import logo from '../assets/logo.png';
import rating from '../assets/rating.svg';
import flip from '../assets/flip.svg';
import party from '../assets/memoryImages/party.png';

function MemoryGame() {
  let arrayOfImages = [
  {
    num: 1,
    img: 'https://cdna.artstation.com/p/assets/images/images/059/710/786/large/vipin-jacob-tator-gator-02.jpg?1676988379' ,
    isMatch: false,
  },
  {
    num: 2,
    img: 'https://cdnb.artstation.com/p/assets/images/images/042/683/853/large/shafi-ahi-crocodile-copy.jpg?1635181648',
    isMatch: false,
  },
  {
    num: 3 ,
    img: 'https://cdna.artstation.com/p/assets/images/images/012/334/766/large/wayne-grech-composite-inc003.jpg?1534265665',
    isMatch: false,
  },
  {
    num: 4,
    img: 'https://cdnb.artstation.com/p/assets/images/images/029/532/291/large/michael-dashow-skatepark-animals-ollie-gator-final-1038x1200.jpg?1597850967',
    isMatch: false,
  },
  {
    num: 5,
    img: 'https://cdnb.artstation.com/p/assets/images/images/034/194/981/large/lena-nugumanova-crocksar-square.jpg?1611662327',
    isMatch: false,
  },
  {
  num:6, 
  img: 'https://cdna.artstation.com/p/assets/images/images/066/854/326/large/olivia-l-anim-3-0-00-00-00.jpg?1693936791',
  isMatch: false,
  }
 ]
 const [cards, setCards] = useState([]);
 const [selectedCards, setSelectedCards] = useState([]);
 const [score, setScore] = useState(0);
 const [tries, setTries] = useState(0);
 const [gameOver, setGameOver] = useState(false);
 const [message, setMessage] = useState(''); 

 
 const shuffleImages = () => {
  // double array
  let shuffledArray = [...arrayOfImages, ...arrayOfImages]
  // add id 
  .map((item, index)=>({ ...item, id:index+1 }))
  // shuffle
  .sort((a,b)=> .5 - Math.random());
  setScore(0)
  setCards(shuffledArray);
 };

 useEffect(() => {
  shuffleImages();
 }, []);

 useEffect(() => {
  console.log(selectedCards);
  if(selectedCards.length === 2){
    setTimeout(() => {
      setSelectedCards([]);
    },1000)
    checkMatch();
  }
 }, [selectedCards]);


 const checkMatch = () => {
  if (selectedCards[0].num === selectedCards[1].num){
    console.log('uhu!!')
    setScore((prev) => prev + 1)
    let updatedCards = cards.map((card) => {
      if(card.num ===  selectedCards[0].num) {
        return {...card, isMatch:true };
      }
      return card
    })
    setCards(updatedCards);
  } else {
    console.log('nao é o par...')
    setTries((prev) => prev + 1)
  }
  }

  useEffect(() => {
    const maxTries = 20; // Limite de 20 tentativas
  
    if (score === arrayOfImages.length) {
      setMessage('Parabéns! Você venceu!');
      setGameOver(true);
    } else if (tries >= maxTries) {
      setMessage('Você perdeu. Tente novamente.');
      setGameOver(true);
    }
  }, [score, tries]);
  

  // restart 

  useEffect(() => {
    if(score === arrayOfImages.length) {
      setTimeout(() => {
      shuffleImages();
      setGameOver(true);
      },1000)
   
    }
  }, [score, shuffleImages])

  return (
  <>
  {gameOver && <GameOver setTries={setTries} tries={tries} setGameOver={setGameOver}
  message={message}

/>}
    <div className="container">
        <img src={logo} className='logo' alt='logo'/>
      <div className='score-container'>
        <div className='score'>
            <img src={rating} className='score-icon' alt='score'/> <span className='points'>{score}</span></div>
        <div className='tries'><img src={flip} className='tries-icon' alt='tries'/> <span className='points'>{tries}</span></div>

      </div>
      <div className='game-container'>
        {cards.map((card)=> (
          <Card 
          key={card.id}
          card={card}
          setSelectedCards={setSelectedCards}
          selectedCards={selectedCards}
          />
        ))}
      </div>
    </div>
  </>
)
}

export default MemoryGame;
