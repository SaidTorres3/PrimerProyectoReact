import React from 'react';
import ReactDOM from 'react-dom';
import LaHora from './lahora';

function experimento(event) {
     console.log(event)
     alert("El valor ingresado es");
}


const element = (
     <div>
          <form>
               <input type="text" id="texto" />
               <input type="button" id="boton" value="Botón" onclick={experimento} />
               <div id="test"></div>
               <LaHora hora={true} ></LaHora>
               <LaHora hora={false} ></LaHora>
          </form>
     </div>
);

const container = document.getElementById('app');
ReactDOM.render(element, container);

// var prueba = document.getElementById("boton");
// var texto = document.getElementById("texto");

// prueba.addEventListener("click", experimento);

// function experimento(){
//      var valor = texto.value;
//      alert("El valor ingresado es" + valor);
// }
