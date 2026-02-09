import Logo from '../../assets/logo.png'
import styles from './Footer.module.scss'
import whatssapIcone from '../../assets/whatssap.png'
import instagramIcone from '../../assets/instagram.png'
import linkedinIcone from '../../assets/linkedin.png'
function Footer (){
    return(
        <footer>
            <section className={styles.footerContainer}>
              <div>
                <img src={Logo} alt="logo da connect" />
                <h2>Connect</h2>
            </div>

            <p>&copy; 2026 Vai na Web & Empower. Todos os direitos reservados. Projeto destinado exclusivamente a fins educativos.</p>

            <ul className={styles.redesSociais}>
                <li>
                    <a href="http://">
                    <img src={whatssapIcone} alt="logo do whatssap"/>
                    </a>
                </li>
                 <li>
                    <a href="http://">
                    <img src={instagramIcone} alt="logo do instagram" />
                    </a>
                </li>
                 <li>
                    <a href="http://">
                    <img src={linkedinIcone} alt="logo do linkedin" />
                    </a>
                </li>
            </ul>

            </section>
            
        </footer>
    )
}
export default Footer