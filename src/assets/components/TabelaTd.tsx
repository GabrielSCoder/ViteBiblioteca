import tabelaTd from "../types/tabelaTd";


function tabelaTd(props: tabelaTd) {

    const {classes, children} = props

    return (
        <td className={classes}>{children}</td>
    )
}


export default tabelaTd