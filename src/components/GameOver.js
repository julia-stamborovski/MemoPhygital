import React from 'react'

function GameOver({ tries, setGameOver, setTries, message }) {

    const handleClick = () => {
        setGameOver(false);
        setTries(0);
    }

  return (
    <div className='gameover'>
        <div className='gameover-box'>
            <div className='trie'>
            <h2>{message}</h2>

                <p>
                     após {tries} tentativas, seu score foi: 
                </p>
            </div>
            <button onClick={handleClick}>jogar novamente</button>
        </div>
       
    </div>
  )
}

export default GameOver