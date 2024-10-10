import React from 'react';
import ModelViewer from './ModelViewer';

const Obj = () => {
    return (
        <div>
            <h1>Visor de Modelo 3D</h1>
            <ModelViewer objFile='../Assets/ModeloCompleto.obj' />
        </div>
    );
};

export default Obj;
