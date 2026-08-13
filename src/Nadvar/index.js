import { BsSunFill, BsMoonStarsFill } from "react-icons/bs";
import './Nadvar.css';

function Nadvar({ theme, toggleTheme }) {

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#root">
          <img src="https://scontent.fpbc2-6.fna.fbcdn.net/v/t39.30808-1/548457985_648398208324643_6500843107420245253_n.jpg?stp=dst-jpg_tt6&cstp=mx979x979&ctp=s200x200&_nc_cat=108&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeGIBMXPtQrVEjxqcxjTYfWU7JwhcV7NRkPsnCFxXs1GQ-SaaON11Pr7FXjtRvpl2Ro4Cl-tnvKMmaNX85cxvu5u&_nc_ohc=gcujbIUpvPIQ7kNvwFS0T_9&_nc_oc=AdrepFcDjpVilsX7PhJgCpB4ft5QDG0ZRf3Uv7if0XjiRUNgDqgeVcCXFYEqIxQQ1WPWp7tc6Bj8fz9lzR8gh6Ee&_nc_zt=24&_nc_ht=scontent.fpbc2-6.fna&_nc_gid=RXeJaVpmR-4xYpZZf82Iyg&_nc_ss=7b2a8&oh=00_AQD-3OPRSHC9xrBWutHDFQnmtwbkcAGKhtQto1vRIwUaBQ&oe=6A6A0999" alt="Misael" width="40" height="40" className="rounded-custom"/>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button> 
        
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <a className="navbar-brand link" href="https://github.com/Misael-GC" target="_blank" rel="noreferrer">GitHub</a>
          
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link link" href="https://misael-gomez-cuautle.netlify.app/" target="_blank" rel="noreferrer">My Web</a>
            </li>
            <li className="nav-item">
              <a className="nav-link link" href="https://www.linkedin.com/in/misael-g%C3%B3mez-cuautle-5976491b9/" target="_blank" rel="noreferrer">LinkedIn</a>
            </li>
            <li className="nav-item">
              <a className="nav-link link" href="https://twitter.com/MisaelG51069440" target="_blank" rel="noreferrer">Twitter</a>
            </li>
            <li className="nav-item">
              <a className="nav-link link" href="https://misael-gc.github.io/introduccion-react/" target="_blank" rel="noreferrer">Anterior versión</a>
            </li>
          </ul>

          <div className="d-flex align-items-center mt-3 mt-lg-0">
            <button 
              className="theme-toggle-btn btn border-0 d-flex align-items-center justify-content-center" 
              onClick={toggleTheme}
              aria-label="Alternar tema"
              title={theme === 'dark' ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
            >
              {theme === 'dark' ? (
                <BsSunFill className="theme-toggle-icon sun" />
              ) : (
                <BsMoonStarsFill className="theme-toggle-icon moon" />
              )}
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
}

export { Nadvar };