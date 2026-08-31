'use client';
import { useState } from 'react';
import Image from 'next/image';

// Génère un tableau de 20 images
const images = Array.from({ length: 20 }, (_, i) => `/images/photo${i + 1}.jpg`);

export default function EvenementsPage() {
  // Index de la photo actuellement zoomée (null si aucune n'est ouverte)
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Aller à l'image suivante dans la lightbox
  const nextLightboxImage = (e: React.MouseEvent) => {
    e.stopPropagation(); // Évite de fermer la lightbox en cliquant sur la flèche
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev! + 1 >= images.length ? 0 : prev! + 1));
    }
  };

  // Aller à l'image précédente dans la lightbox
  const prevLightboxImage = (e: React.MouseEvent) => {
    e.stopPropagation(); // Évite de fermer la lightbox en cliquant sur la flèche
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev! - 1 < 0 ? images.length - 1 : prev! - 1));
    }
  };

  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
      
      {/* GRAND TITRE DE LA PAGE CENTRÉ */}
      <div className="text-center mb-16">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif font-bold tracking-wider text-black uppercase mb-4 break-words">
  Évènements
</h1>
        <h2 className="text-xl md:text-2xl font-serif italic text-gray-500">
          Veillée, Retraite et Sommet
        </h2>
      </div>

      {/* 1. Titre de l'évènement */}
      <div className="mb-8">
    <h3 className="text-3xl sm:text-4xl font-bold text-black mb-4">PROCHAIN ÉVÈNEMENT : <br></br>VEILLÉE DE PRIÈRES ET D’ADORATION&nbsp;</h3>
  

        <div className="flex flex-wrap gap-4 text-gray-600 font-semibold mb-6">
          <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded text-sm sm:text-base">31 octobre 2026</span>
          <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded text-sm sm:text-base">Bagneux(92)</span>
        </div>
      </div>
{/* 2. PRÉSENTATION AVEC L'IMAGE À DROITE */}
      <section className="mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="text-gray-700 leading-relaxed space-y-4 text-lg">
            <p>
             Dans le cadre de la Vigile de la Toussaint, nous vous
invitons à notre grande Veillée de prières et d’adoration.
Nous prierons pour vous en invoquant l'intercession de
tous les saints en la présence réelle de Dieu.
            </p>
            <p>
             Un rendez-vous incontournable de notre année.
            </p>
            <p>
              <strong>Au programme :</strong> chapelet aux flambeaux, adoration,
enseignement, intercession, confessions.
            </p>
            <p>
              <strong>Dress code : </strong> tous en blanc ! </p>
              <p>
              <strong>
  Rendez-vous Samedi 31 Octobre<br />
  Eglise St Hermeland<br />
  Accueil à partir de 19h30<br />
  Veillée 20h-23h
</strong></p>

          </div>
          
          {/* AJOUT DE md:-mt-8 : Décale l'image vers le haut uniquement sur ordinateur sans rien casser */}
         
            <img 
              src="/images/toussaint.jpg" 
              alt="Photo de l'événement" 
              className="max-w-[300px] mx-auto w-full h-auto object-cover "
            />
        </div>
      </section>
{/* --- LIGNE DE SÉPARATION --- */}
      <hr className="my-12 border-gray-200" />

<div className="mb-8">
<h3 className="text-3xl sm:text-4xl font-bold text-black mb-4">
  SOMMET EUCHARISTIQUE 1<sup>ère</sup> ÉDITION
</h3>
        <div className="flex flex-wrap gap-4 text-gray-600 font-semibold mb-6">
          <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded text-sm sm:text-base">6 et 7 juin 2026</span>
          <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded text-sm sm:text-base">Colombes(92)</span>
        </div>
        <p className="text-gray-500 italic mb-8">Partenaires : Diocèse de Nanterre et Radio Maria</p>
      </div>
      
      {/* 2. PRÉSENTATION AVEC L'IMAGE À DROITE */}
      <section className="mb-12">
        <h4 className="text-2xl font-bold text-black mb-6">Présentation</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="text-gray-700 leading-relaxed space-y-4 text-lg">
            <p className="font-bold text-xl text-black">48h pour Jésus-Eucharistie !</p>
            <p>
              Grand rassemblement, centré sur l’adoration eucharistique, dans le cadre de la Fête du Saint-Sacrement, 
              pour susciter de nouveaux adorateurs, faire (re)découvrir l’adoration et ses fruits et insuffler un 
              réveil eucharistique dans l’Eglise.
            </p>
            <p>
  <strong>Au programme :</strong> adoration du Saint-Sacrement, louange, enseignements, 
  veillée de guérison, exposition des miracles eucharistiques dans le monde créée par le Bienheureux Carlo Acutis et programme dédié pour les enfants.
</p>
<p className="mt-2">
  <a 
    href="https://radiomaria.fr/les-temps-forts-du-sommet-eucharistique-a-reecouter-en-podcast/" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="text-blue-600 hover:underline inline-block whitespace-nowrap md:whitespace-normal"
  >
    Les temps forts du Sommet Eucharistique<br />à réécouter en podcast&nbsp; 
  </a>
</p>
          </div>
          
          {/* AJOUT DE md:-mt-8 : Décale l'image vers le haut uniquement sur ordinateur sans rien casser */}
         
            <img 
              src="/images/photoeven.jpg" 
              alt="Photo de l'événement" 
              className="max-w-[300px] mx-auto w-full h-auto object-cover "
            />
        </div>
      </section>

      {/* --- LIGNE DE SÉPARATION --- */}
      <hr className="my-12 border-gray-200" />

      {/* --- BLOC : VIDÉO YOUTUBE AVEC TITRE --- */}
      <section className="mb-12">
        <h4 className="text-2xl font-bold text-black mb-6">Vidéo de présentation</h4>
        <div className="bg-black rounded-xl overflow-hidden shadow-lg aspect-video">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/T7VFyxwWuiY"
            title="Vidéo du Sommet Eucharistique"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* La ligne de séparation */}
      <hr className="my-12 border-gray-200" />

      {/* 3. ALBUM VISUEL : NOUVEAU SYSTÈME DE GALERIE ET LIGHTBOX */}
      <section className="mt-12 sm:mt-16">
        <h4 className="text-2xl font-bold text-black mb-8 text-center">Retour en images</h4>
        
        {/* Grille des miniatures */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {images.map((src, index) => (
            <div 
              key={index} 
              onClick={() => setLightboxIndex(index)}
              className="relative aspect-square cursor-pointer overflow-hidden rounded-xl border border-gray-200 shadow-sm hover:opacity-90 hover:scale-[1.02] transition"
            >
              <Image 
                src={src} 
                alt={`Miniature ${index + 1}`} 
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* LE MODAL / LIGHTBOX (S'affiche uniquement lorsqu'une image est cliquée) */}
      {lightboxIndex !== null && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 select-none backdrop-blur-sm"
          onClick={() => setLightboxIndex(null)} // Clique n'importe où sur le fond noir pour fermer
        >
          {/* Bouton Fermer (Petite Croix) */}
          <button 
            onClick={() => setLightboxIndex(null)}
            className="absolute top-6 right-6 text-white text-4xl font-light hover:text-gray-300 transition p-2 z-50"
            title="Fermer"
          >
            ✕
          </button>

          {/* Flèche Gauche (Précédent) */}
          <button 
            onClick={prevLightboxImage}
            className="absolute left-4 md:left-8 text-white text-4xl md:text-5xl font-light hover:text-gray-300 transition p-4 z-50"
            title="Précédent"
          >
            ‹
          </button>

          {/* Image grand format au centre */}
          <div className="relative w-full max-w-4xl h-[70vh] md:h-[80vh]">
            <Image
              src={images[lightboxIndex]}
              alt={`Image zoomée ${lightboxIndex + 1}`}
              fill
              className="object-contain" // Permet de voir toute l'image sans la recadrer
            />
          </div>

          {/* Flèche Droite (Suivant) */}
          <button 
            onClick={nextLightboxImage}
            className="absolute right-4 md:right-8 text-white text-4xl md:text-5xl font-light hover:text-gray-300 transition p-4 z-50"
            title="Suivant"
          >
            ›
          </button>

          {/* Indicateur textuel en bas */}
          <div className="absolute bottom-6 text-gray-400 text-sm font-semibold">
            {lightboxIndex + 1} / {images.length}
          </div>
        </div>
      )}

    </main>
  );
}