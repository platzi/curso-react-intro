import React from 'react'
import { useStorageListener } from './useStorageListener'
import './ChangeAlert.css'

    function ChangeAlert({sincronize}) {
        const{ show, toggleShow } = useStorageListener(sincronize)
        if (show) {
            return (
                <div className='ChangeAlert-bg'>
                <div className='ChangeAlert-container'>
                    <p>Were there any changes?</p>
                    <p>Do you want to synchronize your TODOs?</p>
                <button
                    className='TodoForm-button TodoForm-button--add'
                    onClick={toggleShow}
                >
                    Yes!
                </button>
                </div>
            </div>
        )
    } else {
        return null
    }
}
//const ChangeAlertWithStorageListener = useStorageListener(ChangeAlert)

export { ChangeAlert }