import React from 'react';
import ReactDOM from 'react-dom';
import LaHora from './components/lahora';
import Desafio from './components/desafio';

const element = (
     <div>
          <form>
               <input type="text" id="texto"/>
               <input type="button" id="boton" value="Botón"/>
               <div></div>
               <LaHora hora={true} extra={'hola'}/>
               <br/>
               <LaHora hora={false}/>
               <Desafio/>
          </form>
   </div>
);

const container = document.getElementById('app');
ReactDOM.render(element, container);

var prueba = document.getElementById("boton");
var texto = document.getElementById("texto");

prueba.addEventListener("click", experimento);

function experimento(){
     var valor = texto.value;
     alert("El valor ingresado es: " + valor);
}
