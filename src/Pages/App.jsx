import React, { useEffect, useState } from 'react';
import Buscador from '../Components/buscador';
import Navbar from '../Components/navbar';
import Autos from '../Components/autos';
import Catalogos from '../Components/catalogo';
import BackgroundBubbles from '../Components/backgroundBubbles'; // Asegúrate de que esté en mayúscula

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
    <div className="h-screen w-full">
      <div className="relative flex items-center justify-center min-h-screen bg-white overflow-hidden">
        <BackgroundBubbles /> {/* Usa BackgroundBubbles en lugar de backgroundBubbles */}
        <div className="z-10 text-center space-y-6">
          <div className="text-2xl font-bold text-gray-800">
            <p>Your baby</p>
            <p>Child growth</p>
          </div>
          <p className="text-gray-500">Monitorea su crecimiento con una pequeña ayuda</p>
          <p className="text-gray-600">Selecciona una opción para continuar</p>

          <div className="space-y-4">
            <button className="w-48 py-2 bg-yellow-200 rounded-lg shadow-md text-gray-700">Nuevo Usuario</button>
            <button className="w-48 py-2 bg-yellow-200 rounded-lg shadow-md text-gray-700">Usuario existente</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
