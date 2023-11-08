import { Footer } from "../components/footer/footer";
import Header from "../components/header/header";
import {useNavigate} from "react-router";

export const Welcome = () => {

  const navigate = useNavigate();

  const submitConsulting = () => {
    navigate('/consulting')
  }
  const submitProject = () => {
    navigate('/project')
  }
  const submitContact = () => {
    navigate('/contact')
  }
  return (
    <>
    <Header />
      <div className="flex justify-center animate-fadeIn">
        <div className="bg-photoProfil bg-no-repeat w-[358px] h-[358px] rounded-[200px] mt-[10vh] mr-[20vh]"></div>
        <h1 className="mt-20 text-9xl font-josefin drop-shadow-[6px_6px_var(--tw-shadow-color)] shadow-gray-600">
          <p className="">Heutte</p>
          <br />
          Nicolas
        </h1>
      </div>
      <div className="flex justify-center mt-20 animate-fadeIn">
        <div className="flex justify-center mr-40">
          <a href="#" className="w-[150px] h-[150px] bg-[rgb(191,119,138)] rounded-full flex items-center justify-center border border-black transition duration-1000 hover:bg-white  ml-5" onClick={submitConsulting}>
            <p>Consulting</p>
          </a>

          <a href="#" className="w-[150px] h-[150px] bg-[rgb(248,209,194)] rounded-full flex items-center justify-center border border-black transition duration-1000 hover:bg-white  ml-5" onClick={submitProject}>
            <p>Project</p>
          </a>

          <a href="#" className="w-[150px] h-[150px] bg-[rgb(170,165,91)] rounded-full flex items-center justify-center border border-black transition duration-1000 hover:bg-white  ml-5" onClick={submitContact}>
            <p>Contact</p>
          </a>
        </div>
        <div className="flex flex-col font-avenir ml-20">
          <h1 className="text-center " >À propos de moi :</h1>
          <p className="w-[400px] h-[400px] my-6 text-center leading-8 ">
          <br />
            J'ai réalisé mon rêve d'enfance de devenir programmeur et j'ai
            progressé depuis.<br /> Travailler pour apporter les meilleures solutions
            back-end et planifier des projets incroyables avec des technologies
            de pointe.<br />
            Coder avec passion. Donner vie à des idées grâce à une
            expertise en développement back-end, JavaScript et TypeScript. Dédié
            à l'application de principes de programmation SOLID et de la clean
            architecture pour des résultats optimum.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};
