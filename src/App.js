import logo from './logo.svg';
import Buscador from './Components/buscador'
import Navbar from './Components/navbar'
import Autos from './Components/autos'
import Catalogos from './Components/catalogo'
import React, { useEffect, useState } from 'react';
function App() {
  const [navbarBackground, setNavbarBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 100) {
        setNavbarBackground(true);
      } else {
        setNavbarBackground(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className=" h-screen w-full " >
        <nav className={`fixed w-full h-24 shadow-xl ${navbarBackground ? 'bg-white' : 'bg-solid-color'} z-50`}>
      <Navbar/></nav>
        
        <Autos/>
        <Catalogos/>
    <div className='w-10 text-white '></div>
    </div>
  );
}

export default App;
