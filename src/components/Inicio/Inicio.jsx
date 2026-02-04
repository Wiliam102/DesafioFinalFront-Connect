import BannerInicio from '../../assets/img-tela-inicial.png'
function Inicio(){
    return(
        <section>
            <div>
                <h1>Projetos Sociais que transformam</h1>
               <p>Conectamos sua empresa com projetos sociais impactantes. Juntos, criamos mudanças reais na comunidade.</p>
            </div>
            <img src={BannerInicio} alt="imagem e banner da tela inicial"/>
        </section>
    )
}
export default Inicio