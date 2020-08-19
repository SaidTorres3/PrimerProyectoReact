import React, { useState } from 'react';

const Desafio = () => {
    const [value, setValue] = useState('');
    const [list, setList] = useState([]);

    const handleClick = () => {
        setList([...list, value]);
        setValue('');
    }

    return (
        <div>
            <p>Ingresa tu nombre.</p>
            <input id="nombre" type="text" id="input" placeholder="Ingresa tu nombre"
                value={value} onChange={event => setValue(event.target.value)} />

            {/* <p>Elige el color que quieres.</p>
            <select name="color" id="selector">
                <option value="azul">Azul</option>
                <option value="rojo">Rojo</option>
                <option value="amarillo">Amarillo</option>
                <option value="verde">Verde</option>
                <option value="naranja">Naranja</option>
                <option value="morado">Morado</option>
                <option value="rosa">Rosa</option>
                <option value="negro">Negro</option>
                <option value="blanco">Blanco</option>
                <option value="aleatorio">Aleatorio</option>
            </select>
            <br></br>
            <br></br> */}
            <button type="button" onClick={handleClick} >
                Aplicar
            </button>

            <ul>
                {list.map((item, i) => <li key={i}>{item}</li>)}
            </ul>

        </div>
    );
}

export default Desafio;