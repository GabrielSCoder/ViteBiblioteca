import {toast} from 'react-toastify'

export default function mostrarToast(texto:string) {
    toast.success(texto, {autoClose: 3000, pauseOnHover: false})
}