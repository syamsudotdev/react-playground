import { useContext } from "react";
import ThemeContext, { ThemeContextInterface } from "./ThemeContext";

interface ButtonProps {
  text: string;
  className: string;
}

export default function Button({ text, className }: ButtonProps) {
  const { theme, toggleTheme } =
    useContext<ThemeContextInterface>(ThemeContext);
  return (
    <button
      onClick={toggleTheme}
      className={`${className} ${theme === "dark" ? "is-dark" : "is-light"}`}
    >
      {text}
    </button>
  );
}
