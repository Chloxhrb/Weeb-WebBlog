
import Header from "../components/Header";
import Accueil from "../components/Accueil";
import Footer from "../components/Footer";
import Partenaire from "../components/Partenaire";
import Apprentissage from "../components/Apprentissage";
import RestezInforme from "../components/Restez_informe";

// le css desktop est dans App.css ligne 11

function Home() {
  return (
    <section className="home">
        <Header />
        <Accueil />
        <Partenaire />
        <Apprentissage />
        <RestezInforme />
        <Footer />
    </section>
  );
}

export default Home;