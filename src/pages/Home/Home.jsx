import "./Home.css";
import { useEffect, useRef } from "react";
import { useState } from "react";

import { Layout } from "../../components/Layout/Layout";

import aboutUsImage from "../../assets/uña.webp";
import aboutUsImage2 from "../../assets/estructura.png"
import galleryPhoto1 from "../../assets/foto1.webp";
import galleryPhoto2 from "../../assets/foto2.webp";
import galleryPhoto3 from "../../assets/foto3.webp";
import galleryPhoto4 from "../../assets/foto4.webp";
import galleryPhoto5 from "../../assets/foto5.webp";
import galleryPhoto6 from "../../assets/foto6.webp";


const Home = () => {
  // LOGICA GALERIA
  const carouselRef = useRef(null);
  let isAnimating = false;

  const slideWidth = 240;
  const nextSlide = () => {
    if (isAnimating) return;
    isAnimating = true;

    const track = carouselRef.current;
    track.style.transition = "transform 0.5s ease";
    track.style.transform = `translateX(-${slideWidth}px)`;

    setTimeout(() => {
      track.style.transition = "none";
      track.appendChild(track.firstElementChild);
      track.style.transform = "translateX(0)";
      isAnimating = false;
    }, 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    isAnimating = true;

    const track = carouselRef.current;
    track.style.transition = "none";
    track.prepend(track.lastElementChild);
    track.style.transform = `translateX(-${slideWidth}px)`;

    requestAnimationFrame(() => {
      track.style.transition = "transform 0.5s ease";
      track.style.transform = "translateX(0)";
    });

    setTimeout(() => {
      isAnimating = false;
    }, 500);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  //  LOGICA DEL ACORDEON SERVICIOS 
  const [open, setOpen] = useState(null);

  const toggle = (index) => {
    setOpen(open === index ? null : index);
  };

  return (
    <Layout>
      {/* HEADER */}
      <section className="salon-header-container">
        <div className="header-content">
          <div className="tiny-logo">MN</div>
          <h1 className="main-title">Martina Nails</h1>
          <p className="description-text">
            ¡Hola! Soy Martina, manicurista profesional con <strong>5 años de experencia</strong>, busco llevar color, cuidado y estilo a cada persona.
          </p>
          <a href="https://wa.me/5492614663643" target="_blank">
            <button className="book-now-button">
              Agendar cita
            </button>
          </a>
        </div>
        <div className="hand-overlay"></div>
      </section>

      {/* Sección de Galería */}
      <section className="gallery-section">
        <h2 className="gallery-title">Trabajos Realizados </h2>

        <div className="carousel">
          <button className="arrow left" onClick={prevSlide}>‹</button>

          <div className="carousel-window">
            <div className="carousel-track" ref={carouselRef}>
              <img src={galleryPhoto1} alt="" />
              <img src={galleryPhoto2} alt="" />
              <img src={galleryPhoto3} alt="" />
              <img src={galleryPhoto4} alt="" />
              <img src={galleryPhoto5} alt="" />
              <img src={galleryPhoto6} alt="" />
            </div>
          </div>

          <button className="arrow right" onClick={nextSlide}>›</button>
        </div>
      </section>

      {/* Sección de Servicios */}
      <div className="services-section">
        <h2 className="services-title">Servicios</h2>

        <div className="services-accordion">

          <div className={`service-item ${open === 0 ? "active" : ""}`}>
            <button className="service-button" onClick={() => toggle(0)}>
              Semipermanente
            </button>
            <div className="service-content">
              <p>
                Esmaltado de larga duración que se aplica sobre la uña natural. Mantiene brillo y color por aproximadamente 2 a 3 semanas, sin descascararse.
              </p>
            </div>
          </div>

          <div className={`service-item ${open === 1 ? "active" : ""}`}>
            <button className="service-button" onClick={() => toggle(1)}>
              Soft Gel
            </button>
            <div className="service-content">
              <p>
                Sistema de extensión de gel flexible, son livianas, cómodas y brindan un acabado natural y elegante
              </p>
            </div>
          </div>

          <div className={`service-item ${open === 2 ? "active" : ""}`}>
            <button className="service-button" onClick={() => toggle(2)}>
              Capping
            </button>
            <div className="service-content">
              <p>
                Técnica de refuerzo de la uña natural. No alarga la uña, solo la protege y la hace más resistente, es fuerte, liviano y muy versátil.
              </p>
            </div>
          </div>

          <div className={`service-item ${open === 3 ? "active" : ""}`}>
            <button className="service-button" onClick={() => toggle(3)}>
              Service / Mantenimiento
            </button>
            <div className="service-content">
              <p>
                Mantenimiento del sistema aplicado previamente. Se rellena el crecimiento, se corrigen imperfecciones y se renueva el diseño para prolongar su duración.
              </p>
            </div>
          </div>

          {/* <div className={`service-item ${open === 4 ? "active" : ""}`}>
            <button className="service-button" onClick={() => toggle(4)}>
              Manicura y Pedicura
            </button>
            <div className="service-content">
              <p>
                Cuidado completo de manos y pies con técnicas profesionales.
              </p>
            </div> */}
        </div>

      </div>



      {/* (ABOUT US) */}
      <section className="about-us-container">
        <div className="about-us-image-wrapper">
          <img src={aboutUsImage} alt="Manicurista profesional trabajando en las uñas de una clienta" className="about-us-img" />
        </div>
        <div className="about-us-text-wrapper">
          <h2 className="about-us-title">Bienvenida</h2>
          <p className="about-us-paragraph">
            Martina Nails, nace de la idea de transformar el diseño de uñas en una experiencia creativa y cercana, mezclando técnica, arte y dedicación. Ya sea que busques una manicura simple y elegante o diseños artísticos.
          </p>
          <p className="about-us-paragraph2">
            ¡Gracias por tu apoyo!
          </p>
        </div>
        <div className="about-us-image2">
          <img src={aboutUsImage2} alt="Manicurista profesional trabajando en las uñas de una clienta" className="about-us-img" />
        </div>
      </section>


    </Layout >
  );
};

export { Home };