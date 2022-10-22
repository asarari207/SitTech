import React, { useState } from 'react';
import './App.css';
import Home from './Components/Pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Menu from './Components/Sheard/Menu'

const SubMenu = () => {
  return (<>
    <div className='MainContainer'>
      <div className='Right'>
        <h1>Let's chat,
          We respond fast!</h1>
        <h1>Facebook</h1>
        <h1>Whatsapp</h1>
        <h1>Youtube</h1>
      </div>
      <div className='Left'>
        <h1 className='box'>Home</h1>
        <h1 className='box'>Our Teams</h1>
        <h1 className='box'>Services</h1>
        <h1 className='box'>About Us</h1>
      </div>
    </div>
  </>)
}

function App() {

  const [view, setView] = useState(false)

  return (
    <div className="App">


      <Menu view={view} setview={setView} />
      {view ? <SubMenu /> : <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>}

    </div>
  );
}

export default App;
