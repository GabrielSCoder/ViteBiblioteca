import * as Dropdown from '@radix-ui/react-dropdown-menu'
import {BiPencil, BiTrashAlt} from 'react-icons/bi'
import {Link, useParams} from 'react-router-dom'
import { apagarLivro, getListagens } from "../services/requisicoes"

export function DropMenu2({children, livroId, dados, setDados}) {
  
  const handleDeleteLivro = () => {
    apagarLivro(livroId, dados, setDados)
  }


  return (
    <Dropdown.DropdownMenu >
      <Dropdown.Trigger asChild>
        {children}
      </Dropdown.Trigger>
      <Dropdown.DropdownMenuContent className="bg-white w-36 rounded-md border-rounded py-4 shadow shadow-gray-600 space-y-2">
        <Dropdown.DropdownMenuItem className='hover:bg-green-100 cursor-pointer mx-1 py-0.5'>
            <Link to={`/Livro/${livroId}`}>
              <div className='inline-flex text-center text-lg'>
                <BiPencil className="mr-2 mt-1"/>
                Editar
              </div>
            </Link>
        </Dropdown.DropdownMenuItem>
        <Dropdown.DropdownMenuItem onClick={handleDeleteLivro} className='hover:bg-green-100 cursor-pointer mx-1 py-0.5'>
            <div className='inline-flex text-center text-lg'>
              <BiTrashAlt className="mr-2 mt-1"/>
              Excluir
            </div>
        </Dropdown.DropdownMenuItem>
      </Dropdown.DropdownMenuContent>
    </Dropdown.DropdownMenu>
  );
}