import React from 'react';
import { Parallax } from "react-parallax";
import { CountUp } from 'use-count-up';
import { useEffect } from "react";
import  Aos from 'aos';
import "aos/dist/aos.css";

const image1 ="./img/background/3.jpg";


function Counter() {
    useEffect(() => {
    Aos.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
    }, []);
    return(
        <div className="section bg-top bg-bottom py-0">
          <Parallax className="py-5" bgImage={image1} strength={300}>  
          <div className="py-5 position-relative">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="de_count text-center">
                                <h3 className="timer"
                                  data-aos="fade"
                              data-aos-delay="0"
                              data-aos-duration="1000"
                              data-aos-easing="ease"
                              data-aos-once="true"
                                  >
                                    <CountUp isCounting end={20} duration={3} />
                                </h3>
                                <span>Años en SEO</span>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="de_count text-center">
                                <h3 className="timer"
                                  data-aos="fade"
                              data-aos-delay="200"
                              data-aos-duration="1000"
                              data-aos-easing="ease"
                              data-aos-once="true"
                                  ><CountUp isCounting end={250} duration={3} /></h3>
                                <span>Proyectos SEO</span>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="de_count text-center">
                                <h3 className="timer"
                                  data-aos="fade"
                              data-aos-delay="400"
                              data-aos-duration="1000"
                              data-aos-easing="ease"
                              data-aos-once="true"
                                  ><CountUp isCounting end={30} duration={3} /></h3>
                                <span>Clientes Actuales</span>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="de_count text-center">
                                <h3 className="timer"
                                  data-aos="fade"
                              data-aos-delay="600"
                              data-aos-duration="1000"
                              data-aos-easing="ease"
                              data-aos-once="true"
                                  ><CountUp isCounting end={100} duration={3} /></h3>
                                <span>Webs en Top Google</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Parallax>
        </div>
    );
}

export default Counter;