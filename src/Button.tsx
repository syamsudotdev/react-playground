import { ThemeContext } from "./ThemeContext";

interface ButtonProps {
  text: string;
  className: string;
  onClick?: () => void;
}

export default function Button({ text, className, onClick }: ButtonProps) {
  return (
    <ThemeContext.Consumer>
      {({ theme }) => (
        <button
          onClick={onClick}
          className={`${className} ${
            theme === "dark" ? "is-dark" : "is-light"
          }`}
        >
          {text}
        </button>
      )}
    </ThemeContext.Consumer>
  );
}
