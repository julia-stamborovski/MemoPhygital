import React from 'react'
import Lead from './Lead'
import '../App.css';

function History() {
  return (
    <div className='container-history'>
        <p className='enfase-text'>Em uma floresta tropical exuberante, morava um crocodilo simpático chamado Clodo. Clodo era conhecido por sua gentileza e espírito amigável, mas ele enfrentava um problema: Clodo se esqueceu de onde estavam seus seis melhores amigos, outros crocodilos, e estava determinado a encontrá-los.
</p>
        <p className='enfase-text'>A memória do Clodo não era das melhores (como você já pode ter percebido), então ele decidiu que a melhor maneira de encontrar seus amigos era aprimorá-la. Clodo precisava de alguém para ajudá-lo, e, por sorte, ele tinha um amigo leal que estava disposto a ajudar: 
</p>       
<h2 className='enfase-text'>você!</h2>
         <p className='enfase-text'>Uma tarde, Clodo se aproximou de você e explicou sua situação. Ele confidenciou que precisava de alguém para jogar um jogo de memória com ele, pois acreditava que isso o ajudaria a melhorar sua capacidade de lembrar onde seus amigos estavam.</p>
         <h2  className='enfase-text' >Mas... tem um problema, Clodo não lembra do seu nome também! E muito menos seu e-mail e seu telefone...</h2>
         <Lead /> 
     </div>
  )
}

export default History