function Filtro()
{
    return (
        <div className="bg-white mt-14 pb-20 shadow rounded-md pl-4">
            <h1 className="bold font-medium text-2xl border-b py-4">Filtros</h1>
            <div className="flex pt-3 justify-between">
                <div className="flex-1">
                    <h2 className="bold text-xl">Pesquisa</h2>
                    <input type="text" placeholder=" Pesquisar..." className="border-2 rounded mt-1 text-xl h-10 w-11/12"></input>
                </div>
                <div className="flex-1">
                    <h2 className="bold text-xl">Livro Categoria</h2>
                    <select name="categorias" id="categorias" className="border-2 rounded mt-1 text-xl h-10 w-11/12">
                        <option value="0"> Todos</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default Filtro