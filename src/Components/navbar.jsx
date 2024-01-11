import React from "react";
import logop from './logop.png'; // Importa la imagen
import Buscador from './buscador'
const Navbar = () => {
    return (
      <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto  px-4 text-black">
        <span className="flex text-2xl font-extralight cursor-pointer justify-between items-center">
          <img src={logop} alt="Logo de la aplicación" className="rounded-full m-3" />
          Logoipsum
        </span>
  
        <ul className="flex font-light items-center ">
          <button className="p-4 hover:text-cyan-500 duration-500">Home </button>
          <button className="p-4 hover:text-cyan-500 duration-500">Modelos por año </button>
          <button className="p-4 hover:text-cyan-500 duration-500">Marcas </button>
          <button className="p-4 hover:text-cyan-500 duration-500">Contacto </button>

  
          <li className="ml-auto "> {/* Utiliza ml-auto para mover Buscador a la derecha */}
            <Buscador />
          </li>
        </ul>
      </div>
    );
  };
  
  export default Navbar;