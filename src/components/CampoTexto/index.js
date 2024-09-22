// import { useState } from 'react';
import './CampoTexto.css';

const CampoTexto = (props) => {
    const placeholderModificada = `${props.placeholder}...`;

    // const [valor, setValor] = useState('')

    // const aoDigitao = (evento) => {
    //     setValor(evento.target.value);
    // }

    const aoDigitao = (evento) => {
        props.aoAlterado(evento.target.value);
    }

    return(
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={props.valor} onChange={aoDigitao} required={props.obrigatorio} placeholder={placeholderModificada}/>
        </div>
    )
}

export default CampoTexto;