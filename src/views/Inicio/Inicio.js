import React from 'react'
import Carrousel from '../../componentes/Carrousel'
import Cards from '../../componentes/Cards';
import './Inicio.css';

const Inicio = () => {
  return (
    <div className='inicio'>
      <Carrousel></Carrousel>
      <Cards></Cards>
    </div>
  )
}

export default Inicio