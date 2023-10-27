import cabecalhoTh from '../types/cabecalhoth.tsx';

function TabelaTh(props: cabecalhoTh) {
    const {nome, classes} = props;

    return <th className={classes}>{nome}</th>
}

export default TabelaTh