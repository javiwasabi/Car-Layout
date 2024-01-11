import React, { useEffect, useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import { RxDotFilled } from 'react-icons/rx';
import { BsChevronCompactRight, BsChevronCompactLeft } from 'react-icons/bs';

const Catalogo = () => {
  const [vehiculos, setVehiculos] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);


  function flipCard(){
    setIsFlipped(!isFlipped);

  }

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

 

  const vehiculosFiltrados = vehiculos.filter(
    (vehiculo) => vehiculo.image && vehiculo.model && vehiculo.brand
  );

  const itemsPerPage = 9;
  const totalPages = Math.ceil(vehiculosFiltrados.length / itemsPerPage);

  const visiblePageIndexes = Array.from({ length: totalPages }).map((_, index) => index * itemsPerPage);

  return (
    <div className="max-w-[1240px] mx-auto font-Tektur px-4 text-black">
      <h2 className="text-2xl my-4" id="catalog">
        Listado de vehículos
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 shadow-xl relative">
        {vehiculosFiltrados.slice(currentIndex, currentIndex + itemsPerPage).map((vehiculo, index) => (
          <ReactCardFlip
            key={vehiculo.model}
            flipDirection="horizontal"
            isFlipped={isFlipped}
          >
            {/* Contenido frontal de la tarjeta */}
            <div
              className="card border border-solid cursor-pointer group-hover:rotate-y-180 duration-500 border-opacity-50 p-4  shadow-xl bg-white rounded-lg overflow-hidden block m-10"
              onClick={() => flipCard(index)}
            >
              <img
                src={vehiculo.image}
                alt={`${vehiculo.brand} - ${vehiculo.model}`}
                className="w-full shadow-md h-48 object-cover bg-white mix-blend-multiply filter"
              />
              <div className="p-4 block">
                <div className="flex">
                  <h3 className="text-lg font-bold">{vehiculo.brand}</h3>
                  <img
                    src={vehiculo.logo}
                    alt={`${vehiculo.brand} - ${vehiculo.model}`}
                    className="w-20 bg-white mix-blend-multiply filter"
                  />
                </div>
                <p className="text-sm mt-2">{vehiculo.model}</p>
              </div>
            </div>

            {/* Contenido trasero de la tarjeta */}
            <div
              className="card card-back border border-solid cursor-pointer group-hover:rotate-y-180 duration-500 border-opacity-50 p-4  shadow-xl bg-white rounded-lg overflow-hidden block m-10"
              onClick={() =>  flipCard(index)}
            >
              <p className="text-sm mt-2"> Marca: {vehiculo.brand}</p>
              <p className="text-sm mt-2"> Modelo: {vehiculo.model}</p>
              <p className="text-sm mt-2"> Tipo: {vehiculo.type}</p>
              <p className="text-sm mt-2"> Disponibles: {vehiculo.count}</p>
            </div>
          </ReactCardFlip>
        ))}

      </div>

       {/* Páginas */}
       <div className="flex flex-wrap justify-center items-center mt-4 w-90%">
    {/* Botón para retroceder una página */}
    <div
      className="text-2xl cursor-pointer mx-2 text-gray-500"
      onClick={() => setCurrentIndex((prevIndex) => Math.max(0, prevIndex - 1))}
    >
      &lt; Anterior
    </div>

    {/* Páginas */}
    {Array.from({ length: Math.ceil(vehiculosFiltrados.length / itemsPerPage) }).map(
      (page, i) => (
        <div
          key={i}
          onClick={() => setCurrentIndex(i * itemsPerPage)}
          className={`text-2xl cursor-pointer mx-2 ${
            i * itemsPerPage === currentIndex ? 'text-black' : 'text-gray-500'
          }`}
        >
          {i + 1}
        </div>
      )
    )}

    {/* Botón para avanzar una página */}
    <div
      className="text-2xl cursor-pointer mx-2 text-gray-500"
      onClick={() =>
        setCurrentIndex((prevIndex) =>
          Math.min(prevIndex + itemsPerPage, vehiculosFiltrados.length - itemsPerPage)
        )
      }
    >
      Siguiente &gt;
    </div>
  </div>

      
    </div>
  );
};

export default Catalogo;
