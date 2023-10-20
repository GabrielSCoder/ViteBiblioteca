import { getListagens} from "../services/requisicoes"
import { RowsIcon } from "@radix-ui/react-icons"
import Livro from '../types/livro.tsx'
import React, {useEffect, useState} from 'react'

function MostrarTabela() {
    return (<></>)
}

function Tabela() {

    const [dados, setDados] = useState<Livro[]>([]);
    
    useEffect(() => {
        getListagens(setDados);
    },[]);

    return (
        <table className="w-full table-fixed border-spacing-1.5">
            <thead className="bg-slate-50 border-b text-lg">
                <tr>
                    <th className="py-4 text-left">Título</th>
                    <th className="py-4 text-left">Subtítulo</th>
                    <th className="py-4 text-left">Categoria</th>
                    <th className="py-4 text-left">Autor</th>
                    <th className="px-4 py-2">Alterações</th>
                    <th className="px-4 py-2">Ações</th>
                </tr>
            </thead>
            <tbody>
                {dados.map((item) => (
                    <tr key={item.id}>
                        <td className="bg-white border-b py-2 text-left">{item.titulo}</td>
                        <td className="bg-white border-b text-left whitespace-normal">{item.subtitulo}</td>
                        <td className="bg-white border-b text-left">{item.livroCategoria.descricao}</td>
                        <td className="bg-white border-b text-left">{item.autor}</td>
                        <td className="bg-white border-b text-center">{item.usuarioUltimaAlteracao}</td>
                        <td className="bg-white border-b text-center"><button><RowsIcon /></button></td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Tabela