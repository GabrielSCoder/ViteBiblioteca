//import pagination from "../utils/pagination"
import {useEffect, useState} from 'react'
import {FcPrevious} from 'react-icons/fc'
import {GrPrevious} from 'react-icons/gr'
import Paginacao from './Paginacao'
import Livro from '../types/livro'

function Rodape({pagina, tamanhoPagina, totalLivros , avancarPagina , qtdPaginas, dados} : {pagina : number, tamanhoPagina : number, totalLivros :number , avancarPagina :Function , qtdPaginas : number, dados : number}) {

    const [primeiraPagina, setPrimeiraPagina] = useState<boolean>(false)
    const [ultimaPagina, setUltimaPagina] = useState<boolean>(false)

    useEffect(() => {
        pagina === 0 ? setPrimeiraPagina(true) : setPrimeiraPagina(false)
        qtdPaginas-1 === pagina ? setUltimaPagina(true) : setUltimaPagina(false)
    }, [pagina, qtdPaginas])

    return (
      
        <div className="flex justify-between items-center py-8 px-4 bg-white rounded-md">
            <div className="">
                {tamanhoPagina === totalLivros ? (
                    <h4 className="text-lg">Mostrando <span className="text-md font-semibold">{totalLivros > 0 ? pagina * 10 + 1 : 0}</span> até <span className="text-md font-semibold">{tamanhoPagina}</span> de <span className="text-md font-semibold">{totalLivros}</span> resultados</h4>
                ) : 
                 ( <h4 className="text-lg">Mostrando <span className="text-md font-semibold">{pagina * 10 + 1}</span> até <span className="text-md font-semibold">{(ultimaPagina ? totalLivros : (pagina * 10) + 10)}</span> de <span className="text-md font-semibold">{totalLivros}</span> resultados</h4>)}
            </div>
            {qtdPaginas <= 5 ? (
                <div>
                    {Array(qtdPaginas).fill(0).map((_, i) => (
                        <button key={i} className={`px-4 py-2 rounded-md border shadow ${
                            i === pagina ? "border-blue-500 bg-blue-100 text-blue-500" : "border-gray-300 text-gray-500"
                          } text-xl font-lg`} disabled={pagina === i} onClick={() => avancarPagina(i)} >
                            {i+1}
                        </button>
                    ))}
                </div>
            ) : (
                <Paginacao pagina={pagina} qtdPaginas={qtdPaginas} primeiraPagina={primeiraPagina} ultimaPagina={ultimaPagina} avancarPagina={avancarPagina}/>
            ) 
            }
        </div>
    )
}

export default Rodape