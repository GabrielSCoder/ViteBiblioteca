import { useState } from "react";
import { DropMenu2 } from "../components/DropMenu2";

function Teste() {

    const [isMenuOpen, setIsOpen] = useState(false)

    const openMenu = () => {
        setIsOpen(true)
        console.log("abriu")
    }

    const closeMenu = () => {
        setIsOpen(false)
    }

    return (
        <div>
            <button className="bg-blue-600 text-2xl px-3 py-3 text-center" onClick={openMenu}>Clique</button>
        </div>
    )
}

export default Teste