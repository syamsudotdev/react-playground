import "./App.css";

function App() {
  return (
    <div className="columns is-mobile is-centered">
      <div className="column is-narrow">
        <form className="box has-centered">
          <label>
            Username <input />
          </label>
          <br />
          <label>
            Password <input type="password" />
          </label>
          <br />
          <button className="button is-primary">LOGIN</button>
        </form>
      </div>
    </div>
  );
}

export default App;
