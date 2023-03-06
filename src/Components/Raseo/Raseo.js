import React from 'react';
import image1 from "../../img/firstImage1.svg";
import image4 from "../../img/FourImage4.svg";
import image2 from "../../img/secondImage2.svg";
import image3 from "../../img/thirdImage3.svg";
import "./Reseo.css";

const Raseo = () => {
    return (
        <section className='raseo-main pb-5 pt-5 mb-5'>
            <div className='container   flex-raseo'>
                <div className='col-12 col-md-3 col-lg-3 col-sm-12'>
                    <img className='raseo-img' src={image1} alt=""/>
                    <h4 className='small-title'><span className='text-center'>300k+</span><br/>
                    Total Students to Date</h4>
                </div>
                <div className='col-12 col-md-3 col-lg-3 col-sm-12'>
                    <img className='raseo-img' src={image2} alt=""/>
                    <h4 className='small-title'>120+
                    UK University Partners</h4>
                </div>
                <div className='col-12 col-md-3 col-lg-3 col-sm-12'>
                    <img className='raseo-img' src={image3} alt=""/>
                    <h4 className='small-title'>90%
                    Application Success Rate</h4>
                </div>
                <div className='col-12 col-md-3 col-lg-3 col-sm-12'>
                    <img className='raseo-img' src={image4} alt=""/>
                    <h4 className='small-title'>85
                    Nationalities Represented</h4>
                </div>
            </div>
        </section>
    );
};

export default Raseo;