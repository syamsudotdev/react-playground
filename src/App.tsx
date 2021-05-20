import "./App.css";
import { useEffect, useState } from "react";
import Button from "./button/Button";
import { ThemeContext, ThemeProvider } from "./theme/ThemeContext";

function useUsername(form: { username: string; password: string }) {
  useEffect(() => {
    console.log(
      "form changed, username: " + form.username + " password: " + form.password
    );
  }, [form.username, form.password]);
  return;
}

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [theme, setTheme] = useState("light");
  const onChangeUsername = (event: React.FormEvent<HTMLInputElement>) => {
    setUsername(event.currentTarget.value);
  };
  const onChangePassword = (event: React.FormEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value);
  };
  useUsername({ username: username, password: password });
  return (
    <ThemeProvider
      theme={theme}
      toggleTheme={() => {
        setTheme((current) => {
          return current === "light" ? "dark" : "light";
        });
      }}
    >
      <section className="hero is-info is-fullheight">
        <div className="hero-head">
          <nav className="nav">
            <div className="navbar-menu">
              <div className="navbar-end">
                <span className="navbar-item">
                  <ThemeContext.Consumer>
                    {({ toggleTheme }) => (
                      <Button
                        text="Toggle"
                        className="button is-small is-fullwidth"
                        onClick={toggleTheme}
                      />
                    )}
                  </ThemeContext.Consumer>
                </span>
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
              <Button text="LOGIN" className="button is-fullwidth" />
            </div>
          </div>
        </div>
      </section>
    </ThemeProvider>
  );
}

export default App;
