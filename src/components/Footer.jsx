import logo from "../img/logo.png";

function Footer() {
  return (
    <footer className="footer">
      
      <p><strong>Integrante:</strong> Cristian Javier Padilla Cornejo</p>
      <p><strong>Profesor:</strong> Zeus Emanuel Gutierrez Cobian</p>
      <p><strong>Materia:</strong> Desarrollo de Aplicaciones Web en la Nube y Móviles</p>
      <p><strong>Calendario:</strong> 2026A</p>
      <p><strong>Fecha:</strong> Abril 2026</p>
      <p><strong>Institución:</strong> CUCEI - Universidad de Guadalajara</p>
      <img src={logo} alt="CUCEI" className="footer-img" />
    </footer>
  );
}

export default Footer;