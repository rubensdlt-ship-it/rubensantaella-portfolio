import React from 'react';
import Image from 'next/image';
import Masonry from 'react-masonry-css';
import { useEffect } from "react";
import  Aos from 'aos';
import "aos/dist/aos.css";

function Gallery() {
    useEffect(() => {
    Aos.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
    }, []);
    /* lightbox1 */
    const [lighbx, setlighbx] = React.useState(false);
    const handleBtnClick = (): void => {
      setlighbx(!lighbx);
      document.getElementsByTagName("BODY")[0].classList.add("ohidden");
    };
    const handleBtnClickclose = (): void => {
      setlighbx(!lighbx);
      document.getElementsByTagName("BODY")[0].classList.remove("ohidden");
    };
    /* lightbox2 */
    const [lighbx1, setlighbx1] = React.useState(false);
    const handleBtnClick1 = (): void => {
      setlighbx1(!lighbx1);
      document.getElementsByTagName("BODY")[0].classList.add("ohidden");
    };
    const handleBtnClickclose1 = (): void => {
      setlighbx1(!lighbx1);
      document.getElementsByTagName("BODY")[0].classList.remove("ohidden");
    };
    /* lightbox3 */
    const [lighbx2, setlighbx2] = React.useState(false);
    const handleBtnClick2 = (): void => {
      setlighbx2(!lighbx2);
      document.getElementsByTagName("BODY")[0].classList.add("ohidden");
    };
    const handleBtnClickclose2 = (): void => {
      setlighbx2(!lighbx2);
      document.getElementsByTagName("BODY")[0].classList.remove("ohidden");
    };
    /* lightbox4 */
    const [lighbx3, setlighbx3] = React.useState(false);
    const handleBtnClick3 = (): void => {
      setlighbx3(!lighbx3);
      document.getElementsByTagName("BODY")[0].classList.add("ohidden");
    };
    const handleBtnClickclose3 = (): void => {
      setlighbx3(!lighbx3);
      document.getElementsByTagName("BODY")[0].classList.remove("ohidden");
    };
    /* lightbox5 */
    const [lighbx4, setlighbx4] = React.useState(false);
    const handleBtnClick4 = (): void => {
      setlighbx4(!lighbx4);
      document.getElementsByTagName("BODY")[0].classList.add("ohidden");
    };
    const handleBtnClickclose4 = (): void => {
      setlighbx4(!lighbx4);
      document.getElementsByTagName("BODY")[0].classList.remove("ohidden");
    };
    /* lightbox6 */
    const [lighbx5, setlighbx5] = React.useState(false);
    const handleBtnClick5 = (): void => {
      setlighbx5(!lighbx5);
      document.getElementsByTagName("BODY")[0].classList.add("ohidden");
    };
    const handleBtnClickclose5 = (): void => {
      setlighbx5(!lighbx5);
      document.getElementsByTagName("BODY")[0].classList.remove("ohidden");
    };
    const breakpointColumnsObj = {
      default: 3,
      900: 3,
      800: 2,
      500: 1
    };
    return(
            <div className="container px-0">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h2>Proyectos recientes</h2>
                        <div className="space-border"></div>
                    </div>
                </div>
                 <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column">
                    <div className="image-element-class de_modal de_modal" onClick={handleBtnClick}
                        data-aos="fade-up"
                        data-aos-once="true"
                        >
                        <div className="card-image-1">
                            <div className="d-text">
                                <h3>Universidad de Málaga</h3>
                                <h5 className="d-tag">Proyecto Big Data & IA</h5>
                            </div>
                            <Image width="100" height="100" src="./img/gallery/1.jpg" alt="gallery"/>
                        </div>
                    </div>
                    <div className="image-element-class de_modal" onClick={handleBtnClick1}
                        data-aos="fade-up"
                        data-aos-once="true"
                        >
                        <div className="card-image-1">
                            <div className="d-text">
                                <h3>IFMIF-DONES España</h3>
                                <h5 className="d-tag">Desarrollo de aplicaciones</h5>
                            </div>
                            <Image width="100" height="100" src="./img/gallery/2.jpg" alt="gallery"/>
                        </div>
                    </div>
                    <div className="image-element-class de_modal" onClick={handleBtnClick2}
                        data-aos="fade-up"
                        data-aos-once="true"
                        >
                        <div className="card-image-1">
                            <div className="d-text">
                                <h3>Planeta Explora</h3>
                                <h5 className="d-tag">Diseño web e integraciones IA</h5>
                            </div>
                            <Image width="100" height="100" src="./img/gallery/3.jpg" alt="gallery"/>
                        </div>
                    </div>
                    <div className="image-element-class de_modal" onClick={handleBtnClick3}
                        data-aos="fade-up"
                        data-aos-once="true"
                        >
                        <div className="card-image-1">
                            <div className="d-text">
                                <h3>Muebles Gavira</h3>
                                <h5 className="d-tag">Diseño web, integraciones IA, Redes y SEO Local</h5>
                            </div>
                            <Image width="100" height="100" src="./img/gallery/5.jpg" alt="gallery"/>
                        </div>
                    </div>
                    <div className="image-element-class de_modal" onClick={handleBtnClick4}
                        data-aos="fade-up"
                        data-aos-once="true"
                        >
                        <div className="card-image-1">
                            <div className="d-text">
                                <h3>Bobby Jump</h3>
                                <h5 className="d-tag">Diseño Web + SEO Avanzado</h5>
                            </div>
                            <Image width="100" height="100" src="./img/gallery/4.jpg" alt="gallery"/>
                        </div>
                    </div>
                    <div className="image-element-class de_modal" onClick={handleBtnClick5}
                        data-aos="fade-up"
                        data-aos-once="true"
                        >
                        <div className="card-image-1">
                            <div className="d-text">
                                <h3>MicroEstética</h3>
                                <h5 className="d-tag">Diseño Web + SEO Avanzado</h5>
                            </div>
                            <Image width="100" height="100" src="./img/gallery/6.jpg" alt="gallery"/>
                        </div>
                    </div>
                  </Masonry>

                  {/* lightbox1 */}
                  {lighbx && (
                  <div className="LightboxGal">
                    <div className="closeGal">
                        <button className="button-close" onClick={handleBtnClickclose}></button>
                    </div>
                    <div className="v-center w-100">
                      <div className="mainLightbox container">
                        <div className="row g-5">
                            <div className="col-lg-8">
                                <Image width="100" height="100" src="./img/gallery/1.jpg" alt="popup" className="img-fluid"/>
                            </div>

                            <div className="col-lg-4 de_project-info">
                                <h3>Máster Big Data e IA de la UMA</h3>
                                <p>
                                Más de 8 años trabajando en la promoción del Máster de Big Data e Inteligencia Artificial de la UMA.
                                En este tiempo hemos conseguido aumentar la visibilidad y autoridad de este máster, hasta conseguir posicionarlo entre los másteres más relevantes de España.
                                </p>

                                <div className="de_project-details">
                                    <div className="d-field">
                                        <i className="fa fa-user-o"></i>Client: <span>Universidad de Málaga</span>
                                    </div>
                                    <div className="d-field">
                                        <i className="fa fa-file-text-o"></i>Proyecto: <span>Visilidad de marca</span>
                                    </div>
                                    <div className="d-field">
                                        <i className="fa fa-calendar-o"></i>Inicio: <span>2018</span>
                                    </div>
                                    <div className="d-field">
                                        <i className="fa fa-external-link"></i>Web Oficial: <span><a href="https://www.bigdata.uma.es/" target="_blank" rel="noreferrer">bigdata.uma.es</a></span>
                                    </div>
                                </div>
                                <div className="spacer-30"></div>
                                <blockquote>
                                    Máster de formación permanente de la Universidad de Málaga organizado por el Grupo de Investigación Khaos con la colaboración de empresas con amplia experiencia en el ámbito del análisis de datos en aplicaciones Big Data.
                                    <span>Universidad de Málaga</span>
                                </blockquote>
                            </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  )}

                  {/* lightbox2 */}
                  {lighbx1 && (
                  <div className="LightboxGal">
                    <div className="closeGal">
                        <button className="button-close" onClick={handleBtnClickclose1}></button>
                    </div>
                    <div className="v-center w-100">
                      <div className="mainLightbox container">
                        <div className="row g-5">
                            <div className="col-lg-8">
                                <Image width="100" height="100" src="./img/gallery/2.jpg" alt="popup" className="img-fluid"/>
                            </div>

                            <div className="col-lg-4 de_project-info">
                                <h3>IFMIF-DONES España</h3>
                                <p>
                                Desarrollo de aplicaciones a medida para IFMIF-DONES España, infraestructura científica internacional para la investigación en fusión nuclear ubicada en Granada. Trabajo enfocado en herramientas internas y soluciones de comunicación digital del proyecto.
                                </p>

                                <div className="de_project-details">
                                    <div className="d-field">
                                        <i className="fa fa-user-o"></i>Cliente: <span>IFMIF-DONES España</span>
                                    </div>
                                    <div className="d-field">
                                        <i className="fa fa-file-text-o"></i>Proyecto: <span>Desarrollo de aplicaciones</span>
                                    </div>
                                    <div className="d-field">
                                        <i className="fa fa-calendar-o"></i>Inicio: <span>2020</span>
                                    </div>
                                    <div className="d-field">
                                        <i className="fa fa-external-link"></i>Web Oficial: <span><a href="#" target="_blank" rel="noreferrer">ifmifdones.es</a></span>
                                    </div>
                                </div>
                                <div className="spacer-30"></div>
                                <blockquote>
                                    Infraestructura europea de investigación para la caracterización de materiales bajo condiciones extremas de irradiación neutrónica.
                                    <span>IFMIF-DONES</span>
                                </blockquote>
                            </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  )}

                  {/* lightbox3 */}
                  {lighbx2 && (
                  <div className="LightboxGal">
                    <div className="closeGal">
                        <button className="button-close" onClick={handleBtnClickclose2}></button>
                    </div>
                    <div className="v-center w-100">
                      <div className="mainLightbox container">
                        <div className="row g-5">
                            <div className="col-lg-8">
                                <Image width="100" height="100" src="./img/gallery/3.jpg" alt="popup" className="img-fluid"/>
                            </div>

                            <div className="col-lg-4 de_project-info">
                                <h3>Planeta Explora</h3>
                                <p>
                                Diseño web orientado a SEO e integraciones de IA para Planeta Explora. Arquitectura pensada para escalar en contenidos y captar tráfico cualificado, con automatizaciones que aceleran la publicación y la atención al usuario.
                                </p>

                                <div className="de_project-details">
                                    <div className="d-field">
                                        <i className="fa fa-user-o"></i>Cliente: <span>Planeta Explora</span>
                                    </div>
                                    <div className="d-field">
                                        <i className="fa fa-file-text-o"></i>Proyecto: <span>Diseño web e integraciones IA</span>
                                    </div>
                                    <div className="d-field">
                                        <i className="fa fa-calendar-o"></i>Inicio: <span>2021</span>
                                    </div>
                                    <div className="d-field">
                                        <i className="fa fa-external-link"></i>Web Oficial: <span><a href="#" target="_blank" rel="noreferrer">planetaexplora.com</a></span>
                                    </div>
                                </div>
                                <div className="spacer-30"></div>
                                <blockquote>
                                    Web rápida, escalable y preparada para integrarse con flujos de IA desde el primer día.
                                    <span>Rubén Santaella</span>
                                </blockquote>
                            </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  )}

                  {/* lightbox4 */}
                  {lighbx3 && (
                  <div className="LightboxGal">
                    <div className="closeGal">
                        <button className="button-close" onClick={handleBtnClickclose3}></button>
                    </div>
                    <div className="v-center w-100">
                      <div className="mainLightbox container">
                        <div className="row g-5">
                            <div className="col-lg-8">
                                <Image width="100" height="100" src="./img/gallery/5.jpg" alt="popup" className="img-fluid"/>
                            </div>

                            <div className="col-lg-4 de_project-info">
                                <h3>Muebles Gavira</h3>
                                <p>
                                Proyecto integral para Muebles Gavira: diseño web, integraciones de IA, gestión de redes sociales y posicionamiento SEO Local. El objetivo: convertir la web en su principal canal de captación de clientes en su área de influencia.
                                </p>

                                <div className="de_project-details">
                                    <div className="d-field">
                                        <i className="fa fa-user-o"></i>Cliente: <span>Muebles Gavira</span>
                                    </div>
                                    <div className="d-field">
                                        <i className="fa fa-file-text-o"></i>Proyecto: <span>Web, IA, Redes y SEO Local</span>
                                    </div>
                                    <div className="d-field">
                                        <i className="fa fa-calendar-o"></i>Inicio: <span>2021</span>
                                    </div>
                                    <div className="d-field">
                                        <i className="fa fa-external-link"></i>Web Oficial: <span><a href="#" target="_blank" rel="noreferrer">mueblesgavira.com</a></span>
                                    </div>
                                </div>
                                <div className="spacer-30"></div>
                                <blockquote>
                                    SEO Local bien hecho convierte la web en el mejor comercial 24/7 de un negocio físico.
                                    <span>Rubén Santaella</span>
                                </blockquote>
                            </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  )}

                  {/* lightbox5 */}
                  {lighbx4 && (
                  <div className="LightboxGal">
                    <div className="closeGal">
                        <button className="button-close" onClick={handleBtnClickclose4}></button>
                    </div>
                    <div className="v-center w-100">
                      <div className="mainLightbox container">
                        <div className="row g-5">
                            <div className="col-lg-8">
                                <Image width="100" height="100" src="./img/gallery/4.jpg" alt="popup" className="img-fluid"/>
                            </div>

                            <div className="col-lg-4 de_project-info">
                                <h3>Bobby Jump</h3>
                                <p>
                                Diseño web a medida y estrategia de SEO Avanzado para Bobby Jump. Trabajo de arquitectura de información, optimización técnica y contenidos enfocados a posicionar términos de alta competencia.
                                </p>

                                <div className="de_project-details">
                                    <div className="d-field">
                                        <i className="fa fa-user-o"></i>Cliente: <span>Bobby Jump</span>
                                    </div>
                                    <div className="d-field">
                                        <i className="fa fa-file-text-o"></i>Proyecto: <span>Diseño Web + SEO Avanzado</span>
                                    </div>
                                    <div className="d-field">
                                        <i className="fa fa-calendar-o"></i>Inicio: <span>2020</span>
                                    </div>
                                    <div className="d-field">
                                        <i className="fa fa-external-link"></i>Web Oficial: <span><a href="#" target="_blank" rel="noreferrer">bobbyjump.com</a></span>
                                    </div>
                                </div>
                                <div className="spacer-30"></div>
                                <blockquote>
                                    Posicionar palabras competidas requiere estrategia técnica, contenido y paciencia. Y los tres a la vez.
                                    <span>Rubén Santaella</span>
                                </blockquote>
                            </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  )}

                  {/* lightbox6 */}
                  {lighbx5 && (
                  <div className="LightboxGal">
                    <div className="closeGal">
                        <button className="button-close" onClick={handleBtnClickclose5}></button>
                    </div>
                    <div className="v-center w-100">
                      <div className="mainLightbox container">
                        <div className="row g-5">
                            <div className="col-lg-8">
                                <Image width="100" height="100" src="./img/gallery/6.jpg" alt="popup" className="img-fluid"/>
                            </div>

                            <div className="col-lg-4 de_project-info">
                                <h3>MicroEstética</h3>
                                <p>
                                Diseño web y SEO Avanzado para MicroEstética. Estructura optimizada para captar pacientes de tratamientos específicos, con páginas de servicio orientadas a conversión y SEO Local en cada centro.
                                </p>

                                <div className="de_project-details">
                                    <div className="d-field">
                                        <i className="fa fa-user-o"></i>Cliente: <span>MicroEstética</span>
                                    </div>
                                    <div className="d-field">
                                        <i className="fa fa-file-text-o"></i>Proyecto: <span>Diseño Web + SEO Avanzado</span>
                                    </div>
                                    <div className="d-field">
                                        <i className="fa fa-calendar-o"></i>Inicio: <span>2021</span>
                                    </div>
                                    <div className="d-field">
                                        <i className="fa fa-external-link"></i>Web Oficial: <span><a href="#" target="_blank" rel="noreferrer">microestetica.com</a></span>
                                    </div>
                                </div>
                                <div className="spacer-30"></div>
                                <blockquote>
                                    En el sector salud y estética, el SEO bien planteado es el canal con mejor coste por cliente a medio plazo.
                                    <span>Rubén Santaella</span>
                                </blockquote>
                            </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  )}

      </div>
    );
}

export default Gallery;
