import axios from 'axios';
import Livro from '../types/livro';
import Categoria from '../types/categoria';
import instance from '../utils/axiosconfig';

export var config = {
    headers: {
      'Authorization': ""
    }
};

export const getListagens2 = async(pesquisa:string, categoriaid:number, pagina:number, 
    setDados:React.Dispatch<React.SetStateAction<Livro[]>>, setPagina:React.Dispatch<React.SetStateAction<number>>,
     setTotal:React.Dispatch<React.SetStateAction<number>>, setTamanhoPagina:React.Dispatch<React.SetStateAction<number>>,
      setQtdPaginas:React.Dispatch<React.SetStateAction<number>>) => {
    try {

        const req_url = 'https://localhost:7258/api/Listagem'
    
        const data = {
            "pageSize": 10,
            "currentPage": pagina,
            "pesquisa": pesquisa ? pesquisa : "",
            "livroCategoriaId": categoriaid
        }

        const response = await axios.post(req_url, data)
        console.log(response.data)
        await setDados(response.data.dados)
        await setPagina(response.data.currentPage)
        await setTotal(response.data.totalRegisters)
        await setTamanhoPagina(response.data.pageSize)
        await setQtdPaginas(response.data.totalPages)

    } catch (error) {
        console.error(error)
        //console.log(data)
    }
}

export const getListagens3 = async() => {
    try {
        const req_url = 'https://localhost:7258/api/Listagem'
    
        const data = {
            "tamanhoPagina": 10,
            "paginaAtual": 0,
            "pesquisa": "",
            "categoria": null
          }

        const response = await axios.post(req_url, data, config)
        

    } catch (error) {
        console.error(error)
        //console.log(data)
    }
}

export const apagarLivro = async(id:number) => {

    try {
        const req_url = `https://localhost:7258/api/Livro/${id}`
        const response = await axios.delete(req_url)
        return response
        //console.log(response)
    }   catch (error) {
        console.error(error)
    }
}

export const getLivro = async(livroId:string | undefined) => {
    try {
        //const req_url = `https://localhost:7258/api/Livro/${livroId}`
        const response = await instance.get(`/api/Livro/${livroId}`)
        //const response = await axios.get(req_url, config)
        //console.log(response.data)
        return response.data
    } catch (error) {
        console.error(error)
    }
}


export const pLivro = async(data:{}, id:string | undefined) => {
     
    try {

        const req_url = 'https://localhost:7258/api/Livro/'

        const response = await axios({
            method: id ? 'PUT' : 'POST',
            url : req_url,
            data
        }) 
    
       return response

    } catch (error) {
        console.error(error)
    }
}


export const getCategorias = async(setDados:React.Dispatch<React.SetStateAction<Categoria[]>>, query:string) => {
    try {
        const req_url = 'https://localhost:7258/api/Listagem/getCategorias'

        const data = {
            "pesquisa": query ? query : ""
        }

        const response = await axios.post(req_url, data)
        await setDados(response.data.dados)
        console.log(response.data)

    } catch (error) {
        console.error(error)
    }
}

export const getAllLivros = async() => {
    try {
        const req_url = 'https://localhost:7258/api/Livro'

        const response = await axios.get(req_url, config)
        console.log(response.data)
    } catch (error) {
        console.error(error)
        console.log("Deu error")
    }
}

export const login = async(nome: string, senha: string) => {
    try {
        const req_url = 'https://localhost:7258/api/Token/login'

        const data = {
            'nome' : nome,
            'senha' : senha
        }

        const response = await axios.post(req_url, data)
        console.log(response)
        return response
    } catch (error) {
        console.error(error)
    }
}
