import React from "react";

function Livros() {
    return (
        <div className="shadow rounded mt-4 bg-white py-4">
            <div className="flex justify-between">
                <div className="pl-4">
                    <h3 className="font-medium text-3xl text-green-900">Livros</h3>
                </div>
                <div className="space-x-8 pr-5">
                        <button className="bg-gray-600 text-zinc-200 p-2 rounded-md text-xl">Imprimir</button>
                        <button className="bg-green-600 text-zinc-200 p-2 rounded-md text-xl">Adicionar</button>
                </div>
            </div>
        </div>
    )
}

export default Livros