import React from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

toast.configure()
function ToastComponent() {

    const notify = () => {
        toast('Basic Notification', {position: toast.POSITION.TOP_LEFT, autoClose: 8000})
        toast.success('Success Notification', {position: toast.POSITION.TOP_CENTER, autoClose: false})
        toast.info('Info Notification', {position: toast.POSITION.TOP_RIGHT})
        toast.warn('Warning Notification', {position: toast.POSITION.BOTTOM_LEFT})
        toast.error('Error Notification', {position: toast.POSITION.BOTTOM_CENTER})
        toast('Basic Notification', {position: toast.POSITION.BOTTOM_CENTER})
    }
    return(
        <div>
            <p>THIS IS MY TOAST COMPONENT</p>
            <button onClick={notify}>Notify</button>
        </div>
    )
}

export default ToastComponent