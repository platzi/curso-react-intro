import React from 'react';
import ReactDOM from 'react-dom';

function Modal({ children }) {
  return ReactDOM.createPortal(
    <div className=" fixed h-100 opacity-50 flex justify-center items-center top-0 left-0 right-0 bottom-0 bg-slate-700">
      {children}
    </div>,
    document.getElementById('modal')
  );
}

export { Modal };