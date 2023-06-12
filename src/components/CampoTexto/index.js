import './CampoTexto.css';

const CampoTexto = (props) => {
    
    const aoDigitar = (e) => {
        props.aoAlterado(e.target.value)
    }

    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input onChange={aoDigitar}
            placeholder={`${props.placeholder}...`}
            required={props.obrigatorio}
            value={props.valor} />
        </div>
    )
}

export default CampoTexto;