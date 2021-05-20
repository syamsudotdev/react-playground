import "./App.css";
import { useState } from "react";
import Button from "./button/Button";
import { ThemeContext, ThemeProvider } from "./theme/ThemeContext";
import { Modal } from "./modal/Modal";

function App() {
  const [theme, setTheme] = useState("light");
  const [showModal, setShowModal] = useState(false);
  return (
    <ThemeProvider
      theme={theme}
      toggleTheme={() => {
        setTheme((current) => {
          return current === "light" ? "dark" : "light";
        });
      }}
    >
      {showModal && (
        <Modal>
          <div
            style={{
              display: "grid",
              placeItems: "center",
              height: "100vh",
              width: "100vh",
              background: "rgba(0,0,0,0.1)",
              zIndex: 99,
            }}
          >
            I'm a modal!{" "}
            <button
              style={{ background: "papyawhip" }}
              onClick={() => setShowModal(false)}
            >
              close
            </button>
          </div>
        </Modal>
      )}
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
              <input className="input" />
            </div>
            <br />
            <label className="label">Password</label>
            <div className="control">
              <input className="input" type="password" />
            </div>
            <br />
            <div className="control has-text-centered">
              <Button text="LOGIN" className="button is-fullwidth" />
              <br />
              <Button
                text="Show Modal"
                onClick={() => setShowModal(true)}
                className="button is-fullwidth"
              />
            </div>
          </div>
        </div>
      </section>
    </ThemeProvider>
  );
}

export default App;
