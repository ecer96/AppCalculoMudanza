import React from 'react'
import logoCasa from '../imagenes/casa.png';

const Nav = () => {
  return (
    <div className='contenedor-navegador'>
        <div className='icono-casa'>
        
            <a href='/'>
                <img  src={logoCasa} alt='imagen-casa'/>
            </a>

        </div>

        <div className='contenedor-enlaces'>
        
            <a href='/'>How We Work</a>
            <a href='/'>Services</a>
            <a href='/'>Free Quote</a>
            <a href='/'>Contact</a>
        
        </div>
      
    </div>
  )
}

export default Nav