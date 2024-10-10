import React from 'react';
import image1 from '../Assets/termius.png';
import image2 from '../Assets/termius.png';
import image3 from '../Assets/termius.png';
import { CCarousel, CCarouselItem, CCarouselCaption, CImage } from '@coreui/react';

const UncontrolledExample = () => {
  return (
    <CCarousel controls indicators>
      <CCarouselItem>
        <CImage className="d-block w-100" src={image1} alt="Dibujo a mano" />
        <CCarouselCaption className="d-none d-md-block">
          <h5>Dibujos hechos a mano</h5>
          <p>El diseño del prototipo en forma manual se realizó en clases...</p>
        </CCarouselCaption>
      </CCarouselItem>
      <CCarouselItem>
        <CImage className="d-block w-100" src={image2} alt="Modelado en 3D" />
        <CCarouselCaption className="d-none d-md-block">
          <h5>Modelado en 3D</h5>
          <p>Representación del prototipo utilizando software de modelado 3D...</p>
        </CCarouselCaption>
      </CCarouselItem>
      <CCarouselItem>
        <CImage className="d-block w-100" src={image3} alt="Impresión en 3D" />
        <CCarouselCaption className="d-none d-md-block">
          <h5>Impresión en 3D</h5>
          <p>Producción del modelo mediante impresión 3D...</p>
        </CCarouselCaption>
      </CCarouselItem>
    </CCarousel>
  );
};

export default UncontrolledExample;
