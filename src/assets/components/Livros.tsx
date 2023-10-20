import Tabela from "./Tabela.tsx"

function Livros() {
    return (
        <>
        <div className="shadow rounded-md mt-4 bg-white py-4 border-b">
            <div className="flex justify-between">
                <div className="pl-4">
                    <h3 className="font-medium text-3xl text-green-900 ml-8">Livros</h3>
                </div>
                <div className="space-x-8 pr-5">
                        <button className="bg-gray-600 text-zinc-200 p-2 rounded-md text-xl">Imprimir</button>
                        <button className="bg-green-600 text-zinc-200 p-2 rounded-md text-xl">Adicionar</button>
                </div>
            </div>
        </div>
        <div className="px-4 bg-white">
            <Tabela />
        </div>
        <div className="bg-white rounded-md py-8 px-4">
            <h4>Mostrando 1 até 10 de 280 resultados</h4>
        </div>
        </>
    )
}

export default Livros