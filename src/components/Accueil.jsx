import { Link } from "react-router-dom";


function Accueil() {
    return (
        <section className="Container-accueil">
            <div className="Container-accueil-Text">
                <h1 className="Titre-accueil"> 
                     Explorez le <span class="web">Web</span> sous toutes<br/>
                     ses <span class="facettes">facettes</span> 
                </h1>
                <p className="Text-accueil">Le monde du web évolue constamment, et nous sommes là pour vous guider à travers ses tendances,<br/> technologies et meilleures pratiques. Que vous soyez développeur, designer ou passionné du digital,<br/> notre blog vous offre du contenu de qualité pour rester à la pointe.</p>
                <div className="Button-accueil">
                    <Link to={'/'} className="Decouverte">Découvrir les articles</Link>
                    <Link to={'/'} className="Abonnement">S'abonner à la newsletter</Link>
                </div>
            </div>

            <div className="Container-accueil-Image">
                <img src="./src/assets/screen_accueil.png" alt="Image d'un ecran desktop" className="Image-accueil"/>
            </div>
        </section>
    );
}
export default Accueil;