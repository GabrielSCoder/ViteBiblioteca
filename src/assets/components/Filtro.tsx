import {useState, useEffect} from 'react'
import { getCategorias } from '../services/requisicoes';
import Categoria from '../types/categoria';
import CategoriaSelect from './Categoria';
import useDebounce from '../utils/debounce';

function Filtro({setFiltroData, setCurrentPage})
{
    const [categorias, setCategorias] = useState<Categoria[]>([]);

    const handleChangeOption = (newValue) => {
        setFiltroData((prevData) => ({
            ...prevData,
            categoria : newValue

        }))
        setCurrentPage(0)
    }

    const handleChangeInput = (event) => {
        const newValue = event.target.value;
        setFiltroData((prevData) => ({
            ...prevData,
            pesquisa : newValue
        }))
        setCurrentPage(0)
    }

    const handleInputDeb = useDebounce(handleChangeInput, 500)
    const handleOpt = useDebounce(handleChangeOption, 500)

    useEffect(() => {
        getCategorias(setCategorias, "")
    }, [])

    return (
        <div className="bg-white mt-14 pb-16 shadow rounded-md pl-4">
            <h1 className="bold font-medium text-2xl border-b py-4">Filtros</h1>
            <div className="flex pt-3 justify-between">
                <div className="flex-1">
                    <h2 className="bold text-xl">Pesquisa<span className='text-gray-500 text-base italic'> (Id, titulo, Subtitulo, Código, Editora, Autor, Sinopse, Ano Edição)</span></h2>
                    <input type="text" onChange={handleInputDeb} placeholder=" Pesquisar..." className="border-2 rounded mt-1 text-xl h-10 w-11/12 pl-2"></input>
                </div>
                <div className="flex-1">
                    <h2 className="bold text-xl">Livro categoria</h2>
                    <CategoriaSelect id={"catSelect"} nome={"categorias"} onChange={handleOpt} valorSelecionado={null} classes={"border-2 rounded mt-1 text-lg h-10 w-11/12"}/>
                </div>
            </div>
        </div>
    )
}

export default Filtro