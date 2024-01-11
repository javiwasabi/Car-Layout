import React, { useEffect, useState } from 'react';
import { BsChevronCompactRight, BsChevronCompactLeft, BsChevronCompactDown} from 'react-icons/bs';
import { Link } from "react-router-dom";

const Autos = () => {
  const [vehiculos, setVehiculos] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  
 
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? vehiculos.length - 1 : prevIndex - 1));
  };
 
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === vehiculos.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const response = await fetch('https://auto-cl-default-rtdb.firebaseio.com/V1/vehicles/new/search/data.json');
        if (!response.ok) {
          throw new Error('No se pudo obtener la respuesta de la API');
        }
        const data = await response.json();
        setVehiculos(data);
      } catch (error) {
        console.error('Error al obtener los datos de la API:', error);
      }
    };

    obtenerDatos();
  }, []);
  const vehiculosFiltrados = vehiculos.filter((vehiculo) => vehiculo.image && vehiculo.model && vehiculo.brand);


  return (
 
  <div class=" flex min-h-screen items-center justify-center px-16 ml-auto ">
 <div className='flex'>
 
    {vehiculosFiltrados.length > 0 && (
      <div className=' flex-col md:flex-row font-Tektur block '>
        <div className='flex'><h1 className="whitespace-normal mt-4 text-5xl "> {vehiculosFiltrados[currentIndex].brand}     </h1>
        <img
                src={vehiculosFiltrados[currentIndex].logo}
                alt={vehiculosFiltrados[currentIndex].model}
                className="rounded-full w-40  bg-white mix-blend-multiply filter"
                /></div>
        
        <div> <h1 className="whitespace-normal mt-4 text-2xl"> {vehiculosFiltrados[currentIndex].model} </h1>
        </div>
       
        
      </div>
    )}
   
    
</div>

  <div class="  relative w-full max-w-lg m-10">
    <div class="absolute top-0 -left-4 w-72 h-72 bg-gray-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
    <div class="absolute top-0 -right-4 w-72 h-72 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
    <div class="absolute -bottom-8 left-20 w-72 h-72 bg-red-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
    <div class="m-8 relative space-y-4">
    
    </div>
    <div className=" -left-4 h-70  bg-white mix-blend-multiply filter">
        {vehiculosFiltrados.length > 0 && (
            <img
            src={vehiculosFiltrados[currentIndex].image}
            alt={vehiculosFiltrados[currentIndex].model}
            className="animate-slide  "
            />
        )}
   </div>
   </div>
    {/* Left Arrow */}
      <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-1 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-1 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className='justify-center items-center absolute top-[90%] -translate-x-0 translate-y-[-50%] text-2xl rounded-full p-1 bg-black/20 text-white cursor-pointer'>
  <a href='#catalog'>
    <BsChevronCompactDown size={30} />
  </a>
</div>
        
     

      <p className='text-black absolute top-[95%] -translate-x-0 translate-y-[-50%] text-xs'>Ver catálogo</p>
  </div>


      
  );
};

export default Autos;

