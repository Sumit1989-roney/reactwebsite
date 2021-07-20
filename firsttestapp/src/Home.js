import React from 'react';
import { NavLink } from 'react-router-dom';
import web from "../src/images/business_img.png";


const Home = () => {
    return (
        <>
            <section id="header" className="d-flex align align-items-center">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row">
                        
                        <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                            <h1>Grow your Business with <strong className="brand-name">React</strong></h1>
                            <h2 className="my-3">
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                            </h2>
                            <div className="mt-03">
                                <NavLink to="service" className="btn-get-started ">Get Started</NavLink>
                            </div>

                        </div>
                        <div className="col-lg-6 order-1 order-lg-2 header-img">
                            <img src={web} className="img-fluid animated" alt="home img" />
                        </div>

                        </div>

                    </div>    
                 </div>       

            </div>        
                
            </section>
        </>

    );
};

export default Home;