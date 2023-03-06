import React, { useState } from 'react';
import img1 from "../../img/sliderImg1.webp";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Autoplay, Pagination } from "swiper";
import "./TopDestination.css";

const TopDestinations = () => {
    const [flag, setFlag] = useState([]);

    fetch("./Destination.JSON")
    .then(res => res.json())
    .then(result => setFlag(result));
    // swiper
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
      };
    return (
        <div className='container mb-5'>
             <div className='top-destinations mb-4'>
             <h1 className='text-center align-center destination-title'>Top Destinations
             </h1>
             <p>We have quality partners in variety of destinations around the globe.</p>
             </div>
            
            <div className='main-destination'>
                {
                    flag.map(singleFlag =><div className="singleFlag" key={singleFlag.key}>
                        <img src={singleFlag.img} alt=""/>
                        <h5>{singleFlag.title}</h5>
                    </div>)
                }
            </div>
            {/* student-review */}
            <div className='mt-4 mb-4'>
                <h1>What our Students Say</h1>
                    <Swiper
                        pagination={pagination}
                        modules={[Pagination,Autoplay]}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                          }}
                        className="mySwiper"
                    >
                    <SwiperSlide>
                        <div className='slider-responsive'>
                            <div className='slider-content col-md-6 col-sm-12 col-lg-6 col-12'>
                               <div>
                               <p>“I’m thoroughly enjoying studying for my degree in textile design at Birmingham City University. The University offers not only an extremely high standard of teaching, it is also a supportive and friendly environment in which to take my academic career forward and maximise my confidence and potential.”</p>
                               </div>
                            </div>
                            <div className=' col-md-6 col-sm-12 col-lg-6 col-12'>
                                <img className='slider-image1' width={"400px"} src={img1} alt=""/>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='slider-responsive'>
                            <div className='slider-content col-md-6 col-sm-12 col-lg-6 col-12'>
                               <div>
                               <p>“I’m thoroughly enjoying studying for my degree in textile design at Birmingham City University. The University offers not only an extremely high standard of teaching, it is also a supportive and friendly environment in which to take my academic career forward and maximise my confidence and potential.”</p>
                               </div>
                            </div>
                            <div className=' col-md-6 col-sm-12 col-lg-6 col-12'>
                                <img className='slider-image1' width={"400px"} src={img1} alt=""/>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='slider-responsive'>
                            <div className='slider-content col-md-6 col-sm-12 col-lg-6 col-12'>
                               <div>
                               <p>“I’m thoroughly enjoying studying for my degree in textile design at Birmingham City University. The University offers not only an extremely high standard of teaching, it is also a supportive and friendly environment in which to take my academic career forward and maximise my confidence and potential.”</p>
                               </div>
                            </div>
                            <div className=' col-md-6 col-sm-12 col-lg-6 col-12'>
                                <img className='slider-image1' width={"400px"} src={img1} alt=""/>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='slider-responsive'>
                            <div className='slider-content col-md-6 col-sm-12 col-lg-6 col-12'>
                               <div>
                               <p>“I’m thoroughly enjoying studying for my degree in textile design at Birmingham City University. The University offers not only an extremely high standard of teaching, it is also a supportive and friendly environment in which to take my academic career forward and maximise my confidence and potential.”</p>
                               </div>
                            </div>
                            <div className=' col-md-6 col-sm-12 col-lg-6 col-12'>
                                <img className='slider-image1' width={"400px"} src={img1} alt=""/>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='slider-responsive'>
                            <div className='slider-content col-md-6 col-sm-12 col-lg-6 col-12'>
                               <div>
                               <p>“I’m thoroughly enjoying studying for my degree in textile design at Birmingham City University. The University offers not only an extremely high standard of teaching, it is also a supportive and friendly environment in which to take my academic career forward and maximise my confidence and potential.”</p>
                               </div>
                            </div>
                            <div className=' col-md-6 col-sm-12 col-lg-6 col-12'>
                                <img className='slider-image1' width={"400px"} src={img1} alt=""/>
                            </div>
                        </div>
                    </SwiperSlide>
               
                </Swiper>
            </div>
        </div>
    );
};

export default TopDestinations;