import React from 'react'
import illustration from '../assets/illustration.png'
import '../App.css';

function Start() {
  return (
    <div className='start-container'>
        <img src={illustration} className='image-crocodile' alt='Ilustração de um crocodilo sentado, com fundo esfumaçado azulado'/>
        <h1 className='title-start'> Vamos Começar? </h1>
        <a href='/historia'> <button className='button-start'> Vamos!</button></a>
    </div>
  )
}

export default Start