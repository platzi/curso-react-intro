import React from 'react';
import { createPortal } from 'react-dom';
import '../Styles/Modal.css'; 

function Modal( {children} ){
  return createPortal(
    <div className='ModalBackground'>
      {children}
    </div>,
    document.getElementById('modal-root')
  )
}

export { Modal }