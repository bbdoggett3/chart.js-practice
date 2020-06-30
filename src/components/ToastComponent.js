import React from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

toast.configure()
function ToastComponent() {

    const notify = () => {
        toast('Basic Notification')
    }
    return(
        <div>
            <p>THIS IS MY TOAST COMPONENT</p>
            <button onClick={notify}>Notify</button>
        </div>
    )
}

export default ToastComponent