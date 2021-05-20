import React, { FunctionComponent } from "react";
import ReactDOM from "react-dom";

const modalRoot = document.getElementById("modal-root") as HTMLElement;
// assuming in your html file has a div with id 'modal-root';

const ModalComponent: FunctionComponent = ({ children }) => {
  const el: HTMLElement = document.createElement("div");
  return ReactDOM.createPortal(children, el);
};

class Modal extends React.Component {
  el: HTMLElement = document.createElement("div");

  componentDidMount() {
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.el);
  }
}

export { ModalComponent, Modal };
