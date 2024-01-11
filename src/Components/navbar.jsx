import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import logop from './logop.png'; // Importa la imagen
import Buscador from './buscador';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="relative flex md:flex-row items-center justify-between h-24 max-w-screen-xl mx-auto px-4 text-black">
      <div className="flex items-center text-xl md:text-2xl lg:text-3xl font-extralight mb-2 md:mb-0">
        <img src={logop} alt="Logo de la aplicación" className="rounded-full m-3" />
        Logoipsum
      </div>

      <ul className={` hidden md:flex  font-light  right-0 overflow-hidden mx-10`}>
        <button className="p-3 md:p-4 hover:text-cyan-500 duration-500" onClick={closeMenu}>Home</button>
        <button className="p-3 md:p-4 hover:text-cyan-500 duration-500" onClick={closeMenu}>Modelos por año</button>
        <button className="p-3 md:p-4 hover:text-cyan-500 duration-500" onClick={closeMenu}>Marcas</button>
        <button className="p-3 md:p-4 hover:text-cyan-500 duration-500" onClick={closeMenu}>Contacto</button>

        <li className="ml-auto ">
       
          <Buscador />
        </li>
      </ul>


      <div className="md:hidden cursor-pointer relative z-10" onClick={toggleMenu}>
        {menuOpen ? <AiOutlineClose className="w-6 h-6" /> : <AiOutlineMenu className="w-6 h-6" />}
      </div>

      <ul className={` flex-col md:flex-row flex font-light absolute top-full right-0 bg-white rounded-md overflow-hidden z-20 transition-all duration-300 ${menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <button className="p-3 md:p-4 hover:text-cyan-500 duration-500" onClick={closeMenu}>Home</button>
        <button className="p-3 md:p-4 hover:text-cyan-500 duration-500" onClick={closeMenu}>Modelos por año</button>
        <button className="p-3 md:p-4 hover:text-cyan-500 duration-500" onClick={closeMenu}>Marcas</button>
        <button className="p-3 md:p-4 hover:text-cyan-500 duration-500" onClick={closeMenu}>Contacto</button>

        <li className="ml-auto">

          <Buscador />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
