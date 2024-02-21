import Cabecalho from './assets/components/Cabecalho'
import Router from '../Router'
import { AuthProvider } from './assets/contexts/Autorizacao'

function App() {

  return (
    <AuthProvider>
      <Cabecalho />
      <Router />
    </AuthProvider>
  )
}

export default App
