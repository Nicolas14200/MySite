import { Footer } from "../components/footer/footer";
import Header from "../components/header/header";

export const Project = () => {
  return (
    <>
      <Header />
      <div className="flex justify-around animate-fadeIn">
        <div>
          <h1 className="text-center mt-20 text-6xl font-josefin drop-shadow-[6px_6px_var(--tw-shadow-color)] shadow-gray-600">
            VTC_Project
          </h1>
          <p className="w-[500px] h-[500px] mt-10 text-center m-auto font-avenir">
            Une application de VTC spécialement conçue pour le marché lituanien
            offre une solution de transport moderne et pratique pour les
            habitants et les visiteurs de la Lituanie. Cette application
            intuitive permet aux utilisateurs de réserver des véhicules avec
            chauffeur en quelques clics, offrant ainsi une alternative fiable
            aux taxis traditionnels. Grâce à cette application, les passagers
            peuvent estimer le coût de leur trajet, suivre en temps réel
            l'arrivée de leur chauffeur, et payer de manière électronique, ce
            qui rend le processus de déplacement plus transparent et efficace.
            De plus, cette application peut également proposer des options de
            véhicules, allant des voitures économiques aux véhicules de luxe,
            pour s'adapter aux préférences de chaque utilisateur. En combinant
            la commodité des réservations en ligne avec une expérience de
            conduite de qualité, cette application de VTC répond aux besoins
            spécifiques du marché lituanien en matière de transport urbain.
          </p>
        </div>
        <div className="bg-photoDriver bg-no-repeat w-[535px] h-[361px] mt-40"></div>
      </div>
      <div className="flex justify-around animate-fadeIn">
        <div>
          <h1 className="text-center mt-20 text-6xl font-josefin drop-shadow-[6px_6px_var(--tw-shadow-color)] shadow-gray-600">
            {" "}
            Digital culture manager
          </h1>
          <p className="w-[500px] h-[500px] mt-10 text-center m-auto font-avenir">
            L'application de cahier de culture numérique dédiée aux agriculteurs
            biologiques et à l'agrotechnologie est une ressource inestimable
            pour ces professionnels. Elle permet aux agriculteurs biologiques de
            suivre et de documenter de manière détaillée leurs pratiques de
            culture respectueuses de l'environnement, en enregistrant les
            données de chaque étape du processus agricole. Ils peuvent consigner
            les types de cultures, les méthodes de fertilisation organique, les
            traitements naturels des parasites, les cycles de récolte, et bien
            plus encore. De plus, cette application peut intégrer des outils
            d'agrotechnologie pour surveiller les conditions météorologiques, la
            qualité du sol et la santé des cultures, ce qui permet aux
            agriculteurs d'optimiser leur rendement de manière durable. Elle
            facilite également la traçabilité des produits, répondant ainsi aux
            exigences croissantes de transparence dans l'agriculture biologique.
            En combinant le respect de l'environnement et l'efficacité agricole,
            cette application contribue à la promotion de pratiques agricoles
            biologiques et technologiquement avancées.
          </p>
        </div>
        <div className="bg-photoAgri bg-no-repeat w-[535px] h-[361px] mt-40"></div>
      </div>
      <div className="flex justify-around animate-fadeIn">
        <div>
          <h1 className="text-center mt-20 text-6xl font-josefin drop-shadow-[6px_6px_var(--tw-shadow-color)] shadow-gray-600">
            {" "}
            Car7 valet
          </h1>
          <p className="w-[500px] h-[500px] mt-10 text-center m-auto font-avenir">
            L'application de location de chauffeur pour voitures de location a
            pour objectif principal d'optimiser la logistique du secteur de la
            location automobile en organisant efficacement les déplacements des
            chauffeurs vers les véhicules éloignés de leur base. En
            collaboration avec des sous-traitants, l'application permet de gérer
            de manière coordonnée et transparente les déplacements des
            chauffeurs vers les emplacements éloignés des voitures de location.
            Les sous-traitants peuvent facilement attribuer des missions aux
            chauffeurs disponibles, réduisant ainsi les temps d'attente pour les
            clients et améliorant l'efficacité de l'entreprise de location. Les
            chauffeurs, de leur côté, bénéficient d'une application conviviale
            pour suivre leurs affectations et les itinéraires recommandés. Cela
            se traduit par une gestion plus fluide des véhicules de location,
            garantissant une disponibilité accrue et une satisfaction client
            optimale. L'application contribue ainsi à rationaliser les
            opérations de location de voitures, offrant un service de qualité
            tout en économisant du temps et des ressources.
          </p>
        </div>
        <div className="bg-photoIntrieurVoiture bg-no-repeat w-[535px] h-[361px] mt-40"></div>
      </div>
      <Footer />
    </>
  );
};
