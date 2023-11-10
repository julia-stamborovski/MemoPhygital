import React from 'react'
import Lead from './Lead'
import '../App.css';

function History() {
  return (
    <div className='container-history'>
        <h1 className='title-history'>A Jornada de Clodo e Seu Amigo em Busca de Memórias Perdidas</h1>
        <p className='text-2'>Era uma vez, em uma floresta tropical exuberante, morava um crocodilo simpático chamado Clodo. 
        Clodo era conhecido por sua gentileza e espírito amigável, mas ele enfrentava um dilema: havia perdido contato com seus seis melhores amigos,
         outros crocodilos, e estava determinado a encontrá-los.</p>
        <p className='text'>No entanto, Clodo sabia que sua memória não era das melhores, então ele decidiu que 
        a melhor maneira de encontrar seus amigos era aprimorá-la. Clodo precisava de alguém para ajudá-lo,
         e, por sorte, ele tinha um amigo leal que estava disposto a ajudar: você!</p>       
         <p className='text-2'>Uma tarde, Clodo se aproximou de você e explicou sua situação. Ele confidenciou que precisava de alguém para jogar um jogo de memória com ele, pois acreditava que isso o ajudaria a melhorar sua capacidade de lembrar onde seus amigos estavam.</p>
         <h2 className='text'>Mas... tem um problema, Clodo não lembra do seu nome também! E muito menos seu e-mail e seu telefone...</h2>
         <Lead /> 
     </div>
  )
}

export default History