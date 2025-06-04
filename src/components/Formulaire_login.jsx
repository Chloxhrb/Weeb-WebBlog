function LogIn() {
  return (
    <section>
      <div className="form-login-container">
        <form className="form">
          <div className="form-column">
            <h1 className="titre-form">Se connecter</h1>
            <div className="form-group">
              <input type="email" placeholder="Email" />
            </div>
            <div className="form-group">
              <input type="mot de passe" placeholder="Mot de Passe" />
            </div>
          </div>
          <div className="form-button">
            <button type="submit">Se connecter</button>
          </div>
        </form>
      </div>
    </section>
  );
}
export default LogIn;
