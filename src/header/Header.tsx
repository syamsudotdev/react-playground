import { FunctionComponent } from "react";

export const Header: FunctionComponent = ({ children }) => {
  return (
    <div className="hero-head">
      <nav className="nav">
        <div className="navbar-menu">
          <div className="navbar-end">
            <span className="navbar-item">{children}</span>
          </div>
        </div>
      </nav>
    </div>
  );
};
