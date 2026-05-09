import { useEffect, useRef } from "react";
import Aos from 'aos';
import "aos/dist/aos.css";
import Typed from 'typed.js';

function Hero() {
  const typeRef = useRef(null);

  useEffect(() => {
    Aos.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });

    const options = {
      strings: ["CONSULTOR<br> SEO, SEM, GEO<br>Diseño web para SEO<br>Integraciones IA"],
      typeSpeed: 60,
      backSpeed: 50,
      loop: true,
    };

    const typed = new Typed(typeRef.current, options);

    return () => {
      // Clean up the Typed instance to prevent memory leaks
      typed.destroy();
    };
  }, []);

  return (
    <div className="v-center">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h6
              className="color"
              data-aos="fade-up"
              data-aos-delay="0"
              data-aos-duration="1000"
              data-aos-easing="ease"
              data-aos-once="true"
            >
              Rubén Santaella
            </h6>
            <div className="spacer-20"></div>
            <div
              className="h1_big"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="1000"
              data-aos-easing="ease"
              data-aos-once="true"
            >
              <span ref={typeRef}></span>
            </div>
            <ul
              className="list_location"
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-duration="1000"
              data-aos-easing="ease"
              data-aos-once="true"
            >
              <li>
                <span>Málaga</span>Torremolinos Centro
              </li>
              <li>
                <span>Marbella</span>Av. del Mercado
              </li>              
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
