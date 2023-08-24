import React from "react"
import ReactDom from "react-dom"

const styleModal = {
    backgroundColor: 'rgba(32,35,41,.8)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
}

function Modal({children}){
    return ReactDom.createPortal(
        <div style={styleModal}>
            {children}
        </div>,
        document.getElementById('modal')
    )
}
export { Modal }