import { Link } from "react-router-dom";



function Apprentissage () {
    return (
        <section className="Container-Apprentissage">
            <div className="Apprentissage">
                <p className="text-A"> Des ressources pour tous les niveaux</p>
                <h1 className="text-B">Apprenez <span className="et">et</span> <br/>progressez</h1>
                <h1 className="text-B-Mobile">Apprenez <span className="et"> et </span> progressez</h1>
                <p className="text-C">Que vous débutiez en développement web ou que vous soyez un expert <br/> cherchant à approfondir vos connaissances, nous vous proposons des tutoriels,<br/> guides et bonnes pratiques pour apprendre efficacement.</p>
                <Link to={"/"} className="Link-ressources">
                    Explorer les ressources
                    <img src="./src/assets/arrow-right.png" alt="flèche" className="fleche" />
                </Link>
            </div>
            <div className="Apprentissage-Image">
                <img src="./src/assets/screen_accueil.png" alt="Apprentissage" className="apprentissage-Img"/>
            </div> 
        </section>
    );
}
export default Apprentissage;

