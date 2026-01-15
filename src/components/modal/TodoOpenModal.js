import { React } from "react";
import { createPortal } from "react-dom";

function Modal({ children }) {
    return createPortal(
        <div className="Modal" style={modalStyle}>
            {children}
        </div>,
        document.getElementById('modal')
    );
}
export { Modal };



const modalStyle = {
    backgroundColor: 'rgba(32, 35, 41, .8)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    position: 'fixed',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    zIndex: '80',
}
