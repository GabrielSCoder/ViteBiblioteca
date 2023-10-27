import Cabecalho from "../components/Cabecalho";
import Filtro from "../components/Filtro";
import Livros from "../components/Livros";
import {useState} from 'react'

function Home() {
    const [filtroData, setFiltroData] = useState({ pesquisa: null, categoria: null });

    return (
        <>
            <div className="mx-3">
                <Filtro setFiltroData={setFiltroData} />
                <Livros filtroData={filtroData} />
            </div>
            <div className="mb-10">
            </div>
        </>
    )
}

export default Home