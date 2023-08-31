import React from "react";
import { createPortal } from "react-dom";
import "./Modal.css";

function Modal({ children }) {
  return createPortal(
    <div className="ModalBackground">{children}</div>,
    document.getElementById("modal")
  );
}

export { Modal };
