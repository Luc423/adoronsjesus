'use client';
import { useState } from 'react';

export default function Patronage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const figures = [
    {
      nom: "Notre-Dame du Saint-Sacrement",
      categorie: "Mère de l'Eucharistie",
      image: "/images/notre-dame.jpg",
      resume: "Nous sommes sous le patronage et sous le manteau de Notre Dame du Saint-Sacrement, Mère de l’Eucharistie, que nous prions à chacune de nos rencontres.",
      histoire: `Histoire : Notre-Dame du Saint-Sacrement est un titre donné à la Vierge Marie qui met en lumière son lien particulier avec le mystère de l'Eucharistie, c'est-à-dire la présence du Christ dans le Saint-Sacrement. Contrairement à d'autres vocables marials qui sont liés à des apparitions ou à des lieux précis, celui-ci est né d'une réflexion spirituelle et théologique sur la place de Marie dans l'œuvre du salut.

Les origines de cette dévotion : Au XIXᵉ siècle, l'Église catholique connaît un renouveau de la dévotion eucharistique. C'est dans ce contexte que Pierre-Julien Eymard fonde la Congrégation du Saint-Sacrement et les Servantes du Saint-Sacrement. Son objectif est de raviver la foi en la présence réelle du Christ dans l'Eucharistie et de promouvoir l'adoration eucharistique. En méditant sur le rôle de Marie dans la vie de Jésus, Eymard développe l'idée que Marie est inséparable du mystère eucharistique. Selon lui, c'est elle qui a donné au Verbe incarné son corps et son sang. Or ce même corps et ce même sang sont rendus présents dans l'Eucharistie. Il voit donc en Marie la femme qui conduit naturellement les croyants vers le Christ eucharistique. Vers 1868, peu avant sa mort, Eymard commence à employer et à diffuser le titre de « Notre-Dame du Saint-Sacrement ». Il souhaitait que cette dévotion accompagne et soutienne l'adoration eucharistique.

Marie et l'Eucharistie : La spiritualité de Notre-Dame du Saint-Sacrement repose sur plusieurs idées : Marie a préparé la venue du Christ (par son « oui » lors de l'Annonciation), Marie est la première à porter le Christ, Marie est la première adoratrice, Marie accompagne l'Église. 

Le développement du culte : Après la mort d'Eymard, ses disciples poursuivent la diffusion de cette dévotion. Des confréries, des chapelles et des communautés religieuses sont placées sous le patronage de Notre-Dame du Saint-Sacrement. Au XXᵉ siècle, la dévotion reçoit plusieurs approbations ecclésiastiques. Elle reste particulièrement vivante dans les familles religieuses fondées par Eymard.

Une dimension théologique profonde : Ce titre marial ne signifie pas que Marie remplace le Christ ou l'Eucharistie. Au contraire, il souligne sa mission traditionnelle dans la foi catholique : conduire les croyants à Jésus. Pour les fidèles qui pratiquent cette dévotion, Marie est le modèle parfait de l'attitude eucharistique : accueil de Dieu, disponibilité, adoration, action de grâce et communion avec le Christ. C'est pourquoi saint Pierre-Julien Eymard l'appelait parfois « la Mère et la Reine du Saint-Sacrement », une expression qui résume toute sa pensée : Marie est celle qui a donné au monde le Christ et qui continue de guider les chrétiens vers lui dans l'Eucharistie.`
    },
    {
      nom: "Saint Pascal Baylon",
      categorie: "Patron des œuvres eucharistiques",
      image: "/images/pascal-baylon.jpg",
      resume: "Nommé saint patron des congrès eucharistiques par le Pape Léon XIII en 1897 et de toutes les associations qui ont pour objet la divine Eucharistie.",
      histoire: `Histoire : Les origines d'un humble berger : Saint Pascal Baylon naît le 16 mai 1540 à Torrehermosa, dans le royaume d'Aragon, en Espagne. Ses parents sont de modestes paysans profondément croyants. Dès son plus jeune âge, Pascal doit travailler pour aider sa famille. Il est chargé de garder les troupeaux de moutons dans les campagnes aragonaises. Malgré son manque d'instruction, il manifeste très tôt une intelligence vive et une profonde sensibilité religieuse. Pendant les longues heures passées dans les champs, il consacre son temps à la prière et à la méditation. Il apprend même à lire par lui-même afin de pouvoir étudier les livres de piété et les Évangiles.

Son entrée chez les franciscains : À l'âge de vingt-quatre ans, après plusieurs années comme berger, Pascal décide de consacrer sa vie à Dieu. En 1564, il entre chez les franciscains réformés de la branche des Récollets, inspirée par l'idéal de pauvreté de Saint François d'Assise. Il choisit de rester simple frère convers, c'est-to-dire religieux chargé principalement des travaux manuels. Dans les différents couvents où il vit, il accomplit avec joie les tâches les plus modestes : jardinier, cuisinier, portier ou encore balayeur. Ses supérieurs remarquent rapidement sa grande humilité. Il ne cherche jamais les honneurs et considère les travaux les plus simples comme un service rendu à Dieu.

Une foi remarquable : Bien qu'il soit peu instruit, Pascal possède une connaissance profonde des vérités chrétiennes. Son amour pour l'Eucharistie est particulièrement célèbre. Il passe de longues heures en adoration devant le Saint-Sacrement. Selon plusieurs témoignages, il aurait connu des expériences mystiques et des extases pendant ses prières. 

La mission en France : En 1576, ses supérieurs lui confient une mission délicate : porter des documents importants jusqu'à Paris pour les remettre aux responsables de son ordre. Au cours de son trajet, Pascal est insulté, menacé et parfois même agressé en raison de sa foi catholique. Malgré ces épreuves, il accomplis sa mission avec courage et revient sain et sauf en Espagne.

Les dernières années et héritage : Le 17 mai 1592, au couvent de Vila-real, il meurt à l'âge de cinquante-deux ans. En 1618, il est béatifié par Paul V. En 1690, il est canonisé par Alexandre VIII. En 1897, Léon XIII le proclame patron des œuvres eucharistiques et des congrès consacrés à l'adoration du Saint-Sacrement. Aujourd'hui encore, Saint Pascal Baylon est considéré comme l'un des grands modèles de spiritualité franciscaine.`
    },
    {
      nom: "Sainte Julienne de Cornillon",
      categorie: "Inspiratrice de la Fête-Dieu",
      image: "/images/julienne-cornillon.jpg",
      resume: "Grande mystique à qui notre Seigneur Jésus-Christ révéla la Fête du Corps et du Sang du Christ dans l’Eglise universelle dite la Fête du Saint Sacrement.",
      histoire: `Histoire : Son histoire : Une enfance marquée par l'épreuve. Sainte Julienne de Cornillon naît vers 1193 près de Liège. Très jeune, elle perd ses parents et devient orpheline. Avec sa sœur Agnès, elle est confiée aux religieuses du monastère de Cornillon. Les religieuses lui offrent une solide éducation chrétienne. Julienne se distingue rapidement par son intelligence, son goût pour l'étude des Écritures et sa profonde vie spirituelle.

Une vision mystérieuse : Vers l'âge de seize ans, Julienne commence à recevoir des visions. Elle voit à plusieurs reprises une lune brillante traversée par une bande sombre. Après de nombreuses prières, elle croit recevoir une explication divine : la lune représente l'Église, tandis que la partie obscure symbolise l'absence d'une fête liturgique spécialement consacrée à l'Eucharistie.

Prieure du monastère de Cornillon : Grâce à sa sagesse et à sa piété, Julienne devient prieure du monastère de Cornillon. Elle mène une vie de prière, de pénitence et de service envers les paueurs et les malades. Convaincue de l'importance de sa mission, elle partage progressivement sa vision avec plusieurs personnalités influentes de l'Église. Son projet rencontre cependant des résistances.

Les persécutions et l'exil : Les oppositions deviennent si fortes que Julienne est contrainte de quitter plusieurs fois son monastère. Elle connaît l'exil, l'incompréhension et les humiliations. Malgré ces épreuves, elle reste fidèle à sa conviction. 

La naissance de la fête du Corpus Christi : L'un de ses plus importants soutiens est Robert de Thourotte, évêque de Liège. Sous son impulsion, une fête en l'honneur du Saint-Sacrement est célébrée pour la première fois dans le diocèse de Liège en 1246. Julienne ne verra cependant jamais son œuvre pleinement accomplie. Elle meurt le 5 avril 1258. Quelques années plus tard, l'un des anciens archidiacres de Liège, devenu le pape Urbain IV, se souvient de son projet. En 1264, il institue pour toute l'Église la fête du Corpus Christi (Fête-Dieu). Sainte Julienne is aujourd'hui reconnue comme l'inspiratrice principale de cette fête.`
    }
  ];

  return (
    <main className="max-w-5xl mx-auto px-6 py-16">
      
      {/* GRAND TITRE DE LA PAGE CENTRÉ */}
      <div className="text-center mb-16">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif font-bold tracking-wider text-black uppercase mb-4 text-center">
 Patronages
</h1>
        <h2 className="text-xl md:text-2xl font-serif italic text-gray-500 max-w-2xl mx-auto">
         Découvrez les vies inspirantes de ceux qui guident et protègent notre mission et cliquez sur les images pour découvrir leur histoire.
        </h2>
      </div>
      
      {/* LISTE DES FIGURES ÉPURÉE */}
      <div className="space-y-6">
        {figures.map((figure, index) => (
          <div 
            key={index} 
            className="border-b border-gray-100 pb-6 transition-all duration-300 ease-out hover:translate-x-1 cursor-pointer"
          >
            <button 
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full text-left focus:outline-none"
            >
              <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                {/* Le cadre blanc d'arrière-plan et l'ombre ont été retirés */}
                <img 
                  src={figure.image} 
                  alt={figure.nom} 
                  className="w-28 h-40 rounded-xl object-contain flex-shrink-0 transition duration-300" 
                />
                <div className="flex-1">
                  <span className="inline-block px-3 py-1 bg-gray-100 text-gray-800 text-xs font-semibold rounded-full mb-2">
                    {figure.categorie}
                  </span>
                  <h3 className="text-2xl font-bold text-black mb-1">{figure.nom}</h3>
                  <p className="text-base text-gray-600 italic">{figure.resume}</p>
                </div>
                <div className="hidden sm:block text-2xl text-gray-400 font-light ml-auto">
                  {openIndex === index ? '−' : '+'}
                </div>
              </div>
            </button>
            
            {openIndex === index && (
              <div className="mt-6 text-gray-700 leading-relaxed text-lg whitespace-pre-line animate-in fade-in slide-in-from-top-2 pl-0 sm:pl-34">
                {figure.histoire}
              </div>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}