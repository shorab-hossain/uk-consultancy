import React from 'react';
import { FaSearch } from "react-icons/fa";
import { IoMdArrowDropright } from "react-icons/io";
import { RxSwitch } from "react-icons/rx";
import "./Navigation.css";

const Navigation = () => {
    return (
        <div className=' full-navbar' >
             <nav className="navbar navbar-expand-lg navbar-light container text-light navbar-style col-sm-12 col-lg-12 col-md-12">
             <img width={"100px"} src="https://i.ibb.co/CQSqWxB/logo-Image.png" alt=""/>
            <a className="navbar-brand text-light fw-bold" href="#"> UKEC</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mx-auto text-light navbar-menu">
                <li className="nav-item active first-drop">
                    <a className="nav-link main-nav1" href="#">Study <IoMdArrowDropright className='ms-2 icon-drop'/></a>
                    {/* sub-menu */}
                       <div className="dropdown-menu">
                            <ul>
                                <li><a href="/">Pre-university Applications</a></li>
                                <li><a href="/">Under graduate Applications</a></li>
                                <li><a href="/">Post graduate Applications</a></li>
                                <li><a href="/">PhD Applications</a></li>
                            </ul>
                       </div>
                </li>
                <li className="nav-item second-drop">
                    <a className="nav-link" href="#">Find a course <IoMdArrowDropright className='ms-2 icon-drop'/></a>
                     {/* sub-menu2 */}
                     <div className="dropdown-menu">
                            <ul>
                                <li><a href="/">Browse My University</a></li>
                                <li><a href="/">Browse My Subject</a></li>
                                <li><a href="/">Subject Ranking</a></li>
                                <li><a href="/">Overall University Ranking</a></li>
                            </ul>
                       </div>
                </li>
                <li className="nav-item third-drop">
                    <a className="nav-link" href="#">Learn English <IoMdArrowDropright className='ms-2 icon-drop'/></a>
                     {/* sub-menu3 */}
                     <div className="dropdown-menu">
                            <ul>
                                <li><a href="/">English Course</a></li>
                                <li><a href="/">Find a School</a></li>
                                <li><a href="/">Subject Ranking</a></li>
                                <li><a href="/">UKEC School</a></li>
                            </ul>
                       </div>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">JOIN UKEC</a>
                </li>
               <div className='search-icon'>
                    <FaSearch className='ms-2 '/>
               </div>
                </ul>
                {/* icon-language-change */}
               <div className='d-flex justify-content-center align-items-center'>
                <div className='world'>
                <RxSwitch className='world-icon'>
                        </RxSwitch>
                </div>
                <div>
                    <p className='navbar-para'>EN</p>
                </div>
               </div>

                {/* <TbWorld className='world'/> */}
                
            </div>
            {/* search-icon */}
            <div className='search-icon'>
                <button className='btn btn-apply' type="submit"><span>Apply Online</span></button>
            </div>
            </nav>
        </div>
    );
};

export default Navigation;