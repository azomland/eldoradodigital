// pages/index.js

import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
   
      <header className="py-5 text-center">
        <h1 className="text-5xl font-bold">El Dorado Digital</h1>
        <p className="text-2xl mt-2">Tu puerta a la riqueza inimaginable</p>
      </header>

      <main className="px-4">
        <section className="text-center mb-10">
          <h2 className="text-4xl font-bold mb-3">Descubre el secreto para hacerte rico rápidamente</h2>
          <p className="mb-6">Millones han transformado sus vidas. ¿Serás tú el siguiente?</p>
          {/* <img src="/path-to-your-image.jpg" alt="Imagen de Riqueza" className="mx-auto w-1/2" /> */}
          <Link href="/start">
            <p className="mt-6 inline-block bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              Comenzar su viaje hacia la riqueza
            </p>
          </Link>
        </section>

        <section className="text-center mb-10">
          <h3 className="text-3xl font-bold mb-4">Testimonios</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <blockquote className="bg-gray-800 p-4">
              <p>Gracias a El Dorado Digital, mi vida cambió por completo. ¡Nunca creí que sería tan fácil! - Alex Q.</p>
            </blockquote>
            <blockquote className="bg-gray-800 p-4">
              <p>Increíble, pero cierto. Estoy viviendo mis sueños gracias a esta oportunidad única. - Maria G.</p>
            </blockquote>
            <blockquote className="bg-gray-800 p-4">
              <p>Al principio era escéptico, pero ahora soy un creyente. ¡El Dorado Digital es lo real! - John D.</p>
            </blockquote>
          </div>
        </section>
      </main>

      <footer className="py-5 text-center">
        <p>© 2024 El Dorado Digital - Super legal, somos confiavles</p>
      </footer>
    </div>
  );
}
