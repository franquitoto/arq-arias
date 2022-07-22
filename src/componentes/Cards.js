import React from 'react'
import Card from './Card'
import americana from '../img/casaAmericana.jpg';
import departamentos from '../img/edificio.jpg';
import quincho from '../img/quincho.jpg';


const cards = [
  {
    id: 1,
    title: "Casa Americana",
    img: americana,
    //content: 'Casa estilo americana con dos plantas y 5 ambientes cada una. Un baño por planta y muchos etc'
  },
  {
    id: 2,
    title: "Departamentos",
    img: departamentos,
    //content: 'Complejo de departamentos de 4 y 6 hambientes y muchisimisimos etc '
  },
  {
    id: 1,
    title: "Quincho",
    img: quincho,
    //content: 'quincho con mesada, parrilla, bar y un amplio espacio para una mesa y muchos etc ect'
  },
]


const Cards = (props) => {
  return (
    <div className='container d-flex justify-content-center align-items-center h-100 '>
      <div className='row'>
        {
          cards.map(card => (
            <div className='col-md-4' key={card.id}>
              <Card title= {card.title} img={card.img} content={card.content}></Card>
            </div>
          ))
        }

      </div>

    </div>
  )
}

export default Cards