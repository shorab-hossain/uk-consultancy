import React from 'react';
import { MdOutlineDoubleArrow } from "react-icons/md";
import ScrollToTop from "react-scroll-to-top";
import('./Footer.css')

const Footer = () => {
    return (
        <div>
             <div className="footer">
                <ScrollToTop smooth />
            <div className="container">
                <div className="row pt-4 text-light pb-5">
                    <div className="mb-4 mt-4 col-lg-3" style={{color:'#dededebd'}}>
                    <img className='mb-4 img-fluid' width={"200px"} src="https://i.ibb.co/CQSqWxB/logo-Image.png" alt=""/>
                        <h4><i className="fas fa-phone-volume me-3 fs-4">++0184576821</i></h4>
                        <h4><i className="fas fa-envelope-open-text me-3 "></i>info2121@gmail.com</h4>
                    </div>
                    <div className="p-4 col-lg-3 buttlet">
                        <h3 style={{color:'#5bc198'}}>Links</h3>
                        <li><a href="#"><MdOutlineDoubleArrow className='icon-footer'/>Links</a></li>
                        <li><a href="#"><MdOutlineDoubleArrow className='icon-footer'/>Our Educational Pakage</a></li>
                        <li><a href="#"><MdOutlineDoubleArrow className='icon-footer'/> Ours Services</a></li>
                        <li><a href="#"><MdOutlineDoubleArrow className='icon-footer'/> Blogs & News</a></li>
                        <li><a href="#"><MdOutlineDoubleArrow className='icon-footer'/> Contract Us</a></li>
                        <li><a href="#"><MdOutlineDoubleArrow className='icon-footer'/> Faq</a></li>
                    </div>
                    <div className='p-4 col-lg-3 buttlet'>
                    <h3 style={{color:'#5bc198'}}>Our Services</h3>
                        <li><a href="#"> <MdOutlineDoubleArrow className='icon-footer'/>All Services</a></li>
                        <li><a href="#"> <MdOutlineDoubleArrow className='icon-footer'/>Our Destinations</a></li>
                        <li><a href="#"><MdOutlineDoubleArrow className='icon-footer'/> Best Country</a></li>
                        <li><a href="#"><MdOutlineDoubleArrow className='icon-footer'/>catagory</a></li>
                        <li><a href="#"><MdOutlineDoubleArrow className='icon-footer'/> Cost</a></li>
                        <li><a href="#"><MdOutlineDoubleArrow className='icon-footer'/>Country</a></li>
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