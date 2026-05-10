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
                                	<span className="d_title">Ingeniero Informático en Sistemas</span>
                                	<span className="d_company">Universidad de Málaga</span>
                                	Personalmente, creo en la capacitación profesional por encima de los cursillos online. Soy <strong>Ingeniero Informático en Sistemas</strong> por la Universidad de Málaga &mdash; una base técnica sólida que ha marcado mi forma de entender la tecnología aplicada al negocio.
                                </p>
                            </li>
                            <li className="d_timeline-item">
                                <h3 className="d_timeline-title">2012</h3>
                                <p className="d_timeline-text">
                                	<span className="d_title">Proyecto Fin de Carrera sobre SEO para pymes</span>
                                	<span className="d_company">Universidad de Málaga</span>
                                	Defendí mi <strong>Proyecto Fin de Carrera sobre SEO para pymes</strong> &mdash; <strong>&quot;Gestión de presencia en Internet de una pequeña y mediana empresa&quot;</strong> &mdash; obteniendo <strong>Matrícula de Honor por unanimidad</strong> del tribunal. Aún se puede consultar en la biblioteca de la <strong>Facultad de Ingeniería Informática</strong> de la UMA.
                                </p>
                            </li>
                            <li className="d_timeline-item">
                                <h3 className="d_timeline-title">2012 &mdash; Hoy</h3>
                                <p className="d_timeline-text">
                                	<span className="d_title">Formación constante</span>
                                	Desde 2012 no he dejado de formarme ni un solo año. Congresos como <strong>eCommerce Málaga</strong> y <strong>eSHOW Madrid</strong>, formación técnica avanzada en <strong>Seobox</strong> y <strong>DinoRank</strong>, masterclasses, charlas, coloquios y seminarios &mdash; presenciales y online &mdash; con los mejores profesionales del sector. La disciplina cambia cada pocos meses; mantenerse al día no es opcional, es la única forma de hacer este trabajo bien.
                                </p>
                            </li>
                            <li className="d_timeline-item">
                                <h3 className="d_timeline-title">2026</h3>
                                <p className="d_timeline-text">
                                	<span className="d_title">Especialización SEO Local, GBP, GEO e IA</span>
                                	Año dedicado a profundizar en <strong>SEO Local</strong>, <strong>SEO de Google Business Profile (GBP)</strong> y <strong>GEO &mdash; SEO para Inteligencia Artificial</strong>, el nuevo paradigma de visibilidad en buscadores generativos. En paralelo, formación específica en <strong>integraciones de IA para empresas</strong>: agentes de voz, automatizaciones y aplicaciones a medida para pymes y autónomos.
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
                                <h3 className="d_timeline-title">1999 - 2012</h3>
                                <p className="d_timeline-text">
                                	<span className="d_title">Responsable de Informática</span>
                                	<span className="d_company">Parque de Atracciones Tivoli World &mdash; Benalmádena</span>
                                	En 1999 entré a formar parte de la plantilla del <strong>Parque de Atracciones Tivoli World</strong> en Benalmádena como <strong>responsable del Departamento de Informática</strong>: software y hardware completos del parque, más de <strong>200 equipos</strong> a mi cargo, junto con todas las conexiones y la infraestructura de red. Posteriormente continué en el cargo bajo la gerencia de <strong>Arenal 2000</strong>, tras la compra del parque.
                                </p>
                            </li>
                            <li className="d_timeline-item">
                                <h3 className="d_timeline-title">2012</h3>
                                <p className="d_timeline-text">
                                	<span className="d_title">Empresa propia &mdash; Diseño Web y SEO</span>
                                	<span className="d_company">Pymes y autónomos</span>
                                	En 2012 monto mi <strong>propia empresa</strong>, especializada en <strong>diseño web y posicionamiento</strong> para pymes y autónomos. Desde el primer día, foco en negocios reales y resultados medibles, especializándome poco a poco en <strong>SEO Local</strong> y <strong>diseño web orientado a SEO</strong>.
                                </p>
                            </li>
                            <li className="d_timeline-item">
                                <h3 className="d_timeline-title">Actualmente</h3>
                                <p className="d_timeline-text">
                                	<span className="d_title">SEO Local Íntegro + IA para empresas</span>
                                	He ido especializándome sobre todo en <strong>SEO Local íntegro</strong> &mdash; <strong>web + GBP + GEO</strong> &mdash; en un servicio único e integral pensado para que las pymes y autónomos ganen visibilidad real en su zona de influencia. Además, estoy totalmente volcado en <strong>incorporar la IA al día a día de las empresas</strong>: aplicaciones IA, integraciones, agentes de voz y formación, con un portfolio específico y formación puntera en Inteligencia Artificial aplicada al negocio.
                                </p>
                            </li>
                            <li className="d_timeline-item">
                                <h3 className="d_timeline-title">Proyectos en paralelo</h3>
                                <p className="d_timeline-text">
                                	<span className="d_title">Grandes proyectos institucionales</span>
                                	En paralelo a la cartera de pymes, trabajo en proyectos de mayor envergadura: <strong>UMA &mdash; Máster de Big Data e IA</strong>, donde soy responsable de marketing y contenido de la web oficial del máster desde hace casi una década; proyectos con <strong>Planeta Explora (Benalmádena)</strong> junto con la <strong>Politécnica de Telecomunicaciones de España (Proyecto EligeTeleco)</strong>; e <strong>IFMIF-DONES Granada</strong>, en el software de control presencial de esta importante infraestructura científica internacional.
                                </p>
                            </li>
                            <li className="d_timeline-item">
                                <h3 className="d_timeline-title">Últimos meses</h3>
                                <p className="d_timeline-text">
                                	<span className="d_title">IA aplicada a pymes y autónomos</span>
                                	Trabajo intensivo en <strong>aplicaciones e integraciones de IA para empresas</strong>: desde pequeños complementos hasta grandes integraciones, <strong>agentes de voz</strong> y formación específica para pymes y autónomos. La idea es clara: ayudar a integrar la Inteligencia Artificial en el día a día de los negocios reales, no en presentaciones de PowerPoint.
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
