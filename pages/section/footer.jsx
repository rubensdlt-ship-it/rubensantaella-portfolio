import React from 'react';

const footer = () => {
    const currentYear = new Date().getFullYear();
    return(
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <a href="https://www.envato.com" target="_blank" rel="noreferrer">
                            <span className="copy">&copy; Copyright {currentYear} - Rubén Santaella</span>
                        </a>
                    </div>
                    <div className="col-md-6">
                        <div className="social-icons"> 
                            <a href="https://www.linkedin.com/in/rub%C3%A9n-santaella-consultor-experto-seo-39195932/" target="_blank" rel="noreferrer"><i className="fa fa-linkedin"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default footer;