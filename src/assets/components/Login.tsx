import { useForm } from "react-hook-form";
import FormularioLogin from "../types/formularioLogin";
import { login, config } from "../services/requisicoesApi";
import { Context } from "../contexts/Autorizacao";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import mostrarToast from "../utils/mostrarToast";

function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm<FormularioLogin>();
    const {autenticado, SetAutenticado} = useContext(Context)
    const navigate = useNavigate()

    const submitt = async ({nome, senha}: FormularioLogin) => {
        const resp = await login(nome, senha)
        if (resp?.data.isAuthenticated) {
            localStorage.setItem('token', JSON.stringify(resp.data.token.token)) 
            SetAutenticado(true)
            navigate("/Listagem")
            mostrarToast("Login Realizado!")
        } else {
            console.log("login não realizado")
        }
    }


    return (
        <div className="flex justify-center items-center bg-white mt-2">
            <form onSubmit={handleSubmit(submitt)} className="w-80 justify-center text-center py-2">
                <div className="flex flex-col">
                    <label className="pb-1.5 font-semibold">Email</label>
                    <input {...register("nome")} className="rounded-md border text-xl h-12 pl-2"></input>
                </div>
                <div className="flex flex-col mt-1">
                    <label className="pb-1.5 font-semibold">Senha</label>
                    <input {...register("senha")} className="rounded-md border text-xl h-12 pl-2"></input>
                </div>
                <button type="submit" className="bg-green-900 hover:bg-green-700 text-white text-lg p-2 border-rounded rounded-md mt-2">Confirmar</button>
            </form>
        </div>
    )
}

export default Login