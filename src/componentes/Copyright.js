import React from 'react'
import CopyrightIcon from '@mui/icons-material/Copyright';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import '../css/Copyright.css'
const Copyright = () => {
  return (
    <div className='copyrigth bg-dark row'>
      <div className='container d-flex justify-content-center align-items-center col-lg-6 mt-2 mb-2 pt-2 pb-2'>
        <AlternateEmailIcon color="info"></AlternateEmailIcon><span className='text-color'>Desing: franco.arias.dev@gmail.com</span>
      </div>
      <div className='container d-flex justify-content-center align-items-center col-lg-6 mt-2 mb-2 pt-2 pb-2'>
        <CopyrightIcon color="info"></CopyrightIcon><span className='text-color'>2022 ARQ-ARIAS. Todos los derechos reservados</span>
      </div>
    </div>
  )
}

export default Copyright;