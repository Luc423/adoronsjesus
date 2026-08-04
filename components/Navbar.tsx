'use client'; // Indispensable pour utiliser useState dans Next.js (App Router)

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  // État pour savoir si le menu mobile est ouvert ou fermé
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50 border-b border-[#FCD34D]/30">
      <div className="max-w-7xl mx-auto px-6 py-3 lg:py-4 flex items-center justify-between">
        
        {/* Logo et Texte */}
        <Link href="/" className="flex items-center gap-3">
          <Image 
            src="/images/logo.png" 
            alt="Logo Adorons Jésus" 
            width={65} 
            height={65} 
            // MODIFICATION : Légèrement plus petit sur mobile (w-[50px] h-[50px]) et taille normale sur grand écran
            className="object-contain w-[50px] h-[50px] md:w-[65px] md:h-[65px]"
          />
          <span className="text-xl sm:text-2xl font-serif font-bold text-black">
            Adorons<span className="text-black"> Jésus</span>
          </span>
        </Link>

        {/* Bouton Menu Burger (Visible sur Mobile et Tablette jusqu'à lg) */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          // MODIFICATION : Changé md:hidden en lg:hidden pour rester en burger sur tablette
          className="lg:hidden text-gray-700 hover:text-[#E11D48] focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Menu principal (Visible uniquement à partir des écrans Large / Ordinateurs) */}
        {/* MODIFICATION : Changé md:flex en lg:flex pour éviter les chevauchements sur tablette */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          <Link href="/" className="text-gray-700 hover:text-[#E11D48] font-medium transition-colors">Accueil</Link>
          <Link href="/rendez-vous" className="text-gray-700 hover:text-[#E11D48] font-medium transition-colors">Nos rendez-vous</Link>
          <Link href="/evenements" className="text-gray-700 hover:text-[#E11D48] font-medium transition-colors">Évènements</Link>
          <Link href="/association" className="text-gray-700 hover:text-[#E11D48] font-medium transition-colors">L'association</Link>
          
          {/* BRANCHEMENT DU LIEN HELLOASSO (Version Ordinateur) */}
          <Link 
            href="https://www.helloasso.com/associations/adorons-jesus/formulaires/1" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-700 hover:text-[#E11D48] font-medium transition-colors"
          >
            Don
          </Link>
          
          <Link href="/patronages" className="text-gray-700 hover:text-[#E11D48] font-medium transition-colors">Patronages</Link>
          <Link href="/contact" className="text-gray-700 hover:text-[#E11D48] font-medium transition-colors">Contact</Link>
        </nav>
      </div>

      {/* Menu mobile déroulant (Affiché sur petit écran et tablette si ouvert) */}
      {isOpen && (
        // MODIFICATION : Changé md:hidden en lg:hidden
        <nav className="lg:hidden bg-white border-t border-[#FCD34D]/20 px-6 py-4 flex flex-col gap-2 shadow-inner">
          <Link onClick={() => setIsOpen(false)} href="/" className="text-gray-700 hover:text-[#E11D48] font-medium transition-colors py-2">Accueil</Link>
          <Link onClick={() => setIsOpen(false)} href="/rendez-vous" className="text-gray-700 hover:text-[#E11D48] font-medium transition-colors py-2">Nos rendez-vous</Link>
          <Link onClick={() => setIsOpen(false)} href="/evenements" className="text-gray-700 hover:text-[#E11D48] font-medium transition-colors py-2">Évènements</Link>
          <Link onClick={() => setIsOpen(false)} href="/association" className="text-gray-700 hover:text-[#E11D48] font-medium transition-colors py-2">L'association</Link>
          
          {/* BRANCHEMENT DU LIEN HELLOASSO (Version Mobile) */}
          <Link 
            onClick={() => setIsOpen(false)} 
            href="https://www.helloasso.com/associations/adorons-jesus/formulaires/1" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-700 hover:text-[#E11D48] font-medium transition-colors py-2"
          >
            Don
          </Link>
          
          <Link onClick={() => setIsOpen(false)} href="/patronages" className="text-gray-700 hover:text-[#E11D48] font-medium transition-colors py-2">Patronages</Link>
          <Link onClick={() => setIsOpen(false)} href="/contact" className="text-gray-700 hover:text-[#E11D48] font-medium transition-colors py-2">Contact</Link>
        </nav>
      )}
    </header>
  );
}