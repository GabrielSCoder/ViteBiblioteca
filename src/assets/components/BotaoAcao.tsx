import botaoAcao from '../types/botaoacao'

function BotaoAcao(props: botaoAcao) {
    const {id, classes, children, ...restprops} = props
    return (
        <button id={id} className={classes} {...restprops} >
            {children}
        </button>
    )
}

export default BotaoAcao