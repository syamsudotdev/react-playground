import "./App.css";
import React, { useEffect, useState } from "react";

const ThemeContext = React.createContext("");

function useUsername(form: { username: string; password: string }) {
  useEffect(() => {
    console.log(
      "form changed, username: " + form.username + " password: " + form.password
    );
  }, [form.username, form.password]);
  return;
}

function ThemedButton() {
  return (
    <ThemeContext.Consumer>
      {(theme) => (
        <button
          className={`button ${
            theme === "dark" ? "is-dark" : "is-light"
          } is-fullwidth`}
        >
          LOGIN
        </button>
      )}
    </ThemeContext.Consumer>
  );
}

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const onChangeUsername = (event: React.FormEvent<HTMLInputElement>) => {
    setUsername(event.currentTarget.value);
  };
  const onChangePassword = (event: React.FormEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value);
  };
  useUsername({ username: username, password: password });
  return (
    <section className="hero is-info is-fullheight">
      <div className="hero-head">
        <nav className="nav">
          <div className="navbar-menu">
            <div className="navbar-end">
              <ThemeContext.Consumer>
                {(theme) => (
                  <span className="navbar-item">
                    <button
                      className={`button is-small ${
                        theme === "dark" ? "is-dark" : "is-light"
                      }`}
                    >
                      Toggle Theme
                    </button>
                  </span>
                )}
              </ThemeContext.Consumer>
            </div>
          </div>
        </nav>
      </div>
      <div className="hero-body container">
        <div className="box field">
          <label className="label">Username</label>
          <div className="control">
            <input className="input" onChange={onChangeUsername} />
          </div>
          <br />
          <label className="label">Password</label>
          <div className="control">
            <input
              className="input"
              onChange={onChangePassword}
              type="password"
            />
          </div>
          <br />
          <div className="control has-text-centered">
            <ThemedButton />
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
