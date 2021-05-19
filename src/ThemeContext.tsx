import { createContext, FunctionComponent, useState } from "react";

export interface ThemeContextInterface {
  theme: string;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextInterface>({
  theme: "",
  toggleTheme: () => undefined,
});

const ThemeProvider: FunctionComponent = ({ children }) => {
  const [_, setTheme] = useState("light");
  return (
    <ThemeContext.Provider
      value={{
        theme: "light",
        toggleTheme: () => {
          setTheme((current) => {
            return current === "light" ? "dark" : "light";
          });
        },
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default { ThemeContext, ThemeProvider };
