import React from 'react';
import img1 from "../../img/article-image.png";
import "./Services.css";

const Services = () => {
    return (
        <>
            <div className='container mt-3'>
            <h1 className='text-center align-center mb-3 service-title'>Articles</h1>
            <div >
               <div className=' article-responsive'>
                    <div className='col-12 col-md-4 col-lg-4 col-sm-12 first-article'>
                    <div className="card ">
                    <img width={"267px"} src={img1} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Weekly University News.Things to do during the Freshers Week</h5>
                        <p className="card-text">2022-09-11</p>
                        <a href="#" className="btn btn-primary">Learn More</a>
                    </div>
                    </div>
                    </div>
                    <div className='col-12 col-md-4 col-lg-4 col-sm-12 second-article'>
                        {/* first-card */}
                        <div className='single-article1 mb-2 px-2'>
                            <div>
                                <img className='img-fluid short-image' width={"120px"} src={img1} alt=""/>
                            </div>
                            <div className='content-service'>
                                <p className='service-heading'>Weekly University News</p>
                                <small>This is Weekly UK University By UKEC</small>
                                <p>2022-08-11</p>
                            </div>
                        </div>
                        <div className='single-article mb-2 px-2'>
                            <div>
                                <img className='img-fluid short-image' width={"120px"} src={img1} alt=""/>
                            </div>
                            <div className='content-service'>
                                <p className='service-heading'>Weekly University News</p>
                                <small>This is Weekly UK University By UKEC</small>
                                <p>2022-08-11</p>
                            </div>
                        </div>
                        <div className='single-article px-2'>
                            <div>
                                <img className='img-fluid short-image' width={"120px"} src={img1} alt=""/>
                            </div>
                            <div className='content-service'>
                                <p className='service-heading'>Weekly University News</p>
                                <small>This is Weekly UK University By UKEC</small>
                                <p>2022-08-11</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-4 col-lg-4 col-sm-12 third-article'>
                        <h5>Label</h5>
                       <div className=' btn-service'>
                       <button className='btn btn-outline-primary'>Application Guideline</button>
                       </div>
                        <div  className='btn-service'>
                        <button className='btn btn-outline-primary'>Top Tips</button>
                        </div>
                        <div  className='btn-service'>
                        <button className='btn btn-outline-primary'>Masters and PhD News</button>
                        </div>
                      <div  className='btn-service'>
                      <button className='btn btn-outline-primary'>Course Procedure</button>
                      </div>
                       <div  className='btn-service'>
                       <button className='btn btn-outline-primary'>Applications And Offers</button>
                       </div>
                        <div  className='btn-service'>
                        <button className='btn btn-outline-primary'>Vise News And Applications</button>
                        </div>
                    </div>
               </div> 
            </div>
            </div>
        </>
    );
};

export default Services;