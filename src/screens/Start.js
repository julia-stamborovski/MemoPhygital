import React from 'react'
import illustration from '../assets/illustration.png'
import '../App.css';

function Start() {
  return (
    <div className='start-container'>
        <img src={illustration} className='image-crocodile' alt='Ilustração de um crocodilo sentado, com fundo esfumaçado azulado'/>
        <h1 className='title-start'> Vamos Começar? </h1>
        <button className='button-start'><a href='/historia'> Vamos! </a></button>
    </div>
  )
}

export default Start