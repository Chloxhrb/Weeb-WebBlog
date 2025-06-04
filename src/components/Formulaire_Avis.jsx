

function Contactez() {
    return (
        <section className="Main-Contact">
            <div className="Contact-Info">
                <h1 className="titre-form">Votre avis compte !</h1>
                <p className="text-contact">Votre retour est essentiel pour nous améliorer ! Partagez votre expérience, dites-nous ce que vous aimez <br/> et ce que nous pourrions améliorer. Vos suggestions nous aident à faire de ce blog une ressource toujours <br/> plus utile et enrichissante. </p>
            </div>
            <div className="form-container">
                <form className="form">
                    <div className="form-row">
                        <div className="form-group">
                            <input type="text" placeholder="Nom" />
                        </div>
                        <div className="form-group">
                            <input type="text" placeholder="Prénom" />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <input type="tel" placeholder="Téléphone"/>
                        </div>
                        <div className="form-group">
                            <input type="email" placeholder="Email" />
                        </div>
                    </div>
                    <div className="form-group full">
                        <textarea rows="4" placeholder="Message"></textarea>
                    </div>
                    <div className="form-button">
                        <button type="submit">Contact</button>
                    </div>
                </form>
            </div>
        </section>
    );
}
export default Contactez;