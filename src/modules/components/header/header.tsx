import {useNavigate} from "react-router";

function Header() {
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
  const submitWelcome = () => {
    navigate('/welcome')
  }
  return (
    <div className="flex items-center">
      <div className="w-[25px] h-[25px] bg-[rgb(191,119,138)] rounded-full mr-5 ml-10 mt-5"></div>
      <div className="font-forum mt-5 ">
       <a href="#" onClick={submitWelcome}> Heutte
        <br />
        Nicolas</a>
      </div>
      <p className="font-avenir ml-28 mt-5 text-neutral-600">Developpeur Back-End NodeJS</p>
      <ul className="font-avenir flex ml-auto items-center mt-5 mr-10 text-neutral-600">
        <li className="border-r border-black pr-10 mr-5 ml-5">
          <a href="#" className=" hover:text-red-900" onClick={submitConsulting}>Consulting</a>
        </li>
        <li className="border-r border-black pr-10 mr-5 ml-5" >
          <a href="#" className="hover:text-red-900"  onClick={submitProject}>Project</a>
        </li>
        <li className="mr-2 ml-2">
          <a href="#" className="hover:text-red-900" onClick={submitContact}>Contact</a>
        </li>
      </ul>
    </div>
  );
}

export default Header;
