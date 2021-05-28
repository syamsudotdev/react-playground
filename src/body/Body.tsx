import { FunctionComponent } from "react";

export const Body: FunctionComponent = ({ children }) => {
  return <div className="hero-body container">{children}</div>;
};
