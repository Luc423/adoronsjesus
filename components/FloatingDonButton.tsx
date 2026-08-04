import Link from 'next/link';

export default function FloatingDonButton() {
  return (
    <Link 
      href="https://www.helloasso.com/associations/adorons-jesus/formulaires/1" 
      target="_blank"
      rel="noopener noreferrer"
      // --- MODIFICATION : bg-blue-600 (Bleu) et survol en bg-blue-700 (Bleu plus foncé) ---
      className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 md:px-8 md:py-4 rounded-full text-sm md:text-base font-bold shadow-xl transition-all transform hover:scale-105 active:scale-95 flex items-center gap-2 tracking-wide"
    >
      {/* Le dessin/émoji diamant a été complètement supprimé d'ici */}
      <span className="inline md:hidden">Faire un don</span>
      <span className="hidden md:inline">Je fais un don</span>
    </Link>
  );
}