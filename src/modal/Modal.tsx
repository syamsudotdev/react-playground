import { FunctionComponent } from "react";
import ReactDOM from "react-dom";

const Modal: FunctionComponent = ({ children }) => {
  const modalRoot = document.getElementById("modal-root") as HTMLElement;
  // assuming in your html file has a div with id 'modal-root';
  return ReactDOM.createPortal(children, modalRoot);
};

export { Modal };
