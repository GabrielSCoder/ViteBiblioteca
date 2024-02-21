import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { config } from "../services/requisicoesApi";
import axiosconfig from "../utils/axiosconfig";

const Context = createContext({})

function AuthProvider({children} : {children : ReactNode}) {
    const [autenticado, SetAutenticado] = useState(false)

    useEffect(() => {
        const token = localStorage.getItem('token')

        if (token) {
            axiosconfig.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`
            SetAutenticado(true) 
        } 
        
    },[])

    useEffect(() => {
        console.log(autenticado)
    }, [autenticado])

    return (
        <Context.Provider value={{autenticado, SetAutenticado}}>
            {children}
        </Context.Provider>
    )
}

export {Context, AuthProvider}