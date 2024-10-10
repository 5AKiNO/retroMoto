import React, { useState, useEffect } from 'react';
import image1 from '../Assets/termius.png';
import image2 from '../Assets/termius.png';
import image3 from '../Assets/termius.png';

const images = [
  { src: image1, title: 'Dibujos hechos a mano', desc: 'El diseño del prototipo en forma manual se realizó en clases...' },
  { src: image2, title: 'Modelado en 3D', desc: 'Representación del prototipo utilizando software de modelado 3D...' },
  { src: image3, title: 'Impresión en 3D', desc: 'Producción del modelo mediante impresión 3D...' },
];

const UncontrolledExample = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Cambia cada 2 segundos

    return () => clearInterval(interval); // Limpia el intervalo cuando el componente se desmonte
  }, []);

  return (
    <div className="carousel-container">
      <div className="carousel-inner">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
            style={{ display: index === currentIndex ? 'block' : 'none' }} // Solo muestra el activo
          >
            <img src={image.src} alt={image.title} className="carousel-image" />
            <div className="carousel-caption">
              <h5>{image.title}</h5>
              <p>{image.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UncontrolledExample;

