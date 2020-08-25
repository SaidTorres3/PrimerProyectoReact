import React, { useState } from 'react';

const Desafio = () => {
    const [nombre, setNombre] = useState('');
    const [color, setColor] = useState('blue');
    const [edad, setEdad] = useState('');

    const [datos, setDatos] = useState([]);

    const handleClick = () => {

        if(!nombre.trim() || !edad.trim){
            alert("Ingrese todos los datos para aplicar.");
            return;
        }
        
        if(color==="aleatorio"){
            let resultado = Math.round(Math.random()*7);
            console.log("Ha entrado en el if de aleatorio, el número aleatorio es: " + resultado);

            switch(resultado){
                case 0:
                    setColor('blue');
                    console.log("Se ha activado 0");
                    break;
                case 1:
                    setColor('red');
                    console.log("Se ha activado 1");
                    break;
                case 2:
                    setColor('yellow');
                    console.log("Se ha activado 2");
                    break;
                case 3:
                    setColor('green');
                    console.log("Se ha activado 3");
                    break;
                case 4:
                    setColor('orange');
                    console.log("Se ha activado 4");
                    break;
                case 5:
                    setColor('purple');
                    console.log("Se ha activado 5");
                    break;
                case 6:
                    setColor('pink');
                    console.log("Se ha activado 6");
                    break;
                case 7:
                    setColor('white');
                    console.log("Se ha activado 7");
                    break;
                default: setColor('blue');
            }
        }

        console.log(color);
        setDatos([...datos, {nombre: nombre, color: color, edad: edad}]);
        setNombre('');
        setEdad('');
        setColor('blue');
    }

    return (
        <div>
            <p>Ingresa tu nombre.</p>
            <input id="nombre" type="text" id="nombre" placeholder="Ingresa tu nombre"
                value={nombre} onChange={event => setNombre(event.target.value)} />

            <p>Ingresa tu edad.</p>
            <input id="edad" type="text" id="edad" placeholder="Ingresa tu edad"
                value={edad} onChange={event => setEdad(event.target.value)} />

            <p>Elige el color que quieres.</p>
            <select name="color" id="selector" value={color} onChange={event => setColor(event.target.value)}>
                <option value="blue">Azul</option>
                <option value="red">Rojo</option>
                <option value="yellow">Amarillo</option>
                <option value="green">Verde</option>
                <option value="orange">Naranja</option>
                <option value="purple">Morado</option>
                <option value="pink">Rosa</option>
                <option value="white">Blanco</option>
                <option value="aleatorio">Aleatorio</option>
            </select>
            <br></br>
            <br></br>

            <button type="button" onClick={handleClick} >
                Aplicar
            </button>

            <ul>
                {datos.map((item, i) => <li style={{color: item.color}} key={i}>{item.nombre} tiene {item.edad} años de edad.</li>)}
            </ul>

        </div>
    );
}

export default Desafio;