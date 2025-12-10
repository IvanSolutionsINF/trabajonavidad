import { Route, Routes } from 'react-router-dom'
//import './App.css'
import '../src/estilo.css'
import './estilo.css'
import Principal from './Principal'
import Uno from './Uno'
import Tres from './Tres'
import Cuatro from './Cuatro'
import Comp1 from "./Comp1";
import Comp2 from "./Comp2";
import Comp3 from "./Comp3";
import Comp4 from "./Comp4";
import Comp5 from "./Comp5";

function Dos() {

  return (
    <>
      <div>

        <div className="pad">
          <div className="titu">
            <h1>NAVIDAD EN BOLIVIA</h1>
          </div>
          <div className="men">
            <Comp1></Comp1>

          </div>
          <div className="cont">
            <Comp2></Comp2>

          </div>
          <div className="log">
            <Comp3></Comp3>

          </div>

          <div className="enla">
            <Comp5></Comp5>
          </div>

          <div className="foot">
            <h4>Realizado por: Boris Ivan Quispe Cayllante</h4>

          </div>

        </div>

      </div>
    </>
  )
}

export default Dos