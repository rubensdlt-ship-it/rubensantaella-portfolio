import React from 'react';
import { useEffect } from "react";
import  Aos from 'aos';
import "aos/dist/aos.css";

function Resume() {
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
				<div className="col-md-12 text-center">
	                <h2>Experiencia y Formación</h2>
	                <div className="space-border"></div>
	            </div>
			</div>
			<div className="row gh-5">

				<div className="col-lg-6"
                    data-aos="fade-up"
                        data-aos-once="true"
                    >
                    <div className="p-4">
                        <h3 className="s_border">Educación</h3>
                        <ul className="d_timeline">
                            <li className="d_timeline-item">
                                <h3 className="d_timeline-title">1990 - 1994</h3>
                                <p className="d_timeline-text">
                                	<span className="d_title">Ingeniero Informático</span>
                                	<span className="d_company">Universidad de Málaga</span>
                                	Personalmente, creo en la capacitación profesional por sobre los cursillos online. Soy Ingeniero Técnico Informático de Sistemas por la Universidad de Málaga, con <strong>Matrícula de Honor en un Proyecto SEO para la UMA en 2012</strong>.
                                </p>
                            </li>
                            <li className="d_timeline-item">
                                <h3 className="d_timeline-title">2012</h3>
                                <p className="d_timeline-text">
                                	<span className="d_title">Proyecto sobre SEO</span>
                                	<span className="d_company">Universidad de Málaga</span>
                                	En 2012 defendí un proyecto para la <strong>UMA</strong> (cliente en la actualidad) llamado <strong>&quot;Gestión de presencia en Internet de una pequeña y mediana empresa&quot;</strong> con Matrícula de Honor unánime. Aún se puede consultar en la biblioteca de la <strong>Facultad de Ingeniería Informática</strong>.
                                </p>
                            </li>
                            <li className="d_timeline-item">
                                <h3 className="d_timeline-title">...2024</h3>
                                <p className="d_timeline-text">
                                	<span className="d_title">Formación SEO constante</span>
                                	Desde entonces no he parado de formarme y actualizarme en SEO, congresos como eCommerce Málaga, eSHOW Madrid, formación técnica en Seobox, DinoRank, participando en todo tipo de charlas, coloquios y seminarios presenciales y online.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="col-lg-6"
                    data-aos="fade-up"
                        data-aos-once="true"
                    >
                    <div className="p-4">
                        <h3 className="s_border">Experiencia</h3>
                        <ul className="d_timeline">
                            <li className="d_timeline-item">
                                <h3 className="d_timeline-title">2012 - Actualidad</h3>
                                <p className="d_timeline-text">
                                	<span className="d_title">Consultor SEO Freelance</span>
                                	<span className="d_company">Experto en SEO Local</span>
                                	Por allá del año 2005 ya diseñaba páginas web y daba los primeros pasos en SEO onpage. Desde 2012 me dedico 100% a asesorar y consultar SEO para pequeñas y medianas empresas y emprendedores.
                                </p>
                            </li>
                            <li className="d_timeline-item">
                                <h3 className="d_timeline-title">Actualmente</h3>
                                <p className="d_timeline-text">
                                	<span className="d_title">Proyectos de Importancia</span>
                                	Actualmente, aparte de trabajar con mi cartera de clientes, participo en proyectos de alto nivel con la <strong>Junta de Andalucía y la Universidad de Málaga</strong> (Máster Big Data e Inteligencia Artificial), proyectos con la <strong>Politécnica de Telecomunicaciones (Proyecto EligeTeleco)</strong>, <strong>IFMIF Dones en Granada</strong>, y decenas de empresas de primer nivel de la Costa del Sol como <strong>Bobby Jump</strong> (Málaga y Marbella), <strong>Muebles Gavira</strong> (Casares Costa y Sotogrande), <strong>EnSombra</strong> (Málaga y Marbella), <strong>Mármoles Vallejo</strong> (Málaga y Marbella), <strong>Isabell&apos;s</strong> (franquicia internacional con sede en Marbella) y muchas más.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="spacer-double"></div>
			</div>
		</div>
	);
}

export default Resume;
