import Multirao from '../../assets/mutirao.png';
import Aulas from '../../assets/aulas.png';
import Esporte from '../../assets/esporte.png';
import Familia from '../../assets/familia.png';
import Futuro from '../../assets/futuro.png';
import Conecta from '../../assets/conecta.png';
import { useState } from "react";
import styles from './AcoesDaConnect.module.scss'
function AcoesDaConnect(){
    const [cards, setCards] = useState([
        {
          id:1,
          image:Multirao,
          titulo:"Multirão",
          descricao:"Coletar materiais recicláveis e orientar sobre descarte consciente.",  
        },
        {
          id:2,
          image:Aulas,
          titulo:"Aulas de tecnologia",
          descricao:"Ensinar noções básicas de informática, internet segura e programação. Preparar jovens para o mercado de trabalho digital.", 

        },
     {
        id:3,
        image:Esporte,
        titulo:"Esporte e inclusão",
        descricao:"Organizar treinos e jogos que incentivem a participação de todos. Promover disciplina, saúde e trabalho em equipe entre jovens."
     },
       {
        id:4,
        image:Familia,
        titulo:"Instituto grande família",
        descricao:"Contribua com alimentos não perecíveis e ajude famílias em situação de vulnerabilidade"
     },
     {
        id:5,
        image:Futuro,
        titulo:"Projeto futuro na escola",
        descricao:"Doe livros, cadernos, lápis, mochilas e canetas para ajudar jovens a continuarem seus estudos com mais estrutura."
     },
      {
        id:6,
        image:Conecta,
        titulo:"Quero doar",
        descricao:"Doe computadores usados, tablets ou celulares em bom estado para permitir que jovens tenham acesso ao mundo digital."
     }
    ])
    return(
     <>
       <div className={styles.box1}>
        <h1>Ações da Connect</h1>
        <p>Junte-se a quem acredita na mudança. Apoie, participe e transforme vidas através de ações sociais que geram impacto real nas comunidades.</p>
       </div>
       
       <section className={styles.secaoDeAcoes}>
        {(cards.map( (item) =>
         <article key={item.id} className={styles.card}>
            <img src={item.image} alt={item.descricao}/>
            <h2>{item.titulo}</h2>
            <p>{item.descricao}</p>
            <button>Quero Participar</button>
        </article>
        ))
        }
       </section>
     </>
    )
}
export default AcoesDaConnect