import { getListagens} from "../services/requisicoes"
import Livro from '../types/livro.tsx'
import {useEffect, useState} from 'react'
import TabelaTh from "./TabelaTh.tsx"
import TabelaTd from "./TabelaTd.tsx"
import {BiDotsVerticalRounded} from 'react-icons/bi'
import {BiPencil} from 'react-icons/bi'
import { DropMenu2 } from "./DropMenu2.tsx"

function Tabela({filtroData}) {

    const [dados, setDados] = useState<Livro[]>([]);

    useEffect(() => {
        const {pesquisa, categoria} = filtroData
        console.log(pesquisa, categoria)
        getListagens(pesquisa, categoria , 0, setDados);
    },[filtroData]);

    return (
        <table className="w-full table-fixed">
            <thead className="bg-slate-50 border-b text-lg">
                <tr>
                    <TabelaTh nome={"Título"} classes={"py-4 text-left"}/>
                    <TabelaTh nome={"Subtítulo"} classes={"py-4 text-left px-7"}/>
                    <TabelaTh nome={"Categoria"} classes={"py-4 text-left px-7"}/>
                    <TabelaTh nome={"Autor"} classes={"py-4 text-left px-7"}/>
                    <TabelaTh nome={"Alterações"} classes={"px-4 py-2"}/>
                    <TabelaTh nome={"Ações"} classes={"py-2 text-center w-20"}/>
                </tr>
            </thead>
            <tbody>
                {dados.length > 0 ? (
                    dados.map((item) => (
                        <tr key={item.id}>
                            <TabelaTd classes={"bg-white border-b text-left py-2.5 overflow-hidden whitespace-nowrap text-gray-300"}>{item.titulo}</TabelaTd>
                            <TabelaTd classes={"bg-white border-b text-left whitespace-normal overflow-hidden whitespace-nowrap px-7"}>{item.subtitulo}</TabelaTd> 
                            <TabelaTd classes={"bg-white border-b text-left overflow-hidden whitespace-nowrap px-7"}>{item.livroCategoria.descricao}</TabelaTd>
                            <TabelaTd classes={"bg-white border-b text-left px-7 overflow-hidden whitespace-nowrap"}>{item.autor}</TabelaTd>
                            <TabelaTd classes={"text-center border-b"}>
                                <div className="bg-green-100 rounded-md inline-flex items-center py-0.5 px-2">
                                    <BiPencil className="mr-2" />{item.usuarioUltimaAlteracao}
                                </div>
                            </TabelaTd>
                            <TabelaTd classes={"bg-white border-b text-center"}>
                                <DropMenu2 livroId={item.id} dados={dados} setDados={setDados}><button className="text-2xl"><BiDotsVerticalRounded className="text-gray-500"/></button></DropMenu2>
                            </TabelaTd>
                        </tr>
                    ))) : <h4>Vazio!</h4>}
            </tbody>
        </table>
    )
}

export default Tabela