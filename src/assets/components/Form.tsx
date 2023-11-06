import { SubmitHandler, useForm } from "react-hook-form"
import Livro from "../types/livro"
import {FaBook} from 'react-icons/fa'
import {BsImage} from 'react-icons/bs'
import { pLivro, getLivro } from "../services/requisicoes";
import { useParams, useNavigate } from "react-router-dom";
import {useEffect} from 'react'
import CategoriaSelect from "./Categoria";
import mostrarToast from '../utils/mostrarToast.ts'
import useDebounce from '../utils/debounce';
import { useCallback } from 'react';

function Form() {

    const {id} = useParams<{id : string | undefined}>()
    const navigate = useNavigate();

    const { register, handleSubmit, reset, setValue, getValues, formState: { errors } } = useForm<Livro>();
    
    const updateCategoria = (value:number) => {
        setValue("livroCategoriaId", value)
    }

    const submiti: SubmitHandler<Livro> = async (data) => {
        const resp = await pLivro(data, id)
        navigate("/")
        resp ? id ? mostrarToast("Editado com sucesso!") : mostrarToast("Adicionado com sucesso!") : console.log("erro")
    }

    const onSubmit = useCallback(
        useDebounce(async (data : Livro) => {
          const resp = await pLivro(data, id);
          navigate('/');
          resp ? id ? mostrarToast('Editado com sucesso!') : mostrarToast('Adicionado com sucesso!') : console.log("erro")
        }, 500),
        [id, navigate]
    );

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
                            <button type="submit" className="bg-green-600 text-white text-lg p-2 border-rounded rounded-md">
                                Confirmar
                            </button>
                        </div>
                    </div>
                    <div className="bg-white w-3/4 py-4 px-4">
                            <div className="flex flex-row space-x-4">
                                <div className="w-1/4 flex flex-col">
                                    <label id="campo1" className="pb-1.5 font-semibold"> Código <span className="text-red-600">*</span></label>
                                    <input {...register("codigo" ,{ required: true })} className="rounded-md border text-xl h-12 pl-2"/>
                                </div>
                                <div className="w-1/4 flex flex-col">
                                    <label className="pb-1.5 font-semibold">Ano edição <span className="text-red-600">*</span></label>
                                    <input {...register("anoEdicao" ,{ required: true })} className="rounded-md border text-xl h-12 pl-2"/>
                                </div>
                                <div className="w-2/4 flex flex-col">
                                    <label className="pb-1.5 font-semibold">Título <span className="text-red-600">*</span></label>
                                    <input {...register("titulo" ,{ required: true })} className="rounded-md border text-xl h-12 w-full pl-2"/>
                                </div>
                            </div>
                            <div className="w-full flex flex-col mt-4">
                                <label className="pb-1.5 font-semibold">Subtítulo <span className="text-red-600">*</span></label>
                                <input {...register("subtitulo",{ required: true })} className="rounded-md border text-xl h-12 pl-2"/>
                            </div>
                            <div className="flex flex-row space-x-4 mt-4">
                                <div className="w-1/2 flex flex-col">
                                    <label className="pb-1.5 font-semibold">Livro Categoria <span className="text-red-600">*</span></label>
                                    <CategoriaSelect id={"CatSelect"} nome={"categorias"} classes={"rounded-md border text-xl h-12 pl-2"}
                                     onChange={updateCategoria} valorSelecionado={getValues('livroCategoriaId')}/>
                                    <input {...register("livroCategoriaId",{ required: true })} hidden={true}/>
                                </div>
                                <div className="w-1/2 flex flex-col">
                                    <label className="pb-1.5 font-semibold">Editora <span className="text-red-600">*</span></label>
                                    <input {...register("editora",{ required: true })} className="rounded-md border text-xl h-12 pl-2"/>
                                </div>
                            </div>
                            <div className="flex flex-col mt-4">
                                <label className="pb-1.5 font-semibold">Autor <span className="text-red-600">*</span></label>
                                <input {...register("autor",{ required: true })} className="rounded-md border text-xl h-12 pl-2"/>
                            </div>
                            <div className="flex flex-col mt-4">
                                <label className="pb-1.5 font-semibold">Sinopse <span className="text-red-600">*</span></label>
                                <textarea {...register("sinopse",{ required: true })} className="rounded-md border text-xl h-56 text-start pl-2 py-1"/>
                            </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Form