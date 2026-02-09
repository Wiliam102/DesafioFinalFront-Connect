import fotoPerfil from '../../assets/foto.jpg'
import styles from '../Perfil/Perfil.module.scss'
function Perfil (){
    return(
        <section className={styles.containerPerfil}>
          <section className={styles.contentPerfil}>

          
          <img src={fotoPerfil} alt="foto de perfil"/>
          
          <article className={styles.infoPerfil}>
            <h2>Wiliam Ribeiro</h2>
            <h3>voluntário ativo</h3>
            <p>Apaixonado por fazer a diferença na comunidade. Acredito que pequenas ações podem transformar vidas e estou sempre em busca de novas oportunidades para ajudar.</p>
             <ul className={styles.tags}>
                <li>educação</li>
                <li>Meio Ambiente</li>
                <li>Assistência social</li>
                <li>design</li>
             </ul>
          </article>
          </section>
        </section>
    )
}
export default Perfil