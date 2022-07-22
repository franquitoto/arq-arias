import './App.css';
import React, {useContext} from 'react';
import {ItemsProvider} from './Context'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Button } from 'reactstrap';
import NavBar from './componentes/NavBar';
import Carrousel from './componentes/Carrousel';
import Cards from './componentes/Cards';
import Footer from './componentes/Footer'
import Copyright from './componentes/Copyright';
import Inicio from './views/Inicio/Inicio';
import Nosotros from './views/Nosotros/Nosotros';

function App() {
  return (
    
    <ItemsProvider>
      <div className='App'>
        <Router>
        <NavBar></NavBar>
          <Routes>
            <Route path="/" element={<Inicio/>}></Route>
            <Route path='/nosotros' element={<Nosotros></Nosotros>}></Route>
          </Routes>
          <Footer></Footer>
          <Copyright></Copyright>
        </Router>
      </div>
    </ItemsProvider>
    // <div className="App">
    //   <NavBar></NavBar>
    //   <Carrousel></Carrousel>
    //   <Cards></Cards>
    //   <Footer></Footer>
    //   <Copyright></Copyright>
    // </div>
  );
}

export default App;
