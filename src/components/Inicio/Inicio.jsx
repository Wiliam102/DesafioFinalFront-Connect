import BannerInicio from '../../assets/img-tela-inicial.png'
import styles from './Inicio.module.scss'
function Inicio(){
    return(
        <section className={styles.secaoInicio}>
            <div className={styles.boxInicio}>
                <h1 className={styles.tituloInicio}>Projetos Sociais que transformam</h1>
               <p className={styles.paragrafoInicio}>Conectamos sua empresa com projetos sociais impactantes. Juntos, criamos mudanças reais na comunidade.</p>
            </div>
            <img src={BannerInicio} alt="imagem e banner da tela inicial"/>
        </section>
    )
}
export default Inicio