import * as Dropdown from '@radix-ui/react-dropdown-menu'

export function DropMenu({isOpen, onClose}) {
  
  return (
    <Dropdown.DropdownMenu open={isOpen} onOpenChange={onClose}>
      <Dropdown.DropdownMenuContent className="bg-white px-6 fixed">
        <Dropdown.DropdownMenuItem >
          Editar
        </Dropdown.DropdownMenuItem>
        <Dropdown.DropdownMenuItem >
          Excluir
        </Dropdown.DropdownMenuItem>
      </Dropdown.DropdownMenuContent>
    </Dropdown.DropdownMenu>
  );
}