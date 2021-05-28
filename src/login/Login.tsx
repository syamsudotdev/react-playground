import { Body } from "../body/Body";
import Button from "../button/Button";
import { useState } from "react";
import { Modal } from "../modal/Modal";

export function Login() {
  const [showModal, setShowModal] = useState(false);
  return (
    <Body>
      {showModal && (
        <Modal>
          <div
            style={{
              display: "grid",
              placeItems: "center",
              height: "100vh",
              width: "100vh",
              background: "rgba(0,0,0,0.1)",
              zIndex: 99,
            }}
          >
            I'm a modal!{" "}
            <button
              style={{ background: "papyawhip" }}
              onClick={() => setShowModal(false)}
            >
              close
            </button>
          </div>
        </Modal>
      )}
      <div className="box field">
        <label className="label">Username</label>
        <div className="control">
          <input className="input" />
        </div>
        <br />
        <label className="label">Password</label>
        <div className="control">
          <input className="input" type="password" />
        </div>
        <br />
        <div className="control has-text-centered">
          <Button text="LOGIN" className="button is-fullwidth" />
          <br />
          <Button
            text="Show Modal"
            onClick={() => setShowModal(true)}
            className="button is-fullwidth"
          />
        </div>
      </div>
    </Body>
  );
}
