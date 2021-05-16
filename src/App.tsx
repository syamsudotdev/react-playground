import "./App.css";
import { createContext, useEffect, useState } from "react";

const ThemeContext = createContext({
  theme: "light",
  toggleTheme: () => {},
});

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
      {({ theme, toggleTheme }) => (
        <button
          onClick={toggleTheme}
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
  const [theme, setTheme] = useState("light");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const onChangeUsername = (event: React.FormEvent<HTMLInputElement>) => {
    setUsername(event.currentTarget.value);
  };
  const onChangePassword = (event: React.FormEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value);
  };
  const toggleTheme = () => {
    setTheme((current) => {
      if (current === "light") return "dark";
      return "light";
    });
  };
  useUsername({ username: username, password: password });
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <section className="hero is-info is-fullheight">
        <div className="hero-head">
          <nav className="nav">
            <div className="navbar-menu">
              <div className="navbar-end">
                <ThemeContext.Consumer>
                  {({ theme, toggleTheme }) => (
                    <span className="navbar-item">
                      <button
                        onClick={toggleTheme}
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
    </ThemeContext.Provider>
  );
}

export default App;
