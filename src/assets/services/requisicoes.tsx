const token:string = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub21lVXN1YXJpbyI6IkVTVEFHSUFSSU8iLCJub21lQ29sYWJvcmFkb3IiOiJBTlRPTklPIEFNQVVSSSBCRVNFUlJBIERFIFNPVVNBIiwiaWRDb2xhYm9yYWRvciI6Ijg1NiIsImlkQ2FyZ28iOiI0MiIsImNhcmdvIjoiUEVEUkVJUk8iLCJpZFVzdWFyaW8iOiIyNTEiLCJhbWJpZW50ZSI6IlBST0QiLCJleHAiOjE2OTk1MDU5ODAsImlzcyI6IkJPWDNfRVJQX0FQSSIsImF1ZCI6Imh0dHBzOi8vcGxhc2ZyYW4uY29tIn0.eGW-GM-W5BBAiqngmYRkasw-jGAs_Tj0j7axIqt0vvM"
import axios from 'axios';
import Livro from '../types/livro';
import Categoria from '../types/categoria';

export const config = {
    headers: {
      'Authorization': `Bearer ${token}`
    }
};

export const getListagens = async(pesquisa:string, categoriaid:number, pagina:number, setDados:React.Dispatch<React.SetStateAction<Livro[]>>) => {
   
    try {
        const req_url = 'https://beta-api-new.plasfran.com/api/livro/listagem'
    
        const data = {
            "pageSize": 10,
            "currentPage": pagina,
            "pesquisa": pesquisa,
            "livroCategoriaId": categoriaid
        }

        const response = await axios.post(req_url, data, config)
        await setDados(response.data.dados.dados)
        //console.log(data)

    } catch (error) {
        console.error(error)
        //console.log(data)
    }
}

export const getListagens2 = async(pesquisa:string, categoriaid:number, pagina:number, 
    setDados:React.Dispatch<React.SetStateAction<Livro[]>>, setPagina:React.Dispatch<React.SetStateAction<number>>,
     setTotal:React.Dispatch<React.SetStateAction<number>>, setTamanhoPagina:React.Dispatch<React.SetStateAction<number>>,
      setQtdPaginas:React.Dispatch<React.SetStateAction<number>>) => {
   
    try {
        const req_url = 'https://beta-api-new.plasfran.com/api/livro/listagem'
    
        const data = {
            "pageSize": 10,
            "currentPage": pagina,
            "pesquisa": pesquisa,
            "livroCategoriaId": categoriaid
        }

        const response = await axios.post(req_url, data, config)
        await setDados(response.data.dados.dados)
        await setPagina(response.data.dados.currentPage)
        await setTotal(response.data.dados.totalRegisters)
        await setTamanhoPagina(response.data.dados.pageSize)
        await setQtdPaginas(response.data.dados.totalPages)

    } catch (error) {
        console.error(error)
        //console.log(data)
    }
}

export const apagarLivro = async(id:number) => {

    try {
        const req_url = `https://beta-api-new.plasfran.com/api/livro/${id}`
        const response = await axios.delete(req_url, config)
        return response
        //console.log(response)
    }   catch (error) {
        console.error(error)
    }
}

export const getLivro = async(livroId:string | undefined) => {
    try {
        const req_url = `https://beta-api-new.plasfran.com/api/livro/${livroId}`
        const response = await axios.get(req_url, config)
       //console.log(response.data.dados)
        return response.data.dados
    } catch (error) {
        console.error(error)
    }
}


export const pLivro = async(data:{}, id:string | undefined) => {
     
    try {

        const req_url = 'https://beta-api-new.plasfran.com/api/livro'

        const response = await axios({
            method: id ? 'PUT' : 'POST',
            url : req_url,
            data, 
            ...config
        })

       return response

    } catch (error) {
        console.error(error)
    }
}

/*
const login = async() => {

    try {
        const req_url = 'https://beta-api-new.plasfran.com/api/auth/login'

        const data = {
            "email": "estagiario@gmail.com",
            "senha": "Estagio@123"
        }
        const response = await axios.put(req_url, data , config)

       // console.log(response.data)

    } catch (error) {
        console.error(error)
    }
}
*/

export const getCategorias = async(setDados:React.Dispatch<React.SetStateAction<Categoria[]>>, query:string) => {
    try {
        const req_url = 'https://beta-api-new.plasfran.com/api/LivroCategoria/Select'

        const data = {
            "pesquisa": query
        }

        const response = await axios.post(req_url, data, config)
        await setDados(response.data.dados)
       // console.log(response.data.dados)

    } catch (error) {
        console.error(error)
    }
}