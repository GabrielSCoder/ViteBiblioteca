import Cabecalho from "../components/Cabecalho";
import Filtro from "../components/Filtro";
import Livros from "../components/Livros";

function Home() {
    return (
        <>
            <Cabecalho />
            <div className="mx-3">
                <Filtro />
                <Livros />
            </div>
            <div className="mb-10">
            </div>
        </>
    )
}

export default Home