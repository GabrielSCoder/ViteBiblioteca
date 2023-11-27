import TabelaTh from "./TabelaTh.tsx"
import TabelaTd from "./TabelaTd.tsx"
import {BiDotsVerticalRounded} from 'react-icons/bi'
import {BiPencil} from 'react-icons/bi'
import { DropMenu2 } from "./DropMenu2.tsx"
import formatarData from "../utils/dateformato.ts"
import Livro from "../types/livro.tsx"

function TabelaC({dados, totalLivros, setTotalLivros} : {dados: Livro[], totalLivros: number, setTotalLivros: React.Dispatch<React.SetStateAction<number>> }) {

    return (
        <table className="lg:w-full table-fixed md:min-w-full sm:min-w-full">
            <thead className="bg-slate-50 border-b text-lg">
                <tr>
                    <TabelaTh nome={"ID"} classes={"px-2 py-4 text-left w-20"}/>
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
                        <tr key={item.id} className="hover:bg-gray-100">
                            <TabelaTd classes={" border-b text-left text-gray-500 py-2.5 px-2"}>{item.id}</TabelaTd>
                            <TabelaTd classes={" border-b text-left text-gray-500 py-2.5 overflow-hidden whitespace-nowrap"}>{item.titulo}</TabelaTd>
                            <TabelaTd classes={" border-b text-left text-gray-500 whitespace-normal overflow-hidden whitespace-nowrap px-7"}>{item.subtitulo}</TabelaTd> 
                            <TabelaTd classes={" border-b text-left text-gray-500 overflow-hidden whitespace-nowrap px-7"}>{item.livroCategoria.descricao}</TabelaTd>
                            <TabelaTd classes={" border-b text-left text-gray-500 px-7 overflow-hidden whitespace-nowrap"}>{item.autor}</TabelaTd>
                            <TabelaTd classes={"text-center border-b"}>
                                <div className="bg-green-100 rounded-md inline-flex items-center py-0.5 px-2 text-sm font-medium text-gray-600 overflow-hidden whitespace-nowrap">
                                    <BiPencil className="mr-2" />{item.usuarioUltimaAlteracao} - {formatarData(item.dataUltimaAlteracao)}
                                </div>
                            </TabelaTd>
                            <TabelaTd classes={" border-b text-center"}>
                                <DropMenu2 livroId={item.id} totalLivros={totalLivros} setTotalLivros={setTotalLivros}><button className="text-2xl"><BiDotsVerticalRounded className="text-gray-500"/></button></DropMenu2>
                            </TabelaTd>
                        </tr>
                    ))) : <h4>Vazio!</h4>}
            </tbody>
        </table>
    )
}

export default TabelaC