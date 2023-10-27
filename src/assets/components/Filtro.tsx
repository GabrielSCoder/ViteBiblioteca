import {useState, useEffect} from 'react'
import { getCategorias } from '../services/requisicoes';
import Categoria from '../types/categoria';
import CategoriaSelect from './Categoria';

function Filtro({setFiltroData})
{
    const [categorias, setCategorias] = useState<Categoria[]>([]);

    const handleChangeOption = (newValue) => {
        setFiltroData((prevData) => ({
            ...prevData,
            categoria : newValue

        }))
    }

    const handleChangeInput = (event) => {
        const newValue = event.target.value;
        setFiltroData((prevData) => ({
            ...prevData,
            pesquisa : newValue
        }))
    }

    useEffect(() => {
        getCategorias(setCategorias, "")
    }, [])

    return (
        <div className="bg-white mt-14 pb-16 shadow rounded-md pl-4">
            <h1 className="bold font-medium text-2xl border-b py-4">Filtros</h1>
            <div className="flex pt-3 justify-between">
                <div className="flex-1">
                    <h2 className="bold text-xl">Pesquisa</h2>
                    <input type="text" onChange={handleChangeInput} placeholder=" Pesquisar..." className="border-2 rounded mt-1 text-xl h-10 w-11/12"></input>
                </div>
                <div className="flex-1">
                    <h2 className="bold text-xl">Livro categoria</h2>
                    <CategoriaSelect id={"catSelect"} nome={"categorias"} onChange={handleChangeOption} valorSelecionado={null} classes={"border-2 rounded mt-1 text-lg h-10 w-11/12"}/>
                </div>
            </div>
        </div>
    )
}

export default Filtro