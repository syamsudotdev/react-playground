import "./App.css";
import { useState } from "react";
import Button from "./button/Button";
import { ThemeContext, ThemeProvider } from "./theme/ThemeContext";
import { Header } from "./header/Header";
import { Login } from "./login/Login";

function App() {
  const [theme, setTheme] = useState("light");
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
        <Header>
          <ThemeContext.Consumer>
            {({ toggleTheme }) => (
              <Button
                text="Toggle"
                className="button is-small is-fullwidth"
                onClick={toggleTheme}
              />
            )}
          </ThemeContext.Consumer>
        </Header>
        <Login />
      </section>
    </ThemeProvider>
  );
}

export default App;
