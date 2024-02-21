import Filtro from "../components/Filtro";
import LivrosC from "../components/LivrosC";
import LivrosD from "../components/LivrosD";

import {useState} from 'react'

function Home() {
    const [filtroData, setFiltroData] = useState<{ pesquisa: string | null; categoria: string | null }>({ pesquisa: null, categoria: null });
    const [currentPage, setCurrentPage] = useState<number>(0);


    return (
        <>
            <div className="mx-3">
                <Filtro setFiltroData={setFiltroData} setCurrentPage={setCurrentPage}/>
                <LivrosD filtroData={filtroData} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
            </div>
                <div className="mb-10">
            </div>
        </>
    )
}

export default Home