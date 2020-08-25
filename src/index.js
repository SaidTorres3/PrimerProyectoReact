import React from 'react';
import ReactDOM from 'react-dom';
import LaHora from './components/lahora';
import Desafio from './components/desafio';
import './styles/generalStyles.css';

const element = (
     <div className="generalStyles">
          <form>
               <LaHora hora={true}/>
               <br/>
               <br/>
               <Desafio/>
          </form>
   </div>
);

const container = document.getElementById('app');
ReactDOM.render(element, container);