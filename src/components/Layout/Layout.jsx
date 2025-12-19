import "./Layout.css";
import logo from "../../assets/logo.webp";
import { NavLink } from "react-router-dom";

const Layout = (props) => {
  return (
    <>
      <header>
        <img src={logo} alt="imagen de logo" />
        <nav>
          <ul>
            <li>
              <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                Inicio
              </NavLink>
            </li>
            <div className="footer-icons">
              <a
                href="https://wa.me/5492614663643"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
              >
                <i className="bx bxl-whatsapp"></i>
              </a>
            </div>
            {/* <li>
              <NavLink to="/trabajos" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                Trabajos
              </NavLink>
            </li>
            <li>
              <a
                href="https://drive.google.com/file/d/1Ys3peZmDVJD2QuG7n_T0QipQZ0Ps3leY/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="nav-link"
              >
                Trabajos
              </a>
            </li> */}
          </ul>
        </nav>
      </header>

      <main>
        {props.children}
      </main>
      <footer className="footer">
        <div className="footer-content">

          {/* Logo izquierda */}
          <div className="footer-logo">
            <img src={logo} alt="imagen de logo"></img>
          </div>

          {/* Email centro */}
          <p className="footer-email">
            martinayulianarossignoli@gmail.com
          </p>

          {/* WhatsApp derecha */}
          <div className="footer-icons">
            <a
              href="https://wa.me/5492614663643"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
            >
              <i className="bx bxl-whatsapp"></i>
            </a>
          </div>

        </div>
      </footer>

    </>
  );
};

export { Layout };
