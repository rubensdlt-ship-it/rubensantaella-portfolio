import React from 'react';
import { useEffect } from "react"
import Aos from 'aos';
import "aos/dist/aos.css";


function Whatido() {
  useEffect(() => {
    Aos.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center"
                    data-aos="fade-up"
                    data-aos-delay="0"
                    data-aos-duration="1000"
                    data-aos-easing="ease"
                    data-aos-once="true"
                    >
                    <h2>Servicios Premium</h2>
                    <div className="space-border"></div>
                </div>
            </div>
            <div className="spacer-single"></div>
            <div className="row">
                <div className="col-lg-4"
                    data-aos="fade"
                    data-aos-delay="300"
                    data-aos-duration="1000"
                    data-aos-easing="ease"
                    data-aos-once="true"
                    >
                    <div className="de_3d-box">
                        <div className="d-inner">
                            <i className="icon_tools id-color-2"></i>
                            <div className="text">
                                <h3>Diseño Web para SEO e IA</h3>
                                Tu web es el activo principal de tu empresa. Webs rápidas, optimizadas para Google e IA, con arquitectura técnica preparada para el Crawl Budget y la conversión.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4" 
                    data-aos="fade"
                    data-aos-delay="400"
                    data-aos-duration="1000"
                    data-aos-easing="ease"
                    data-aos-once="true"
                    >
                    <div className="de_3d-box">
                        <div className="d-inner">
                            <i className="icon_genius id-color-2"></i>
                            <div className="text">
                                <h3>Posicionamiento Web en Málaga</h3>
                                SEO local para pymes y autónomos en Málaga, SEO para tiendas online y posicionamiento en la IA. Auditorías técnicas, estrategia de contenidos y Google Maps.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4"
                    data-aos="fade"
                    data-aos-delay="500"
                    data-aos-duration="1000"
                    data-aos-easing="ease"
                    data-aos-once="true"
                    >
                    <div className="de_3d-box">
                        <div className="d-inner">
                            <i className="icon_camera_alt id-color-2"></i>
                            <div className="text">
                                <h3>Integraciones IA, UX & CRO</h3>
                                Chatbots, agentes de voz, calculadoras interactivas y automatización de procesos. Si tiene sentido para tu negocio en Málaga, lo construimos. Mejora de la usabilidad de tu web y optimización de las conversiones.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Whatido;