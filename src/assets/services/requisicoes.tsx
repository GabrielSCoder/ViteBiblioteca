const token:string = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub21lVXN1YXJpbyI6IkVTVEFHSUFSSU8iLCJub21lQ29sYWJvcmFkb3IiOiJBTlRPTklPIEFNQVVSSSBCRVNFUlJBIERFIFNPVVNBIiwiaWRDb2xhYm9yYWRvciI6Ijg1NiIsImlkQ2FyZ28iOiI0MiIsImNhcmdvIjoiUEVEUkVJUk8iLCJpZFVzdWFyaW8iOiIyNDkiLCJhbWJpZW50ZSI6IlBST0QiLCJleHAiOjE2OTc4MTIxODMsImlzcyI6IkJPWDNfRVJQX0FQSSIsImF1ZCI6Imh0dHBzOi8vcGxhc2ZyYW4uY29tIn0.grHZUMwC2_6krpaHarzO6FBsriiIYOBNQv5VnGC__xc"
import axios from 'axios';

export const config = {
    headers: {
      'Authorization': `Bearer ${token}`
    }
};

export const getListagens = async(setDados:any) => {
    try {

        const req_url = 'https://beta-api-new.plasfran.com/api/livro/listagem'

        const data = {
            "pageSize": 10,
            "currentPage": 0,
            "pesquisa": null,
            "livroCategoriaId": null
        }

        const response = await axios.post(req_url, data, config)
        console.log(response.data.dados.dados)
        await setDados(response.data.dados.dados)

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

        console.log(response.data)

    } catch (error) {
        console.error(error)
    }
}

const criarLivro = async(data:{}) => {
     
    try {
        const req_url = 'https://beta-api-new.plasfran.com/api/livro'

        const response = await axios.post(req_url, data, config)

        console.log(response)

    } catch (error) {
        console.error(error)
    }
}

const apagarLivro = async(id:number) => {

    try {
        const req_url = `https://beta-api-new.plasfran.com/api/livro/${id}`
        const response = await axios.delete(req_url, config)
        console.log(response)
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
        const response = await axios.put(req_url, data)

        console.log(response.data)

    } catch (error) {
        console.error(error)
    }
}