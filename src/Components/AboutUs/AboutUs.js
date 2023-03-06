import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import React from 'react';
import { AiOutlineArrowRight } from "react-icons/ai";
import imgAbout from "../../img/aboutImage.jpg";
import icon1 from "../../img/serviceIcon-1.png";
import icon2 from "../../img/serviceIcon-2.png";
import icon3 from "../../img/serviceIcon-3.png";
import "./AboutUs.css";
// ..
AOS.init();

const AboutUs = () => {
    return (
        <div className='aboutUs' >
            <div className='container about-single'>
                <div className='col-12 col-md-6 col-lg-6 col-sm-12' data-aos="fade-right"
                data-aos-duration="2000">
                    <h1 className='about-title'>About Us</h1>
                 <p >Established in 1999, UKEC is a free advisory and support service for international students who wish to pursue higher education whilst studying in the UK.

                    Decades of experience and knowledge of the international student recruitment market makes UKEC the go-to advisory service provider for many learners across the world looking to study in the UK.

                    Proudly operating across six of the world’s fastest-growing economies; China, Kuwait, Pakistan, Saudi Arabia, South-East Asia and the United Kingdom, our network of education institutes, students and alumni continues to expand.

                    Our growth enables us to offer a unique service to each of our learners and establish further partnerships with prestigious universities, colleges, English language providers and schools in the UK and internationally – including some of the best UK universities for international students.
</p>
                </div>
                <div className='col-12 col-md-6 col-lg-6 col-sm-12' data-aos="fade-left"
                data-aos-duration="2000">
                <img className='img-fluid about-img' src={imgAbout} alt=""/>
                </div>
            </div>
            {/* service-section */}
            <div className='main-service container mt-5 mb-5'>
            <div className="row row-cols-1 row-cols-md-3 g-2"   >
                <div className="col responsive-card">
                    <div className="card card-main" data-aos="fade-right"
                data-aos-duration="2000">
                    <div className="card-body ">
                         <div>
                            <img className='service-icon' src={icon1} alt=""/>
                        </div>
                        <h4 className="card-title">One Stop Study Solution</h4>
                        <p className="card-text">Get a full view so you know where to save. Track spending, deta keep tab subscription lorem ipsum text</p>
                        <a className='mt-3 learn-link' ><span className='learn-contant'>Learn More</span><AiOutlineArrowRight className='ms-3'/></a>
                    </div>
                    </div>
                </div>
                <div className="col responsive-card" data-aos="fade-right"
                data-aos-duration="2000">
                    <div className="card card-main" >
                    <div className="card-body">
                         <div>
                            <img className='service-icon' src={icon2} alt=""/>
                        </div>
                        <h4 className="card-title">One To One Discussion</h4>
                        <p className="card-text">Get a full view so you know where to save. Track spending, deta keep tab subscription lorem ipsum text</p>
                        <a className='mt-3 learn-link' ><span className='learn-contant'>Learn More</span><AiOutlineArrowRight className='ms-3'/></a>
                    </div>
                    </div>
                </div>
                <div className="col responsive-card">
                    <div className="card card-main">
                    <div className="card-body" data-aos="fade-left"
                data-aos-duration="2000">
                        <div>
                            <img className='service-icon' src={icon3} alt=""/>
                        </div>
                        <h4 className="card-title">End To End Support</h4>
                        <p className="card-text">Get a full view so you know where to save. Track spending, deta keep tab subscription lorem ipsum text</p>
                        <a className='mt-3 learn-link' ><span className='learn-contant'>Learn More</span><AiOutlineArrowRight className='ms-3'/></a>
                    </div>
                    </div>
                </div>

                </div>
            </div>
        </div>
    );
};

export default AboutUs;