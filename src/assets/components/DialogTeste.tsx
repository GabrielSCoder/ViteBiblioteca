import * as Dialog from '@radix-ui/react-dialog';
import { useEffect } from 'react';

function ClienteModal({ isOpen, onClose})
{   

    useEffect(() => {
        if (!isOpen) {
          return; 
        }
    
    
    }, [isOpen]);
    
    if (!isOpen) {
        return null;
    }


    return (
        <Dialog.Root defaultOpen onOpenChange={onClose}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black opacity-50 animate-overlayShow"/>
          <Dialog.Content className="bg-white p-6 fixed top-1/2 left-1/2  translate-y-[-50%] 
            translate-x-[-50%] w-[90vh] max-w-[450px] max-h-[85vh] rounded-md shadow-lg shadow-black">
            <Dialog.Title className="DialogTitle">Contato</Dialog.Title>
            <br></br>
            <form>
                <fieldset className="Fieldset">
                  <input type="text" id="nome" data-index="new" className="form-control" placeholder="Nome"
                      required/>	
                </fieldset>
                <fieldset className="Fieldset">
                <input type="text" id="telefone" className="form-control" placeholder="Telefone"required/>
                </fieldset>
                <fieldset className="Fieldset">
                <input type="email" id="email" className="form-control" placeholder="Email"
                        required/>               
                </fieldset>
                <fieldset className="Fieldset">
                <input type="date" id="dataNsc" className="form-control" placeholder="Data de Nascimento" required/>
                </fieldset>
                  <div className="d-flex flex-column justify-content-center align-items-center">
                      <div></div>
                      <div><input type="checkbox" id="ativo"/></div>
                  </div>
            </form>
            <div style={{ display: 'flex', marginTop: 25, textAlign:'center', justifyContent: 'flex-end' }} className="justify-content-center align-items-center">
              <Dialog.Close asChild>
                <button className="Button green">Salvar</button>
              </Dialog.Close>
            </div>
            <Dialog.Close asChild>
              <button className="IconButton" aria-label="Close">
              </button>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    )
}

export default ClienteModal