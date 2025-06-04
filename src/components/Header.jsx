import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
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
      </div>
    </section>
  );
}

export default Header;
