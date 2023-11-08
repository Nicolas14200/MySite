import { Footer } from "../components/footer/footer";
import Header from "../components/header/header";

export const Consulting = () => {
  return (
    <>
      <Header />
      <div className="flex justify-around">
        <h1 className="animate-fadeIn text-6xl font-josefin drop-shadow-[6px_6px_var(--tw-shadow-color)] shadow-gray-600 m-auto">
          Back-End
        </h1>
        <div className=" bg-white w-[600px] h-[400px] animate-fadeIn flex justify-center items-center mt-20 mb-20 pt-24 mr-20">
          <p className="w-[300px] h-[300px] text-center m-auto font-avenir">
            Fort de mon expérience je développe le back-end de vos application
            en appliquant les principes fondamentaux de programmation tel que la
            clean architecture et les principes SOLID, ce qui permet d'avoir des
            applicaition extrêmement modulable et opimisé.
          </p>
        </div>
      </div>
      <div className="flex justify-around animate-fadeIn bg-white">
        <p className="w-[600px] h-[300px] text-center m-auto pt-10 font-avenir">
          Explorez le monde captivant du développement web front-end avec mon
          site, conçu entièrement avec les technologies les plus modernes. J'ai
          developpé ce site avec React, un framework JavaScript puissant, pour
          créer une expérience utilisateur dynamique et réactive. De plus, j'ai
          utilisé Tailwind CSS pour garantir un design élégant et optimisé.
          Découvrez comment ces deux technologies de pointe se combinent pour
          offrir des interfaces utilisateur fluides, des performances
          exceptionnelles et une esthétique impeccable. Bienvenue dans l'univers
          du développement front-end de nouvelle génération !
        </p>
        <h1 className="animate-fadeIn text-6xl font-josefin drop-shadow-[6px_6px_var(--tw-shadow-color)] shadow-gray-600 m-auto">
          Front-End
        </h1>
        
     
      </div>
      <div className="flex justify-around animate-fadeIn">
        <div className="bg-white flex justify-center m-auto p-10">
        <h1 className="text-6xl font-josefin drop-shadow-[6px_6px_var(--tw-shadow-color)] shadow-gray-600 m-auto ">
        
          Technologie
        </h1>
        </div>
        <p className="w-[600px] h-[300px] text-center m-auto pt-10 font-avenir">
          Développeur sur les technologies :<br /> Bash, Javascript, typescript,
          <br />
          MongoDb Compétence développé : <br />
          Clean architecture, SOLID, POO
          <br />
          Organisation de travail :<br /> Agile, Git
        </p>
      </div>
      
      <div className="flex justify-around animate-fadeIn">
        <p className="w-[600px] h-[300px] text-center m-auto pt-10 font-avenir">
          Je suis un développeur back-end expérimenté passionné par la création
          de solutions innovantes. Avec plus de deux ans d'expérience concrète,
          j'apporte un ensemble de compétences solides à la table et a déjà
          démontré un impressionnant parcours de réussite. Mon plus récent
          projet de développement d'application consiste en un cahier de culture
          numérique destiné aux agriculteurs biologiques. Cette application
          permet aux agriculteurs d'enregistrer minutieusement tous les
          événements liés à leur culture, assurant ainsi un suivi optimal de la
          rotation des terres et des apports en engrais. Ne vous fiez pas
          seulement à ma parole - prenez contact avec moi dès aujourd'hui pour
          voir comment je peu vous aider à faire passer votre projet au niveau
          supérieur !
        </p>
        <h1 className="text-6xl font-josefin drop-shadow-[6px_6px_var(--tw-shadow-color)] shadow-gray-600 m-auto">
          Backrournd
        </h1>
       </div>
      <Footer />
    </>
  );
};
