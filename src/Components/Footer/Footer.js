import React from 'react';
import('./Footer.css')

const Footer = () => {
    return (
        <div>
             <div className="footer">
            <div className="container">
                <div className="row pt-4 text-light pb-5">
                    <div className="mb-4 mt-4 col-lg-3" style={{color:'#dededebd'}}>
                        <img src="https://kodeforest.com/wp-demo/travel/wide/wp-content/themes/travel/images/logo.png" alt="" className="mb-3" />
                        <h4><i className="fas fa-phone-volume me-3 fs-4">++0184576821</i></h4>
                        <h4><i className="fas fa-envelope-open-text me-3 "></i>info2121@gmail.com</h4>
                    </div>
                    <div className="p-4 col-lg-3 buttlet">
                        <h1 style={{color:'#5bc198'}}>Quick Links</h1>
                        <li><a href="#"> <i className="fad fa-angle-double-right pe-2"></i>Links</a></li>
                        <li><a href="#"> <i className="fad fa-angle-double-right pe-2"></i>Our Educational Pakage</a></li>
                        <li><a href="#"> <i className="fad fa-angle-double-right pe-2"></i>Ours Services</a></li>
                        <li><a href="#"> <i className="fad fa-angle-double-right pe-2"></i>Blogs & News</a></li>
                        <li><a href="#"> <i className="fad fa-angle-double-right pe-2"></i>Contract Us</a></li>
                        <li><a href="#"> <i className="fad fa-angle-double-right pe-2"></i>Faq</a></li>
                    </div>
                    <div className='p-4 col-lg-3 buttlet'>
                    <h1 style={{color:'#5bc198'}}>Our Services</h1>
                        <li><a href="#"> <i className="fad fa-angle-double-right pe-2"></i>All Services</a></li>
                        <li><a href="#"> <i className="fad fa-angle-double-right pe-2"></i>Our Destinations</a></li>
                        <li><a href="#"> <i className="fad fa-angle-double-right pe-2"></i>Best Country</a></li>
                        <li><a href="#"> <i className="fad fa-angle-double-right pe-2"></i>catagory</a></li>
                        <li><a href="#"> <i className="fad fa-angle-double-right pe-2"></i>Cost</a></li>
                        <li><a href="#"> <i className="fad fa-angle-double-right pe-2"></i>Country</a></li>
                    </div>
                    <div className="p-4 col-lg-3">
                            <button className="btn btn-outline-primary px-4 py-3 mb-3">Find a Favariate University</button><br />
                            <button className="btn btn-outline-primary px-4 py-3 mb-3">Best Country</button><br />
                            <button className="btn btn-outline-primary px-4 py-3">NewsLetter</button><br />     
                    </div>
                </div>
            </div>
            <div className='bg-primary ' style={{background:"rgba(0, 77, 169, 1)"}}>
               <div className='container'>
               <p className='text-light' style={{padding:"10px;"}}>© 2023 Eduplan. All rights reserved | Developed By Shorab Hossain</p>
               </div>
            </div>
        </div>
        </div>
    );
};

export default Footer;