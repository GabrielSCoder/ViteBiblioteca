import { getCategorias } from "../services/requisicoes"
import {useState, useEffect} from 'react'
import categoria from "../types/categoria"

function CategoriaSelect({id, nome, classes, onChange, valorSelecionado}) {

    const [dados, setDados] = useState<categoria[]>([])

    const handleChange = (event) => {
        var v = event.target.value
        onChange(v)
        console.log(v)
    }

    useEffect(() => {
        getCategorias(setDados, "")
    },[])

    return (
        <select id={id} name={nome} className={classes} onChange={handleChange} >
            <option value="" disabled selected={valorSelecionado === null} hidden>Selecione uma categoria</option>
            {dados.map((item) => (
                <option value={item.id} selected={item.id === valorSelecionado}>{item.descricao}</option>
            ))}
        </select>
    )
}

export default CategoriaSelect