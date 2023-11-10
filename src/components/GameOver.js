import React from 'react'

function GameOver({ tries, setGameOver, setTries, message, score, setScore}) {

    const handleClick = () => {
        setGameOver(false);
        setTries(0);
        setScore(0);
    }

  return (
    <div className='gameover'>
        <div className='gameover-box'>
            <div className='trie'>
            <h2>{message}</h2>

                <p>
                     Após {tries} tentativas, seu score foi: {score}
                </p>
            </div>
            <button onClick={handleClick}>Jogar Novamente</button>
        </div>
       
    </div>
  )
}

export default GameOver