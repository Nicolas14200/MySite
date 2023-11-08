export const Footer = () => {
  return (
    <div className="border-t border-[rgb(199,199,199)] ml-[50px] mr-[50px] flex row justify-between pt-5 pb-5">
      <div>
        <h1>Téléphone :</h1>
        <p>07 77 68 53 27</p>
      </div>
      <div>
        <h1>E-mail :</h1>
        <p>heutte.nicolas@laposte.net</p>
      </div>
      <div>
        <h1>Suivez-moi :</h1>
        <a href="#"><div className="bg-iconLinkedin bg-no-repeat w-[20px] h-[20px]"></div></a>
      </div>
      <p>Politique de confidentialité Mentions légales Politique de cookies</p>
      <p>© 2023 par Heutte Nicolas.</p>
    </div>
  );
};
