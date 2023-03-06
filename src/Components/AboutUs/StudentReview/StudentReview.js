import AOS from 'aos';
import 'aos/dist/aos.css';
import React from 'react';
import "./StudentReview.css";

AOS.init();

const StudentReview = () => {
    return (
        <div className='pb-5 pt-3 container'>
            <p className='text-center text-primary fw-bold
            '>FEEDBACKS</p>
            <h1 className='text-center align-center mb-3 consultancy-title'>Our students shared their
            visa success stories</h1>
            <div>
            <div className="row row-cols-1 row-cols-md-3 g-2 mt-4"   >
                <div className="col" data-aos="fade-right"
                data-aos-duration="2000">
                    <div className="card video-card" >
                    <div className="card-body ">
                    <iframe className='video-consultancy' width="420" height="345" src="https://www.youtube.com/embed/hOYD_7clhlU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                    </div>
                </div>
                <div className="col" >
                    <div className="card video-card" >
                    <div className="card-body">
                    <iframe className='video-consultancy' width="420" height="345" src="https://www.youtube.com/embed/hOYD_7clhlU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                    </div>
                </div>
                <div className="col" data-aos="fade-left"
                data-aos-duration="2000">
                    <div className="card video-card">
                    <div className="card-body" >
                    <iframe className='video-consultancy' width="420" height="345" src="https://www.youtube.com/embed/hOYD_7clhlU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                    </div>
                </div>

                </div>
            </div>
        </div>
    );
};

export default StudentReview;