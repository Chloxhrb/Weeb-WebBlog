

import { Link } from "react-router-dom";

function RestezInforme() {
    return (
        <section className="Container-RestezInforme">
            <div className="RestezInforme-Image">
                <img src="./src/assets/Img-restezInforme.png" alt="Composition abstraite avec des carrées" className="Information-Img"/>
            </div>
            <div className="RestezInforme">
                <p className="text-A">Le web, un écosystème en constante évolution</p>
                <h1 className="text-B1">Restez informé des dernières <span className="tendances">tendances</span></h1>
                <p className="text-C">Chaque semaine, nous analysons les nouveautés du web : frameworks émergents, bonnes pratiques<br/> SEO, accessibilité, et bien plus encore. Ne manquez aucune actualité du digital !</p>
                <Link to={"/"} className="Link-ressources">
                    Lire les articles récents
                    <img src="./src/assets/arrow-right.png" alt="flèche" className="fleche" />
                </Link>
            </div>
        </section>
    );
}
export default RestezInforme;