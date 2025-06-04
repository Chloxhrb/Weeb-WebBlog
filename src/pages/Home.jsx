
import Header from "../components/Header";
import Accueil from "../components/Accueil";
import Footer from "../components/Footer";

// le css desktop est dans App.css ligne 11

function Home() {
  return (
    <section className="home">
        <Header />
        <Accueil />
        <Footer />
    </section>
  );
}

export default Home;