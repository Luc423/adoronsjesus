import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube, FaTiktok } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full bg-slate-900 text-slate-300 py-10 border-t border-slate-800">
      {/* text-center par défaut sur mobile, text-left à partir des écrans md */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 text-center md:text-left">
        
        {/* Colonne 1 : Adresse postale */}
        <div>
          <h3 className="text-white font-bold mb-2">Adresse postale</h3>
          <p className="text-sm">Association Adorons Jésus</p>
          <p className="text-sm">4, avenue Albert Petit, bâtiment A</p>
          <p className="text-sm">92220 Bagneux</p>
        </div>

        {/* Colonne 2 : Contact et Réseaux sociaux */}
        {/* items-center pour centrer sur mobile, md:items-start pour aligner à gauche sur ordinateur */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <div>
            <h3 className="text-white font-bold mb-2">Contact</h3>
            {/* break-all évite que l'email ne dépasse sur les écrans très étroits */}
            <a href="mailto:adoronsjesusbagneux@gmail.com" className="text-sm hover:text-white transition-colors break-all">
              adoronsjesusbagneux@gmail.com
            </a>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-2">Suivez-nous</h3>
            {/* justify-center pour centrer les icônes sur mobile */}
           <div className="flex justify-center md:justify-start gap-6 text-xl">
  <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors"><FaFacebook /></a>
  <a href="https://www.instagram.com/adorons_jesus_" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-colors"><FaInstagram /></a>
  <a href="https://www.youtube.com/@adoronsjesusbagneux" target="_blank" rel="noopener noreferrer" className="hover:text-red-600 transition-colors"><FaYoutube /></a>
</div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto px-6 mt-10 pt-6 border-t border-slate-800 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Adorons Jésus. Tous droits réservés.
      </div>
    </footer>
  );
};

export default Footer;