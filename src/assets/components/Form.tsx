import { SubmitHandler, useForm } from "react-hook-form"
import Livro from "../types/livro"
import {FaBook} from 'react-icons/fa'
import {BsImage} from 'react-icons/bs'
import { pLivro, getLivro } from "../services/requisicoes";
import { useParams, useNavigate } from "react-router-dom";
import {useEffect} from 'react'
import CategoriaSelect from "./Categoria";

function Form() {

    const {id} = useParams()
    const navigate = useNavigate();

    const { register, handleSubmit, reset, setValue, getValues, formState: { errors } } = useForm<Livro>();
    
    const onSubmit: SubmitHandler<Livro> = async (data) => {
        await pLivro(data, id)
        navigate("/")
    }

    const updateCategoria = (value) => {
        setValue("livroCategoriaId", value)
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (id) {
                    //console.log("é uma edição")
                    const livroData = await getLivro(id)
                    reset(livroData)
                }
            } catch (error) {
                console.error(error)
            }
        }

        fetchData();
    }, [id, reset])


    return (
        <div>
            <div className="shadow rounded-md mt-14 bg-white py-4 border-b">
                <div className="flex justify-between">
                    <div className="pl-4 flex items-center">
                        <FaBook size={30} className="text-lg text-green-800"/>
                        <h3 className="font-medium text-3xl text-green-900 align-baseline ml-2">Livro</h3>
                    </div>
                    <div className="pr-5">
                        <button className="bg-gray-600 text-zinc-200 p-2 rounded-md text-xl">Imprimir</button>
                    </div>
                </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-row py-4 space-x-4">
                    <div className="bg-white w-1/4 py-4 text-center flex flex-col justify-between">
                        <div>
                            <h2 className="font-bold text-xl">Envio de Arquivos</h2>
                            <p>Clique ou arraste seu arquivo até aqui</p>
                            <div className="mt-4 mx-4 border-dashed border-2 border-neutral-200 px-4 h-40">
                                <label htmlFor="input-file" id="img-drop">
                                    <input type="file" accept="image/*" id="input-file" hidden />
                                    <div id="img-view" className="flex justify-center items-center h-full bg-gray-200">
                                        <BsImage size={120} className="text-gray-400"/>
                                    </div>
                                </label>
                            </div>
                        </div>
                        <div>
                            <button type="submit" className="bg-green-600 text-white text-lg p-2 border-rounded rounded-md">Confirmar</button>
                        </div>
                    </div>
                    <div className="bg-white w-3/4 py-4 px-4">
                            <div className="flex flex-row space-x-4">
                                <div className="w-1/4 flex flex-col">
                                    <label id="campo1" className="pb-1.5">Código</label>
                                    <input {...register("codigo")} className="rounded-md border text-xl h-12"/>
                                </div>
                                <div className="w-1/4 flex flex-col">
                                    <label className="pb-1.5">Ano edição</label>
                                    <input {...register("anoEdicao")} className="rounded-md border text-xl h-12"/>
                                </div>
                                <div className="w-2/4 flex flex-col">
                                    <label className="pb-1.5">Título</label>
                                    <input {...register("titulo")} className="rounded-md border text-xl h-12 w-full"/>
                                </div>
                            </div>
                            <div className="w-full flex flex-col mt-4">
                                <label className="pb-1.5">Subtítulo</label>
                                <input {...register("subtitulo")} className="rounded-md border text-xl h-12"/>
                            </div>
                            <div className="flex flex-row space-x-4 mt-4">
                                <div className="w-1/2 flex flex-col">
                                    <label className="pb-1.5">Livro Categoria</label>
                                    <CategoriaSelect id={"CatSelect"} nome={"categorias"} classes={"rounded-md border text-xl h-12"}
                                     onChange={updateCategoria} valorSelecionado={getValues('livroCategoriaId')}/>
                                    <input {...register("livroCategoriaId")} hidden={true}/>
                                </div>
                                <div className="w-1/2 flex flex-col">
                                    <label className="pb-1.5">Editora</label>
                                    <input {...register("editora")} className="rounded-md border text-xl h-12"/>
                                </div>
                            </div>
                            <div className="flex flex-col mt-4">
                                <label className="pb-1.5">Autor</label>
                                <input {...register("autor")} className="rounded-md border text-xl h-12"/>
                            </div>
                            <div className="flex flex-col mt-4">
                                <label className="pb-1.5">Sinopse</label>
                                <textarea {...register("sinopse")} className="rounded-md border text-xl h-56 text-start"/>
                            </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Form