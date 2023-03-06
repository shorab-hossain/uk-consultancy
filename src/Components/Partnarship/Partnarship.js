
import React from 'react';
import img1 from "../../img/university-1.jpg";
import img10 from "../../img/university-10.jpg";
import img2 from "../../img/university-2.jpg";
import img3 from "../../img/university-3.jpg";
import img4 from "../../img/university-4.jpg";
import img5 from "../../img/university-5.jpg";
// import img6 from "../../img/university-6.jpg";
import img7 from "../../img/university-7.jpg";
import img8 from "../../img/university-8.jpg";
import img9 from "../../img/university-9.jpg";
import "./Partnarship.css";

const Partnarship = () => {
    return (
        <>
          <div className='container'>
             <h1 className='text-center align-center mb-3 partnarship-title'>Ours Partnarship</h1>
            <div className="pt-3 pb-3 university-all">
                <div className='university-logo'>
                    <img src={img1} alt=""/>
                </div>
                <div className='university-logo'>
                    <img src={img2} alt=""/>
                </div>
                <div className='university-logo'>
                    <img src={img3} alt=""/>
                </div>
                <div className='university-logo'>
                    <img src={img4} alt=""/>
                </div>
                <div className='university-logo'>
                    <img src={img5} alt=""/>
                </div>
                </div>
                {/* <div>
                    <img src={img6} alt=""/>
                </div> */}
               <div className='d-flex justify-content-center align-item-center pb-4 university-all'>
                <div className='university-logo'>
                        <img src={img7} alt=""/>
                    </div>
                    <div className='university-logo'>
                        <img src={img8} alt=""/>
                    </div>
                    <div className='university-logo'>
                        <img src={img9} alt=""/>
                    </div>
                    <div className='university-logo'>
                        <img src={img10} alt=""/>
                    </div>
               </div>
            
          </div>  
        </>
    );
};

export default Partnarship;