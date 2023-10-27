import { RowsIcon } from "@radix-ui/react-icons"
import { FaBars } from "react-icons/fa"

function Cabecalho() {
    return (
    <header className="bg-white h-20 shadow flex items-center justify-start pl-4">
        <div className="">
            <button><FaBars size={25} className={"text-gray-500"}/></button>
        </div>
    </header>
    )
}

export default Cabecalho
