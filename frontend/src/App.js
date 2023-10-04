import { BrowserRouter, Routes, Route } from 'react-router-dom'

// All the components
import HomePage from "./components/HomePage/HomePage.js";
import Login from "./components/Login/Login.js";
import Registration from "./components/Registration/Registration.js";
import Cart from './components/Cart/CartButton';

import './App.css'



function App() {

  const num = 0;

  return (
    <BrowserRouter>
      <Routes>
          <Route path='/home' element = {<HomePage/>} /> 
          <Route path='/' element = {<Login/>} />
          <Route path='/register' element = {<Registration/>} />
          <Route path='/cart' element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;