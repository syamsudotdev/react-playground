import { createContext, FunctionComponent } from "react";

export interface ThemeContextInterface {
  theme: string;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextInterface>({
  theme: "",
  toggleTheme: () => undefined,
});

const ThemeProvider: FunctionComponent<ThemeContextInterface> = ({
  theme,
  toggleTheme,
  children,
}) => {
  return (
    <ThemeContext.Provider
      value={{
        theme: theme,
        toggleTheme: toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
