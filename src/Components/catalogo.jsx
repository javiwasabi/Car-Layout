import React, { useEffect, useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import { RxDotFilled } from 'react-icons/rx';

const Catalogo = () => {
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

  const handleVoltearCarta = (index) => {
    setVehiculos((prevVehiculos) => {
      const updatedVehiculos = [...prevVehiculos];
      updatedVehiculos[index].isFlipped = !updatedVehiculos[index].isFlipped;
      return updatedVehiculos;
    });
  };

  const vehiculosFiltrados = vehiculos.filter((vehiculo) => vehiculo.image && vehiculo.model && vehiculo.brand);

  return (
    <div className="max-w-[1240px] mx-auto font-Tektur px-4 text-black">
      <h2 className="text-2xl my-4" id='catalog'>Listado de vehículos</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 shadow-xl">
        {vehiculosFiltrados.slice(currentIndex, currentIndex + 9).map((vehiculo, index) => (
          <ReactCardFlip
            key={vehiculo.model}
            flipDirection='horizontal'
            isFlipped={vehiculo.isFlipped || false}
          >
            <div
              className="card border border-solid cursor-pointer group-hover:rotate-y-180 duration-500 border-opacity-50 p-4  shadow-xl bg-white rounded-lg overflow-hidden block m-10"
              onClick={() => handleVoltearCarta(index)}
            >
              <img
                src={vehiculo.image}
                alt={`${vehiculo.brand} - ${vehiculo.model}`}
                className="w-full shadow-md h-48 object-cover bg-white mix-blend-multiply filter"
              />
              <div className="p-4 block">
                <div className='flex'>
                  <h3 className="text-lg font-bold">{vehiculo.brand}</h3>
                  <img
                    src={vehiculo.logo}
                    alt={`${vehiculo.brand} - ${vehiculo.model}`}
                    className="w-20 bg-white mix-blend-multiply filter"
                  />
                </div>
                <p className="text-sm mt-2">{vehiculo.model}</p>
                {/* Otros detalles del vehículo */}
              </div>
            </div>

            <div
              className="card card-back border border-solid cursor-pointer group-hover:rotate-y-180 duration-500 border-opacity-50 p-4  shadow-xl bg-white rounded-lg overflow-hidden block m-10"
              onClick={() => handleVoltearCarta(index)}
            >
              <p className="text-sm mt-2"> Marca: {vehiculo.brand}</p>
              <p className="text-sm mt-2"> Modelo: {vehiculo.model}</p>
              <p className="text-sm mt-2"> Tipo: {vehiculo.type}</p>
              <p className="text-sm mt-2"> Disponibles: {vehiculo.count}</p>
            </div>
          </ReactCardFlip>
        ))}
        <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-1 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>

      <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-1 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      </div>
      <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer'
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalogo;
