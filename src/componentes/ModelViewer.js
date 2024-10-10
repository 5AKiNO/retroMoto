import React, { useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { useLoader } from '@react-three/fiber';

const Model = ({ url }) => {
    const obj = useLoader(OBJLoader, url);

    return <primitive object={obj} />;
};

const ModelViewer = ({ objFile }) => {
    return (
        <Canvas style={{ height: '100vh' }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 5, 5]} />
            <Model url={objFile} />
        </Canvas>
    );
};

export default ModelViewer;
