import Tabela from "./Tabela.tsx"
import {FaBook} from 'react-icons/fa'
import BotaoAcao from "./BotaoAcao.tsx"
import { useState } from "react"
import {Link} from 'react-router-dom'

function Livros({filtroData}) {

    return (
        <>
        <div className="shadow rounded-md mt-4 bg-white py-4 border-b">
            <div className="flex justify-between">
                <div className="pl-4 flex items-center">
                    <FaBook size={30} className="text-green-800"/>
                    <h3 className="font-medium text-3xl text-green-900 align-baseline ml-2">Livros</h3>
                </div>
                <div className="space-x-8 pr-5">
                    <BotaoAcao classes="bg-gray-600 text-zinc-200 p-2 rounded-md text-xl">Imprimir</BotaoAcao>
                    <Link to="/Livro"><BotaoAcao classes="bg-green-600 text-zinc-200 p-2 rounded-md text-xl">Adicionar</BotaoAcao></Link>
                </div>
            </div>
        </div>
        <div className="px-4 bg-white">
            <Tabela filtroData={filtroData}/>
        </div> 
        <div className="bg-white rounded-md py-8 px-4">
            <h4>Mostrando 1 até 10 de 280 resultados</h4>
        </div>
        </>
    )
}

export default Livros