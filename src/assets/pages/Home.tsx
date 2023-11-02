import Filtro from "../components/Filtro";
import LivrosC from "../components/LivrosC";

import {useState} from 'react'

function Home() {
    const [filtroData, setFiltroData] = useState({ pesquisa: null, categoria: null });
    const [currentPage, setCurrentPage] = useState<Number>(0);


    return (
        <>
            <div className="mx-3">
                <Filtro setFiltroData={setFiltroData} setCurrentPage={setCurrentPage}/>
                <LivrosC filtroData={filtroData} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
            </div>
                <div className="mb-10">
            </div>
        </>
    )
}

export default Home