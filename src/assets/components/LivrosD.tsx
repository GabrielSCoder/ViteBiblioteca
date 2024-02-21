import TabelaC from './TabelaC.tsx'
import {FaBook} from 'react-icons/fa'
import BotaoAcao from "./BotaoAcao.tsx"
import { useState, useEffect } from "react"
import {Link} from 'react-router-dom'
import Rodape from "./Rodape.tsx"
import Livro from "../types/livro.tsx"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {getListagens2} from '../services/requisicoesApi.tsx';

function LivrosD({filtroData, currentPage, setCurrentPage} : {filtroData : {pesquisa : any, categoria : any}, currentPage : number, setCurrentPage : React.Dispatch<React.SetStateAction<number>>}) {

    const [dados, setDados] = useState<Livro[]>([]);
    const [totalLivros, setTotalLivros] = useState<number>(0);
    const [tamanhoPagina, setTamanhoPagina] = useState<number>(10);
    const [qtdPaginas, setQtdPaginas] = useState<number>(0);

    const paginaCheck = async () => {
        if (totalLivros < tamanhoPagina) {
            setTamanhoPagina(totalLivros)
        }
    }

    const avancarPagina = (nxtpage:number) => {
        getListagens2(filtroData.pesquisa, filtroData.categoria, nxtpage, (newDados) => {
          if (newDados.length > 0) {
            setCurrentPage(nxtpage);
          }
        }, setCurrentPage, setTotalLivros, setTamanhoPagina, setQtdPaginas);
    };

    useEffect(() => {
        const {pesquisa, categoria} = filtroData
        const fetch = async () => {
            try {
                await getListagens2(pesquisa, categoria , currentPage, setDados, setCurrentPage, setTotalLivros, setTamanhoPagina, setQtdPaginas);
                await paginaCheck()
            } catch (error) {
                console.error(error)
            }
        }

        fetch()
    },[filtroData, currentPage, totalLivros]);

    return (
        <>
        <div className="shadow rounded-t-md mt-4 bg-white py-4 border-b">
            <div className="flex justify-between">
                <div className="pl-4 flex items-center">
                    <FaBook size={30} className="text-green-800"/>
                    <h3 className="font-medium text-3xl text-green-900 align-baseline ml-2">Livros</h3>
                </div>
                <div className="space-x-8 pr-5">
                    <Link to="/Livro"><BotaoAcao classes="bg-green-600 text-zinc-200 px-3 py-2 rounded-md text-xl hover:bg-green-500">Adicionar</BotaoAcao></Link>
                </div>
            </div>
        </div>
        <div className="bg-white">
            <div className="overflow-x-auto">
                <TabelaC dados={dados} totalLivros={totalLivros} setTotalLivros={setTotalLivros} />
            </div>
        </div> 
        <Rodape totalLivros={totalLivros} pagina={currentPage} tamanhoPagina={tamanhoPagina} avancarPagina={avancarPagina} qtdPaginas={qtdPaginas} dados={dados.length}/>
        <ToastContainer />
        </>
    )
}

export default LivrosD