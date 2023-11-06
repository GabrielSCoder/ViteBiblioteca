import * as Dropdown from '@radix-ui/react-dropdown-menu'
import {BiPencil, BiTrashAlt} from 'react-icons/bi'
import {Link, useParams} from 'react-router-dom'
import { apagarLivro, getListagens } from "../services/requisicoes"
import mostrarToast from '../utils/mostrarToast'
import useDebounce from '../utils/debounce';

export function DropMenu2({children, livroId, totalLivros, setTotalLivros} : {children : any, livroId : number, totalLivros : number, setTotalLivros : React.Dispatch<React.SetStateAction<number>>}) {
  
  const handleDeleteLivro = async () => {
    const resp = await apagarLivro(livroId)
    if (resp) {
      await setTotalLivros(totalLivros-1)
      mostrarToast("Deletado!") 
    }
  }
  
  const debounceDeleteLivro = useDebounce(handleDeleteLivro, 500)

  return (
    <Dropdown.DropdownMenu >
      <Dropdown.Trigger asChild>
        {children}
      </Dropdown.Trigger>
      <Dropdown.DropdownMenuContent className="bg-white w-36 rounded-md border-rounded shadow shadow-gray-600 space-y-2 py-1.5 mr-1 mt-2">
        <Dropdown.DropdownMenuItem className='hover:bg-green-100 cursor-pointer mx-1 py-0.5'>
            <Link to={`/Livro/${livroId}`}>
              <div className='inline-flex text-center text-lg'>
                <BiPencil className="mr-2 mt-1"/>
                Editar
              </div>
            </Link>
        </Dropdown.DropdownMenuItem>
        <Dropdown.DropdownMenuItem onClick={debounceDeleteLivro} className='hover:bg-green-100 cursor-pointer mx-1 py-0.5'>
            <div className='inline-flex text-center text-lg'>
              <BiTrashAlt className="mr-2 mt-1"/>
              Excluir
            </div>
        </Dropdown.DropdownMenuItem>
      </Dropdown.DropdownMenuContent>
    </Dropdown.DropdownMenu>
  );
}