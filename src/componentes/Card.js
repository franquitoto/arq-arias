import React from 'react'
import { PropTypes } from 'prop-types'
import '../css/cards.css';

const Card = ({title, img, content}) => {
  Card.propTypes = {
    title: PropTypes.string.isRequired,
    img:  PropTypes.string,
    content:  PropTypes.string
  }
  return (
    <div className='card text-center bg-dark'>
      <div className='overFlow'>
        <img src={img} alt="casa Americana" className='card-img-top'></img>
      </div>
      
      <div className='card-body text-secondary'>
        <h4 className='card-title'>{title}</h4>
        <p className='card-text'>
          {content ? content : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting' }

        </p>
        <a href='#!' className='btn btn-outline-secondary '>ver mas</a>
      </div>
    </div>
  )
}

export default Card