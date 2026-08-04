'use client'; 
import { useState, useEffect } from 'react';
import Link from 'next/link';

const images = [
  "/images/fond1.jpg",
  "/images/fond2.jpg",
  "/images/fond3.jpg"
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Fonction pour aller à l'image précédente manuellement
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 < 0 ? images.length - 1 : prev - 1));
  };

  // Fonction pour aller à l'image suivante manuellement
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <main className="w-full bg-white m-0 p-0 block -mt-1 overflow-x-hidden">
      
      {/* SECTION CARROUSEL : Passage de 75vh à 85vh pour donner plus de hauteur vers le bas sur PC */}
      <section className="relative h-auto md:h-[85vh] w-full overflow-hidden block clear-both group bg-black">
        {/* CONTAINER DES IMAGES */}
        <div className="relative md:absolute md:inset-0 w-full h-full">
          {images.map((img, index) => (
            <div
              key={index}
              className={`w-full transition-opacity duration-1000 ${
                index === currentIndex 
                  ? 'opacity-100 relative block z-10' 
                  : 'opacity-0 absolute inset-0 z-0'
              }`}
            >
              <img 
                src={img} 
                alt="Carrousel" 
                className="w-full h-auto md:h-full object-contain md:object-cover object-top" 
              />
            </div>
          ))}
        </div>

        {/* FLÈCHES DE DIRECTION */}
        <button 
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-black/40 hover:bg-black/60 text-white text-3xl font-light w-12 h-12 rounded-full hidden md:flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300"
          title="Précédent"
        >
          ‹
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-black/40 hover:bg-black/60 text-white text-3xl font-light w-12 h-12 rounded-full hidden md:flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300"
          title="Suivant"
        >
          ›
        </button>
        
        {/* TEXTE SUPERPOSÉ CENTRÉ PARTOUT */}
        <div className="relative md:absolute md:inset-0 z-20 flex flex-col items-center justify-center p-5 w-full bg-[#111] md:bg-transparent md:pb-0">
          <div className="text-center max-w-xl md:max-w-4xl mx-auto px-2">
            <h1 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-2 md:mb-6 drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]">
              Adorons Jésus
            </h1>
            <p className="text-sm sm:text-base md:text-xl lg:text-2xl text-gray-200 md:text-white font-serif italic tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] leading-relaxed">
              « En effet, l'heure vient – et c'est maintenant – où les vrais adorateurs adoreront le Père en esprit et en vérité ; car tels sont les adorateurs que le Père recherche. » 
              <span className="block text-xs sm:text-sm md:text-lg mt-2 font-sans not-italic text-amber-200 md:text-white opacity-90 text-center">
                — Saint Jean 4:23
              </span>
            </p>
          </div>
        </div>

      </section>

      {/* SECTION ÉVÉNEMENTS À VENIR - TITRE PARFAITEMENT CENTRÉ */}
      <section className="max-w-5xl mx-auto px-6 py-12 bg-white">
        {/* Titre centré au milieu tout en haut */}
        <h2 className="text-2xl sm:text-3xl font-bold text-black mb-8 text-center">
          Notre prochain rendez-vous
        </h2>

        {/* Grille principale : Image à gauche, contenu textuel centré à droite */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* Colonne Gauche : Image de l'Ostensoir */}
          <div className="md:col-span-5 flex justify-center md:justify-start">
            <img 
              src="/images/ete.jpg" 
              alt="Ostensoir" 
              className="max-w-full sm:max-w-[360px] h-auto object-cover rounded-none"
            />
          </div>

          {/* Colonne Droite : Bloc de texte entièrement centré sur lui-même */}
          <div className="md:col-span-7 flex flex-col items-center text-center font-serif text-gray-800 space-y-5">
            
            <h3 className="text-2xl sm:text-3xl font-bold text-black font-serif">
              Reprise !
            </h3>
            
            <p className="text-xl sm:text-2xl font-bold text-black font-serif">
              Samedi 3 Octobre
            </p>
            
            <p className="text-xl sm:text-2xl font-bold text-black font-serif">
              16h30
            </p>
            
            <p className="text-base sm:text-lg leading-relaxed max-w-xl">
              Nous avons hâte de vous retrouver, après la pause estivale, pour commencer cette nouvelle saison, 
              unis dans l'adoration et passionnés pour Jésus-Eucharistie.
            </p>
            
            <p className="text-base sm:text-lg leading-relaxed max-w-xl">
              Nous croyons que Dieu nous attend dans sa présence pour nous révéler davantage son cœur eucharistique 
              et nous entraîner dans une adoration toujours plus profonde.<br /> Soyons prêts&nbsp;!
            </p>
            
            <p className="text-base sm:text-lg font-bold text-black font-serif pt-2">
              Rendez-vous à la rentrée,
            </p>
            
            <p className="text-base sm:text-lg font-bold italic text-blue-900 font-serif">
              Le Noyau Adorons Jésus
            </p>

          </div>
        </div>
      </section>

      {/* SECTION : 3 BLOCS CLIQUABLES */}
      <section className="max-w-7xl mx-auto px-6 pb-16 sm:pb-24 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          
          {/* Bloc 1 : Nos Rendez-vous */}
          <Link href="/rendez-vous" className="group relative h-[300px] sm:h-[420px] rounded-2xl overflow-hidden shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <img 
              src="/images/rendez-vous.jpg" 
              alt="Nos rendez-vous" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </Link>

          {/* Bloc 2 : L'Association */}
          <Link href="/association" className="group relative h-[300px] sm:h-[420px] rounded-2xl overflow-hidden shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <img 
              src="/images/association.jpg" 
              alt="L'association" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </Link>

          {/* Bloc 3 : Don */}
          <a 
            href="https://www.helloasso.com/associations/adorons-jesus/formulaires/1" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group relative h-[300px] sm:h-[420px] rounded-2xl overflow-hidden shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl block"
          >
            <img 
              src="/images/don.jpg" 
              alt="Don" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </a>
        </div>
      </section>

    </main>
  );
}