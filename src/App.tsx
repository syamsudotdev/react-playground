import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const onChangeUsername = (event: React.FormEvent<HTMLInputElement>) => {
    setUsername(event.currentTarget.value);
  };
  const onChangePassword = (event: React.FormEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value);
  };
  const onFormChanged = () => {
    console.log("username / password changed: \"" + username + "\" / \"" + password +"\"");
  };
  useEffect(onFormChanged, [username, password]);
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
