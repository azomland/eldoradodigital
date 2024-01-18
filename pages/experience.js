// pages/experience.js

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import '../styles/globals.css'
import { AiOutlineWhatsApp } from "react-icons/ai";
import Link from 'next/link';
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
  
    const whatsappURL = `https://wa.me/?text=Me%20hice%20rico,%20hazlo%20tú%20también%20%20https://eldoradodigital.vercel.app`;

  return (    
 
        <div className="min-h-screen bg-black p-2 ">
            <div className="text-[#81f565] text-center mx-auto my-0 justify-center flex flex-col">
            <audio ref={audioRef} src="/song.mp3" />
            {stage === 0 && <p className="text-center text-2xl  py-64">Preparando tu futuro... 🤑🤑🤑</p>}
            {stage === 1 && <p className="text-center text-2xl  py-64">Conectando con el servidor secreto... 🤫</p>}
            {stage === 2 && (
                <div className="text-center text-2xl  py-64">
                    <p>¡Alerta de seguridad detectada!</p>
                    <p>Intentando contramedidas...</p>
                </div>
            )}
            {stage === 3 && <p className="text-center text-2xl  py-64">Accediendo a tus archivos personales... 😰</p>}
            {stage === 4 && (
                <div className="text-center text-2xl  py-64">
                    <p>Borrando archivos innecesarios... ☠️</p>
                    <p className="text-red-600">¡Error crítico encontrado!</p>
                </div>
            )}
            {stage === 5 && (
                <div className="text-center text-2xl  py-64 justify-center">
                    <p>Creando noticias falsas... 🤡</p>
                    <div className="flex mt-12 mx-auto justify-center">
                        <Image src={imgSrc} alt="Imagen del Usuario" width={600} height={600} />
                    </div>
                </div>
            )}
            {stage === 6 && (
                <div className="text-center text-2xl  py-64">
                    <p>Analizando patrones de comportamiento en redes sociales... 👀</p>
                </div>
            )}
            {stage === 7 && (
                <div className="text-center text-2xl  py-64">
                    <p>Extrayendo contraseñas almacenadas... 🗣️</p>
                </div>
            )}
            {stage === 8 && (
                <div className="text-center text-2xl  py-64">
                    <p>Infiltrándose en sistemas de correo electrónico... 🕵🏻‍♂️</p>
                </div>
            )}
            {stage === 9 && (
                <div className="text-center text-2xl  py-64">
                    <p>Enviando datos a servidores remotos... 🙈</p>
                </div>
            )}
            {stage === 10 && (
                <div className="text-center text-2xl  py-64">
                    <p>Instalando ransomware... <br /> 🤣🤣🤣🤣🤣🤣🤣</p>
                </div>
            )}
            {stage === 11 && (
                <div className="text-center text-2xl  py-64">
                    <p>Realizando transacciones financieras no autorizadas... 💸</p>
                </div>
            )}
            </div>
       
        {stage === 12 && (
                <><nav className="bg-gray-800 text-white p-4 w-full">
                      <div className="container mx-auto flex justify-between items-center">
                          <div className="font-bold text-xl">LasPrimerasNoticias</div>
                          <div>
                              <Link href="/" className="px-4 hover:text-gray-300">Inicio</Link>
                              <Link href="/" className="px-4 hover:text-gray-300">Nacional</Link>

                          </div>
                      </div>
                  </nav><div className="md:w-full h-screen grid grid-col-1 bg-gray-200 text-black">
                          <div className=" mx-auto p-8 flex items-center justify-between">
                              <div>
                                  <h1 className="font-bold text-4xl mb-3">Se quería hacer rico!</h1>
                                  <p className="text-xl">POV: Lo hackean!.</p>
                                  <Image src={imgSrc} alt="Imagen del Usuario" width={200} height={200} />
                                  <p className='mt-8'>Usuario aprende que nada es gratis y que debe tener cuidado con los permisos que acepta en Internet.</p>
                                  <p className='text-red-400 text-2xl'>Hoy fue en broma, mañana podría no serlo. Ten cuidado. 👀</p>
                                  <a className="m-12 ml-4 flex mx-auto items-center text-green-100 font-bold bg-green-600 py-2 px-3 rounded-full" href={whatsappURL} target="_blank" rel="noopener noreferrer">
                                    <AiOutlineWhatsApp className='mr-2' /> Compartir
                                  </a>
                              </div>
                          </div>
                         
                      </div></>
        )}
         
        </div>
    
  );
}
