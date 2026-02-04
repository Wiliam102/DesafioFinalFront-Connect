import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Inicio from "../Inicio/Inicio";
import Acoes from "../AcoesDaConnect/AcoesDaConnect";
import QuemSomos from "../QuemSomos/QuemSomos";
import Perfil from "../Perfil/Perfil";
import Logo from '../../assets/logo.png';
import ImagemPerfil from '../../assets/foto.jpg';
import styles from './NavBar.module.scss'

function NavBar(){
    return(
      <BrowserRouter>
        <nav className={styles.navBar}>
             <Link to="/">
             <img src={Logo} className={styles.logo} alt="logo"/>
             </Link>
          <ul>
            <li>
                 <Link to="/">Inicio</Link>

            </li>
             <li>
                 <Link to="/acoes">Ações da Connect</Link>

            </li>
             <li>
                 <Link to="/quemSomos">Quem Somos</Link>

            </li>
             <li>
                 <Link to="/perfil">
                 <img src={ImagemPerfil} className={styles.imagemPerfil} alt="imagem de perfil"/>
          </Link>
            </li>
          </ul>
        </nav>

        <Routes>
            <Route path="/" element={<Inicio/>}/>
            <Route path="/acoes" element={<Acoes/>}/>
            <Route path="/quemSomos" element={<QuemSomos/>}/>
            <Route path="/perfil" element={<Perfil/>}/>
        </Routes>
        
      </BrowserRouter>
    )
}
export default NavBar