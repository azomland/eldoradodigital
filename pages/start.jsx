import React, { useRef, useState } from 'react';
import Webcam from "react-webcam";
import Link from 'next/link';
import Image from 'next/image';
import '../styles/globals.css';

export default function Start() {
  const webcamRef = useRef(null);
  const [imgSrc, setImgSrc] = useState(null);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
  }, [webcamRef, setImgSrc]);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4">
      {imgSrc ? (
        <>
          <h1 className="text-4xl font-bold mb-4">Estás a un paso de cambiar tu vida</h1>
          <p className="text-center mb-6">Esta es la foto con la recordarás a tu viejo YO!</p>
          <Image src={imgSrc} alt="Captura de cámara" className="rounded mb-4" width="200" height="200" />
          <Link href={{ pathname: '/experience', query: { imgSrc } }} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              Continuar a la Experiencia
          </Link>
        </>
      ) : (
        <>
          <h1 className="text-4xl font-bold mb-4">Captura tu Imagen</h1>
          <p className="text-center mb-6">
            Para comenzar, necesitamos una foto de tu actual yo. Luego, podrás compararlo con el yo del futuro, ¡tras ser parte de El Dorado Digital!
          </p>
          <div className="mb-4">
            <Webcam
              audio={false}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              className="rounded"
            />
          </div>
          <button onClick={capture} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mb-4">
            Capturar Imagen
          </button>
        </>
      )}
    </div>
  );
}
