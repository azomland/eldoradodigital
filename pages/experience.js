// pages/experience.js

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import '../styles/globals.css'
import { AiOutlineWhatsApp } from "react-icons/ai";

export default function ExperiencePage() {
    const router = useRouter();
    const { imgSrc } = router.query;
    const [stage, setStage] = useState(0);
    const audioRef = useRef(null); 

    useEffect(() => {
      // Lógica para cambiar de etapa
      const timer = setTimeout(() => {
        if (stage < 12) {
          setStage(stage + 1);
        }
      }, 2500);
      
      if (stage === 0 && audioRef.current) {
        audioRef.current.play();
    }

      // Activar pantalla completa al cargar
      if (stage === 0) {
        if (document.documentElement.requestFullscreen) {
          document.documentElement.requestFullscreen();
        }
      }
  
      return () => clearTimeout(timer);
    }, [stage]);
  
    const whatsappURL = `https://wa.me/?text=Me%20hice%20rico%20hazlo%20tú%20también%20%20https://eldoradodigital.vercel.app`;

  return (    
      <div className="flex justify-center items-center min-h-screen bg-black">
        <div className="text-[#81f565] text-center mx-auto my-0 justify-center flex flex-col">
        <audio ref={audioRef} src="/song.mp3" />
        {stage === 0 && <p className="text-center text-2xl">Preparando tu futuro... 🤑🤑🤑</p>}
        {stage === 1 && <p className="text-center text-2xl">Conectando con el servidor secreto... 🤫</p>}
        {stage === 2 && (
            <div className="text-center text-2xl">
                <p>¡Alerta de seguridad detectada!</p>
                <p>Intentando contramedidas...</p>
            </div>
        )}
        {stage === 3 && <p className="text-center text-2xl">Accediendo a tus archivos personales... 😰</p>}
        {stage === 4 && (
            <div className="text-center text-2xl">
                <p>Borrando archivos innecesarios... ☠️</p>
                <p className="text-red-600">¡Error crítico encontrado!</p>
            </div>
        )}
        {stage === 5 && (
            <div className="text-center text-2xl">
                <p>Creando noticias falsas... 🤡</p>
                <div className="newspaper mt-12">
                    <Image src={imgSrc} alt="Imagen del Usuario" width={200} height={200} />
                </div>
            </div>
        )}
        {stage === 6 && (
            <div className="text-center text-2xl">
                <p>Analizando patrones de comportamiento en redes sociales... 👀</p>
            </div>
        )}
        {stage === 7 && (
            <div className="text-center text-2xl">
                <p>Extrayendo contraseñas almacenadas... 🗣️</p>
            </div>
        )}
        {stage === 8 && (
            <div className="text-center text-2xl">
                <p>Infiltrándose en sistemas de correo electrónico... 🕵🏻‍♂️</p>
            </div>
        )}
        {stage === 9 && (
            <div className="text-center text-2xl">
                <p>Enviando datos a servidores remotos... 🙈</p>
            </div>
        )}
        {stage === 10 && (
            <div className="text-center text-2xl">
                <p>Instalando ransomware... 🤣🤣🤣🤣🤣🤣🤣</p>
            </div>
        )}
        {stage === 11 && (
            <div className="text-center text-2xl">
                <p>Realizando transacciones financieras no autorizadas... 💸</p>
            </div>
        )}
        {stage === 12 && (
           
            <> <div>
                          {/* Barra de menú */}
                          <nav className="bg-gray-800 text-white p-4">
                              <div className="container mx-auto flex justify-between items-center">
                                  <div className="font-bold text-xl">LasPrimerasNoticias</div>
                                  <div>
                                      <a href="#" className="px-4 hover:text-gray-300">Inicio</a>
                                      <a href="#" className="px-4 hover:text-gray-300">Nacional</a>
                                      <a href="#" className="px-4 hover:text-gray-300">Internacional</a>
                                      <a href="#" className="px-4 hover:text-gray-300">Deportes</a>
                                      <a href="#" className="px-4 hover:text-gray-300">Cultura</a>
                                  </div>
                              </div>
                          </nav>

                          {/* Hero con gran titular */}
                          <div className="bg-gray-200 text-black">
                            <div className="container mx-auto p-8 flex items-center justify-between">
                                {/* Contenedor de texto */}
                                <div>
                                <h1 className="font-bold text-4xl mb-3">Se quería hacer rico!</h1>
                                <p className="text-xl">POV: Lo hackean!.</p>
                                <p className='mt-8'>Usuario aprende que nada es gratis y que debe tener cuidado con los permisos que acepta en Internet. 
                                </p>
                                <p className='text-red-400 text-2xl'>Hoy fue en broma, mañana podría no serlo. Ten cuidado. 👀</p>
                                </div>

                                {/* Imagen */}
                                <Image src={imgSrc} alt="Imagen del Usuario" width={200} height={200} />
                            </div>
                            </div>


                          {/* Contenido principal de la página */}
                          {/* ... */}
                      </div></>
        )}
        {stage === 12 && (
           <a className="mt-12 ml-4 flex mx-auto items-center text-green-100 font-bold bg-green-600 py-2 px-3 rounded-full" href={whatsappURL} target="_blank" rel="noopener noreferrer">
           <AiOutlineWhatsApp className='mr-2'/> Mándaselo a tu amigo que se quiere hacer rico!
           </a>
        )}
      </div>
      </div>

     
  );
}
