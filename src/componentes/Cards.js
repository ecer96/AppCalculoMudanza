import React from "react";
import plus from "../imagenes/plus.png";
import minus from "../imagenes/minus.png";
import { useState } from "react";


const useCounter=()=>{
  
  const [valor, setvalor] = useState(0);

  let sumar =()=> {
    
    if(valor===0){
        setvalor(1)
        setvalor(valor+1);
        } else setvalor(valor+1);
    }

  let restar =()=> {
    if(valor===0){
        setvalor(0)
    }else{setvalor(valor-1)}
  };

  const clear=()=>{
    setvalor(0);
  }


  

  return{
    valor,
    sumar,
    restar,
    clear
  }

}


const Cards = (props) => {

  const{valor,sumar,restar,clear,sumaValores}= useCounter();
 

  return (
      <div className="cards">
        <div className="imagen-logo">
          <p>{props.m2}</p>
          <img src={require(`../imagenes/icono-${props.imagen}.png`)}  alt='imagen'/>
        </div>

        <div className="titulo-card">
          <p>{props.titulo}</p>
        </div>

        <div className="contenedor-boton">
          <button className="boton-plus" onClick={sumar}>
            <img src={plus} alt='plusButton'/>
          </button>

          <div>
            <p>{valor}</p>
          </div>

          <button className="boton-minus" onClick={restar}>
            <img src={minus} alt='minusButton'/>
          </button>
        </div>


        
      </div>
  );
};

export default Cards

