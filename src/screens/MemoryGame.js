import '../App.css';
import { useEffect, useState } from "react";

import Card from '../components/Card';
import GameOver from '../components/GameOver'

import rating from '../assets/rating.svg';
import flip from '../assets/flip.svg';

import { useLocation } from 'react-router-dom';
import { collection, doc, setDoc } from 'firebase/firestore';
import {FIRESTORE_DB } from '../firebaseConfig.js'; 
import Loading from '../components/Loading';

function MemoryGame() {
  const location = useLocation();
  const userData = location.state; 

  let arrayOfImages = [   // lista de objetos com informações sobre as imagens
  {
    num: 1, // o num funciona igual um ID 
    img: 'https://cdna.artstation.com/p/assets/images/images/059/710/786/large/vipin-jacob-tator-gator-02.jpg?1676988379' , // url da imagem
    isMatch: false, // indicador de correspondência
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

 const [loading, setLoading] = useState(true);
 const [cards, setCards] = useState([]);
 const [selectedCards, setSelectedCards] = useState([]);
 const [score, setScore] = useState(0);
 const [tries, setTries] = useState(0);
 const [gameOver, setGameOver] = useState(false);
 const [message, setMessage] = useState(''); 

 
 const shuffleImages = () => {  //Embaralhar as imagens e configurar o estado
  // Cria uma novo array duplicando as imagens e adicionando um ID único a cada item
  let shuffledArray = [...arrayOfImages, ...arrayOfImages]
  .map((item, index)=>({ ...item, id:index+1 }))
 // Embaralha a array usando o algoritmo de Fisher-Yates
  .sort((a,b)=> .5 - Math.random());
// Define o estado das cartas com a array embaralhada
  setCards(shuffledArray);
  setTimeout(() => {
    setLoading(false);
  }, 3500); // 3.5sec
 };
 useEffect(() => {   // lógica executada após a renderização inicial

    if(score === arrayOfImages.length) {
      setTimeout(() => {
      shuffleImages();
      },1000)

    }
  }, [score, shuffleImages])

 useEffect(() => {   //  lógica executada quando há alterações nas cartas selecionadas
  if(selectedCards.length === 2){
    setTimeout(() => {
      setSelectedCards([]);
    },1000)
    checkMatch();
  }
 }, [selectedCards]);


 const checkMatch = () => {   // lógica para verificar se as cartas selecionadas correspondem
  if (selectedCards[0].num === selectedCards[1].num){
    // Se as cartas correspondem, aumenta o score
    setScore((prev) => prev + 1)

   // Atualiza o estado das cartas para indicar que são uma correspondência
    let updatedCards = cards.map((card) => {
      if(card.num ===  selectedCards[0].num) {
        return {...card, isMatch:true };
      }
      return card
    })
    setCards(updatedCards);
  } else {
   // Se as cartas não correspondem, aumenta o número de tentativas
    setTries((prev) => prev + 1)
  }
  }

  // Efeito para reiniciar o jogo após um intervalo
  useEffect(() => {
    setTimeout(() => {
      shuffleImages();
      setGameOver(false);
      console.log(gameOver)
    }, 1000);
  }, []);
  
  const maxTries = 20;  // Quantidade máxima de tentativas
  useEffect(() => {
  
    const saveScore = async () => {   // Verificar vitória ou derrota e salvar o score

      if (!userData.email) {
        console.error('Email do usuário não encontrado. Não é possível salvar o score.');
        return;
      }
  
      const scoresCollectionRef = collection(FIRESTORE_DB, 'scores');
      const newScoreDocRef = doc(scoresCollectionRef, userData.email);
  
      const scoreData = {
        name: userData.name,
        email: userData.email,
        score: score,
        phone: userData.phone,
      };
  
      try {
        await setDoc(newScoreDocRef, scoreData);
        console.log('Score salvo com sucesso na coleção "scores"');
      } catch (error) {
        console.error('Erro ao salvar o score na coleção "scores":', error);
      }
    };
  
    if (score === arrayOfImages.length) {
      setMessage('Parabéns! Você venceu!');
      setTimeout(() => {
        shuffleImages();
        setGameOver(true);
      }, 1000);
      saveScore();
    } else if (tries >= maxTries) {
      setMessage('Você perdeu. Tente novamente.');
      saveScore(); 
      setTimeout(() => {
        shuffleImages();
        setGameOver(true);
      }, 1000);
    }
  }, [score, tries, userData, maxTries]);
  
  
  return (
    <>
    {loading ? (
      <Loading />
    ) : (
      <>
        {gameOver && (
          <GameOver
            setTries={setTries}
            tries={tries}
            setGameOver={setGameOver}
            score={score}
            setScore={setScore}
            message={message}
          />
        )}
        <div className="container">
          <div className="score-container">
            <div className="score">
              <img src={rating} className="score-icon" alt="score" /> <span className="points">{score}</span>
            </div>
            <p>
              Vamos ajudar o Clodo, {userData && userData.name ? userData.name : ''}! Faltam {20 - tries} tentativas
            </p>
            <div className="tries">
              <img src={flip} className="tries-icon" alt="tries" /> <span className="points">{tries}</span>
            </div>
          </div>
          <div className="game-container">
            {cards.map((card) => (
              <Card key={card.id} card={card} setSelectedCards={setSelectedCards} selectedCards={selectedCards} />
            ))}
          </div>
        </div>
      </>
    )}
  </>
)
}

export default MemoryGame;