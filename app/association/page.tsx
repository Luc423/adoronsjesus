import Link from 'next/link';

export default function Association() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16">
      
      {/* SECTION TITRE */}
      <div className="text-center mb-16">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif font-bold tracking-wider text-black uppercase mb-4 text-center">
  L'Association
</h1>
        <h2 className="text-xl md:text-2xl font-serif italic text-gray-500">
          Qui sommes-nous ?
        </h2>
      </div>
      
      {/* PREMIER BLOC DE TEXTE AVEC L'IMAGE À DROITE */}
      <section className="mb-12">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
    
    {/* Colonne Gauche : Les textes d'origine */}
    <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
      <p>
        Basée à Bagneux (92), l’association est née en janvier 2021 sous le nom d’<strong>Adorons Jésus</strong>. 
        Elle est constituée de paroissiens balnéolais, qui ont chacun eu une rencontre personnelle qui a changé 
        leurs vies, avec Jésus-Eucharistie lors de différents évènements catholiques.
      </p>
      <p>
        Le désir de s’engager dans l’Église et d’œuvrer pour l’évangélisation eucharistique est né dans nos cœurs. 
        <strong> L’adoration chantée est notre charisme.</strong> Le nom du groupe est une invitation au monde à s’unir dans l’adoration au Christ.
      </p>
      <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-black">
        <p className="italic">
          Certains d’entre nous font partie de la Fraternité Parole & Louange (Diocèse d’Albi) et 
          du Ministère d’adoration de la chantre Geneviève Brou (Communauté Mère du Divin Amour). 
          Notre groupe est de sensibilité charismatique.
        </p>
      </div>
    </div>

    {/* Colonne Droite : L'image demandée */}
    <div className="w-full h-full min-h-[300px] relative rounded-xl overflow-hidden shadow-sm">
      <img 
        src="/images/photoasso.jpg" 
        alt="Photo de l'association" 
        className="w-full h-full object-cover rounded-xl"
      />
    </div>

  </div>
</section>

      {/* SECTION PAROLE FONDATRICE */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-black mb-8 text-center md:text-left">La Parole fondatrice</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <blockquote className="text-xl italic text-gray-800 border-l-4 border-black pl-6 py-2">
            « Mais l’heure vient – et c’est maintenant – où les vrais adorateurs adoreront le Père en esprit et vérité : tels sont les adorateurs que recherche le Père.&nbsp;»
            <footer className="text-sm font-bold text-gray-500 mt-2">— Saint Jean 4:23</footer>
          </blockquote>
          
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-bold text-black">« Maintenant »</h4>
              <p className="text-sm text-gray-600">Urgence d'adorer le Christ dans un monde qui se perd, pour rester en alliance et être transfiguré.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-bold text-black">« Adorateurs que recherche le Père »</h4>
              <p className="text-sm text-gray-600">Le désir humble de répondre à cet appel spécifique.</p>
            </div>
          </div>
        </div>
      </section>

      {/* APPEL À L'ACTION */}
      <section className="p-8 bg-blue-900 text-white rounded-2xl text-center shadow-lg">
  <h2 className="text-2xl font-bold mb-4">Vous souhaitez soutenir l’association ?</h2>
  <p className="mb-6 opacity-90 max-w-xl mx-auto">
    Chaque personne, chaque don, compte pour faire grandir cette mission d’évangélisation eucharistique. Aidez-nous à la faire rayonner.
  </p>
  <Link href="/contact" className="bg-white text-blue-900 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition shadow-md inline-block">
    Contactez-nous
  </Link>
</section>
    </main>
  );
}