const token:string = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub21lVXN1YXJpbyI6IkVTVEFHSUFSSU8iLCJub21lQ29sYWJvcmFkb3IiOiJBTlRPTklPIEFNQVVSSSBCRVNFUlJBIERFIFNPVVNBIiwiaWRDb2xhYm9yYWRvciI6Ijg1NiIsImlkQ2FyZ28iOiI0MiIsImNhcmdvIjoiUEVEUkVJUk8iLCJpZFVzdWFyaW8iOiIyNTEiLCJhbWJpZW50ZSI6IlBST0QiLCJleHAiOjE2OTg0MTEwODEsImlzcyI6IkJPWDNfRVJQX0FQSSIsImF1ZCI6Imh0dHBzOi8vcGxhc2ZyYW4uY29tIn0.O_VgZIxbotJEf347P9C_nSmg9IXcUPbqjKcovioQIVk"
import axios from 'axios';

export const config = {
    headers: {
      'Authorization': `Bearer ${token}`
    }
};

export const getListagens = async(pesquisa, categoriaid, pagina, setDados) => {
   
    const req_url = 'https://beta-api-new.plasfran.com/api/livro/listagem'

    const data = {
        "pageSize": 10,
        "currentPage": pagina,
        "pesquisa": pesquisa,
        "livroCategoriaId": categoriaid
    
    
    }
    try {
        const response = await axios.post(req_url, data, config)
        await setDados(response.data.dados.dados)
        console.log(data)

    } catch (error) {
        console.error(error)
        console.log(data)
    }
}

export const getLivro = async(livroId) => {
    try {
        const req_url = `https://beta-api-new.plasfran.com/api/livro/${livroId}`
        const response = await axios.get(req_url, config)
       //console.log(response.data.dados)
        return response.data.dados
    } catch (error) {
        console.error(error)
    }
}

const getPesquisa = async(query:string) => {

    try {
        const req_url = 'https://beta-api-new.plasfran.com/api/LivroCategoria/Select'

        const data = {
            "pesquisa" : query
        }

        const response = await axios.post(req_url, data, config)

        //console.log(response.data)

    } catch (error) {
        console.error(error)
    }
}

export const pLivro = async(data:{}, id) => {
     
    try {

        const req_url = 'https://beta-api-new.plasfran.com/api/livro'

        const response = await axios({
            method: id ? 'PUT' : 'POST',
            url : req_url,
            data, 
            ...config
        })

       console.log(data)

    } catch (error) {
        console.error(error)
        console.log(data)
    }
}

const editarLivro = async(data:{}) => {

    try {
        const req_url = 'https://beta-api-new.plasfran.com/api/livro'

        const response = await axios.post(req_url, data, config)

       // console.log(response)
    } catch (error) {
        console.error(error)
    }
}

export const apagarLivro = async(id:number, dados, setDados) => {

    try {
        const req_url = `https://beta-api-new.plasfran.com/api/livro/${id}`
        const response = await axios.delete(req_url, config)
        await setDados(dados.filter(item => item.id !== id))
        //console.log(response)
    }   catch (error) {
        console.error(error)
    }
}

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

export const getCategorias = async(setDados, query:string) => {
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