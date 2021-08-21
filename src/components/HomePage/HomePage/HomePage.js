import React from 'react';
import { Button } from 'react-bootstrap';
import './HomePag.css';
// import Banner from '../../../images/home-page.jpg';
import Banner from '../../../images/photography.jpg';
import Services from '../Services/Services';
import Features from '../Features/Features';
import Review from '../Review/Review';
import OurTeam from '../OurTeam.js/OurTeam';
import Footer from '../../Footer/Footer/Footer';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div>
            <div className="container">
                <div className="row align-items-center main">
                    <div className="col-md-6 mb-5">
                        <h3>Photographers Den</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                             Ea est, vitae molestias facilis nihil quibusdam.</p>
                             <Button as = {Link} to ="/dashBoard">Book Now</Button>
                    </div>
                    <div className="col-md-6 mb-5">
                        <img src= {Banner} className = "d-flex w-100 photo-radius" alt="" />
                    </div>
                </div>

                <div>
                 <Services></Services>
                </div>
                <div>
                    <Features></Features>
                </div>
                <div>
                    <Review></Review>
                </div>
                <div>
                    <OurTeam></OurTeam>
                </div>
                <div>
                    <Footer></Footer>
                </div>
            </div>
        </div>
    );
};

export default HomePage;