import "./App.css";
import React, { useState } from "react";

function App({}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const onChangeUsername = (event) => {
    setUsername(event.target.value);
    console.log("username changed: " + username);
  };
  const onChangePassword = (event) => {
    setPassword(event.target.value);
    console.log("password changed: " + password);
  };
  return (
    <section className="hero is-info is-fullheight">
      <div className="hero-body container">
        <div className="box field">
          <label className="label">Username</label>
          <div className="control">
            <input className="input" onChange={onChangeUsername} />
          </div>
          <br />
          <label className="label">Password</label>
          <div className="control">
            <input
              className="input"
              onChange={onChangePassword}
              type="password"
            />
          </div>
          <br />
          <div className="control has-text-centered">
            <button className="button is-primary is-fullwidth">LOGIN</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
