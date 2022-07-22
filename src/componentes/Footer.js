import React from 'react'
import logo from '../img/logo-removebg.png';
import '../css/footer.css';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import CallIcon from '@mui/icons-material/Call';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';



const Footer = () => {
  
  return (
    <div className='footer bg-dark row'>
      <div className='div-contacto clogo container d-flex justify-content-center align-items-center col-lg-3'>
         <a href='https://www.facebook.com/' className='p-2'><FacebookIcon color="info"></FacebookIcon></a><a href='https://www.youtube.com/' className='p-2'><YouTubeIcon color="info"></YouTubeIcon></a><a href='https://www.instagram.com/' className='p-2'><InstagramIcon color="info"></InstagramIcon></a>
      </div>
      <div className='logo container d-flex justify-content-center align-items-center col-lg-3'>
        <img src={logo} className='logo-img-footer'></img>
      </div>
      <div className='div-contacto clogo container d-flex justify-content-center align-items-center col-lg-3'>
         <ul>
            <h4 className='text-color d-inline'>CONTACTO</h4> 
            <li><LocationOnIcon color = "info"></LocationOnIcon><span className='text-color'> Ubicacion</span></li>
            <li><MarkEmailReadIcon color='info'></MarkEmailReadIcon><span className='text-color'> info@ariasarq.com</span></li>
            <li><CallIcon color='info'></CallIcon><span className='text-color'> +549 116148-0605</span></li>
         </ul>
      </div>
    </div>
  )
}

export default Footer