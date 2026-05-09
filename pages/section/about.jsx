import React from 'react';
import {
  CircularProgressbar,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";


import { useEffect } from "react"
import Aos from 'aos';
import "aos/dist/aos.css";


function About() {
  useEffect(() => {
    Aos.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);

	return(
		<div className="v-center">
		<div className="container">
			<div className="row">
				<div className="col-md-12 text-center">
	                <h2 data-aos="fade-up"
                        data-aos-delay="0"
                        data-aos-duration="1000"
                        data-aos-easing="ease"
                        data-aos-once="true">Sobre mí</h2>
	                <div className="space-border"
	                	data-aos="fade-up"
                        data-aos-delay="20"
                        data-aos-duration="1000"
                        data-aos-easing="ease"
                        data-aos-once="true"
	                	></div>
	                <a href="https://www.rubensantaella.es" target="_blank" rel="noreferrer" className="btn-metallic-blue"
	                	data-aos="fade-up"
	                	data-aos-delay="40"
	                	data-aos-duration="1000"
	                	data-aos-easing="ease"
	                	data-aos-once="true">
	                	Web Oficial
	                </a>
	                <div className="spacer-30"></div>
	            </div>
	            <div className="col-md-8 text-center m-auto"
	            	data-aos="fade-up"
                    data-aos-delay="60"
                    data-aos-duration="1000"
                    data-aos-easing="ease"
                    data-aos-once="true"
	            	>
                  <p> &nbsp; </p>
	            	<p>Soy experto en SEO con más de 15 años de experiencia. 
                  Estoy especializado en SEO para páginas web, SEO Local para Google Business Profile y GEO, o SEO optimizado para IA. 
                  Trabajo para pymes y autónomos, ayudándoles a mejorar su visibilidad online y atraer más clientes.
                     </p>
	            </div>
			</div>
			<div className="row">
				<div className="col-lg-3 p-5 text-center"
					data-aos="fade"
                    data-aos-delay="300"
                    data-aos-duration="1000"
                    data-aos-easing="ease"
                    data-aos-once="true"
					>
                    <CircularProgressbar value={100} text={`${100}.0%`} />
				      <h4 className="mt-2">Diseño web para SEO</h4>
                </div>
                <div className="col-lg-3 p-5 text-center"
                	data-aos="fade"
                    data-aos-delay="400"
                    data-aos-duration="1000"
                    data-aos-easing="ease"
                    data-aos-once="true"
                	>
                     <CircularProgressbar value={100} text={`${100}.0%`} />
				      <h4 className="mt-2">SEO Web, SEO Local & GEO</h4>
                </div>
                <div className="col-lg-3 p-5 text-center"
                	data-aos="fade"
                    data-aos-delay="500"
                    data-aos-duration="1000"
                    data-aos-easing="ease"
                    data-aos-once="true"
                	>
                     <CircularProgressbar value={100} text={`${100}.0%`} />
				      <h4 className="mt-2">Integracionnes IA, UX y CRO</h4>
                </div>
                <div className="col-lg-3 p-5 text-center"
                	data-aos="fade"
                    data-aos-delay="600"
                    data-aos-duration="1000"
                    data-aos-easing="ease"
                    data-aos-once="true"
                	>
                     <CircularProgressbar value={100} text={`${100}.0%`} />
				      <h4 className="mt-2">Gestión  Web & Servidores</h4>
                </div>
			</div>
		</div>
		</div>
    );
}

export default About;
