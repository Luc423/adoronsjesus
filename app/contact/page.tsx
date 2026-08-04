export default function ContactPage() {
  return (
    /* OPTIMISATION : py-8 sur mobile, py-16 sur PC pour ne pas noyer l'écran au démarrage */
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 md:py-16">
      
      {/* GRAND TITRE DE LA PAGE CENTRÉ */}
      {/* OPTIMISATION : Écart mb-8 sur mobile, mb-16 sur PC */}
      <div className="text-center mb-10 md:mb-16">
        {/* OPTIMISATION : text-3xl ou 4xl sur mobile, text-6xl sur PC */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif font-bold tracking-wider text-black uppercase mb-3">
          Contact
        </h1>
        {/* OPTIMISATION : text-base sur mobile pour éviter les retours à la ligne bizarres */}
        <h2 className="text-base sm:text-xl md:text-2xl font-serif italic text-gray-500 px-2">
          Pour nous écrire ou nous soutenir
        </h2>
      </div>
      
      {/* CONTENU ENTIÈREMENT CENTRÉ */}
      {/* OPTIMISATION : Espacement réduit entre les blocs sur mobile (space-y-10) */}
      <div className="max-w-2xl mx-auto space-y-10 md:space-y-16 text-center">
        
        {/* Section Mail */}
        <div className="flex flex-col items-center px-2">
          <h3 className="text-xl sm:text-2xl font-bold text-black mb-2">Mail</h3>
          <p className="text-gray-700 text-base sm:text-lg mb-2">Pour toute information :</p>
          {/* OPTIMISATION : text-base sur mobile pour que l'adresse tienne au maximum sur une seule ligne */}
          <a 
            href="mailto:adoronsjesusbagneux@gmail.com" 
            className="text-base sm:text-xl font-medium text-black hover:text-gray-600 transition-colors underline break-all tracking-wide"
          >
            adoronsjesusbagneux@gmail.com
          </a>
        </div>

        {/* Section Adresse */}
        <div className="flex flex-col items-center px-2">
          <h3 className="text-xl sm:text-2xl font-bold text-black mb-1">Adresse postale</h3>
          <p className="text-gray-500 mb-4 md:mb-6 italic text-xs sm:text-base max-w-md">
            (courrier et don par chèque à l’ordre de l’association Adorons Jésus)
          </p>
          {/* OPTIMISATION : p-5 sur mobile au lieu de p-8 pour laisser l'adresse respirer sur petit écran */}
          <div className="bg-gray-50 p-5 sm:p-8 rounded-xl border border-gray-100 w-full max-w-md shadow-sm">
            <p className="font-bold text-black text-lg sm:text-xl mb-2">Association Adorons Jésus</p>
            <p className="text-gray-700 text-base sm:text-lg">4, avenue Albert Petit, bâtiment A</p>
            <p className="text-gray-700 text-base sm:text-lg">92220 Bagneux</p>
          </div>
        </div>
        
      </div>

    </div>
  );
}