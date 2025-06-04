import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [closing, setClosing] = useState(false);

  const toggleMenu = () => {
    if (menuOpen) {
      setClosing(true);
      setTimeout(() => {
        setMenuOpen(false);
        setClosing(false);
      }, 200); // durée de l'animation
    } else {
      setMenuOpen(true);
    }
  };

  return (
    <section className="head-Container">
      <div className="Menu">
        <div className="Menu-Droit">
          <h3 className="Nom">weeb</h3>
          <div className="Link-group">
            <Link to={"/"} className="Link-Page">
              About
            </Link>
            <Link to={"/Contact"} className="Link-Page">
              Contact
            </Link>
          </div>
        </div>
        <div className="Menu-Gauche">
          <div className="Link-group2">
            <Link to={"/Connexion"} className="Link-Page">
              Login
            </Link>
            <Link to={"/"} className="Link-Join">
              Join Now
            </Link>
          </div>
        </div>

        <div className="burger-icon" onClick={toggleMenu}>
          <img
            src="./src/assets/menuBurger.png"
            alt="Menu"
            className="burger-img"
          />
        </div>
      </div>

      {menuOpen && (
        <div className={`mobile-menu ${closing ? "closing" : ""}`}>
          <Link to="/">About</Link>
          <Link to="/Contact">Contact</Link>
          <Link to="/Connexion">Login</Link>
          <Link to="/">Join Now</Link>
        </div>
      )}
    </section>
  );
}

export default Header;
