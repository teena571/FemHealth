import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'; 
import { Link } from 'react-scroll';
import Services from './components/Services';

const App = () => {
  return (
    <>
      <Navbar />

      <main>
        <div id="home">
          <Home/>
        </div>

        <div id="about">
          <About />
        </div>

        <div>
          <Services />
        </div>
      </main>
    </>
  )
}

export default App
