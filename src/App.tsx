import "./App.css";

function App() {
  return (
    <section className="hero is-info is-fullheight">
      <div className="hero-body container">
        <div className="box field">
          <label className="label">Username</label>
          <div className="control">
            <input className="input" />
          </div>
          <br />
          <label className="label">Password</label>
          <div className="control">
            <input className="input" type="password" />
          </div>
          <br />
          <div className="control has-text-centered">
            <button className="button is-primary is-fullwidth">LOGIN</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
