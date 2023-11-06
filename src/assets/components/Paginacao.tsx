
function Paginacao({pagina, qtdPaginas, primeiraPagina, ultimaPagina, avancarPagina} : {pagina : number, qtdPaginas : number, primeiraPagina : boolean, ultimaPagina : boolean, avancarPagina : Function}) {

    return (
        <div>
            <button
                className={`px-4 py-2 rounded-md border ${primeiraPagina ? "text-blue-600 border-blue-600 bg-blue-100" : "border-gray-300 text-gray-500"} shadow text-xl font-semibold`}
                onClick={() => avancarPagina(primeiraPagina ? pagina : pagina-1)}> 
            {primeiraPagina ? "1" : "<" }
            </button>
            <button
            className={`px-4 py-2 rounded-md border ${pagina !== 0 && pagina !== qtdPaginas-2 && !ultimaPagina ? "text-blue-600 border-blue-600 bg-blue-100" : "border-gray-300 text-gray-500" } shadow text-xl font-semibold`}
            onClick={() => avancarPagina(primeiraPagina ? pagina+1 : ultimaPagina ? 0 : pagina === qtdPaginas-2 ? pagina-1 : pagina)}
            >
            {primeiraPagina ? 2 : pagina < qtdPaginas - 2  ? pagina+1 : pagina < qtdPaginas - 1 ? pagina : ultimaPagina ? 1 : pagina-1}
            </button>
            <button
            className={"px-4 py-2 rounded-md border shadow text-blue-500 border-gray-300 text-gray-500 text-xl font-semibold"}
            >
            ...
            </button>
            <button
            className={`px-4 py-2 rounded-md border shadow ${pagina === qtdPaginas-2 ? "text-blue-600 border-blue-600 bg-blue-100" : "text-gray-500 border-gray-300" } text-xl font-semibold `}
            onClick={() => avancarPagina(ultimaPagina || pagina === qtdPaginas-3 || pagina === qtdPaginas-2 ? qtdPaginas-2 : qtdPaginas-1)}
            >
            {ultimaPagina || pagina === qtdPaginas-3 || pagina === qtdPaginas-2 ? qtdPaginas-1 : qtdPaginas}
            </button>
            <button
            className={`px-4 py-2 rounded-md border shadow ${pagina === qtdPaginas-1 ? "text-blue-600 border-blue-600 bg-blue-100" : "text-gray-500 border-gray-300" } text-xl font-semibold `}
            onClick={() => avancarPagina(ultimaPagina ? pagina : pagina + 1)}
            >
            {ultimaPagina || pagina === qtdPaginas - 3 || pagina === qtdPaginas - 2 ? qtdPaginas : ">"}
            </button>
        </div>     
    )
}

export default Paginacao