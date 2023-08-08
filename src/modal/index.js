import React from 'react';
import { createPortal } from 'react-dom';

function modal({children}){
    return createPortal(
        <div className='modal'>
         {children}

         </div>,
         document.getElementById('modal')
    )

}

export {modal}