interface Categoria {
    descricao : string;
    ativo : boolean;
    dataCadastro : Date;
    id : number
}


interface Livro {
    id : number;
    titulo : string;
    subtitulo : string;
    codigo : string;
    livroCategoria : Categoria;
    editora : string;
    autor : string;
    sinopse : string;
    usuarioCadastro : string;
    usuarioUltimaAlteracao : string;
    dataUltimaAlteracao : string;
    livroCategoriaId : number;
    anoEdicao : number
}

export default Livro