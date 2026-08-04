'use client';

export default function RendezVousPage() {
  const dates2026_2027 = [
    { date: "Samedi 3 octobre 2026", heure: "16h30" },
    { date: "Samedi 14 novembre 2026", heure: "16h30" },
    { date: "Samedi 12 décembre 2026", heure: "16h30" },
    { date: "Samedi 9 janvier 2027", heure: "16h30" },
    { date: "Samedi 13 février 2027", heure: "16h30" },
    { date: "Samedi 13 mars 2027", heure: "16h30" },
    { date: "Samedi 10 avril 2027", heure: "16h30" },
    { date: "Samedi 1ᵉʳ mai 2027", heure: "16h30" },
  ];

  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      
      {/* GRAND TITRE DE LA PAGE CENTRÉ */}
      <div className="text-center mb-16">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif font-bold tracking-wider text-black uppercase mb-4 text-center">
  Nos Rendez-vous
</h1>
        <h2 className="text-xl md:text-2xl font-serif italic text-gray-500 max-w-2xl mx-auto">
          Calendrier 2026-2027
        </h2>
      </div>

      {/* GRILLE SUR TROIS COLONNES */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
        
        {/* COLONNE 1 : LES DATES DU CALENDRIER */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold uppercase tracking-wider text-black mb-6 border-b pb-2 border-gray-200">
            Dates des rencontres
          </h3>
          <ul className="space-y-4">
            {dates2026_2027.map((item, index) => (
              <li 
                key={index} 
                className="flex items-center space-x-3 text-lg text-gray-800 transition duration-300 hover:translate-x-1"
              >
                <span className="text-black font-light text-xl">•</span>
                <span className="font-medium">{item.date}</span>
                <span className="text-gray-400 italic">à {item.heure}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* COLONNE 2 : PROGRAMME, LIEU & ACCÈS */}
        <div className="space-y-8 bg-gray-50/50 p-8 rounded-2xl border border-gray-100">
          
          {/* LE PROGRAMME */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-2">
              Programme
            </h4>
            <p className="text-xl text-black font-serif italic leading-relaxed">
              Louange, adoration eucharistique, intercession, trisagion
            </p>
          </div>

          <hr className="border-gray-200" />

          {/* LE LIEU */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-2">
              Lieu
            </h4>
            <p className="text-lg text-black font-bold">
              Eglise Saint Hermeland
            </p>
            <p className="text-base text-gray-600">
              Place de la République <br />
              92220 Bagneux
            </p>
          </div>

          <hr className="border-gray-200" />

          {/* L'ACCÈS */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-2">
              Accès
            </h4>
            <p className="text-base text-gray-600 leading-relaxed">
              <span className="font-semibold text-gray-800">Métro ligne 4</span> station <span className="italic text-black">Bagneux Lucie Aubrac</span> puis bus <span className="font-semibold text-gray-800">162</span> ou <span className="font-semibold text-gray-800">388</span> station <span className="italic text-black">Rosenberg</span>
            </p>
          </div>
        </div>

        {/* COLONNE 3 : L'IMAGE AGRANDIE SUR TOUTE LA LARGEUR */}
        <div className="w-full">
          <img 
            src="/images/photorende.jpg" 
            alt="Intérieur de l'église Saint Hermeland" 
            className="w-full h-auto rounded-2xl shadow-lg object-cover"
          />
        </div>

      </div>
    </main>
  );
}