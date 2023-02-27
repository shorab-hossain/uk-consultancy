import React from 'react';
import "./Header.css";

const Header = () => {
    return (
        <section className='main-slider'>
            <div className='container'>
                    <div className='col-12 col-md-6 col-sm-12 col-lg-6 first-header'>
                    
                    </div>
                    {/* second-section */}
                    <div className='col-12 col-md-6 col-sm-12 col-lg-6 second-header '>
                      <div>
                        <h4 className='header-title'>Your journey start with us! Inspiring International Students Since 1999</h4>
                            {/* <p className='header-small'>Eduplan Education Can Fulfil Your International Education Dream
                            As Per Your Best Fit with world top universities and collages.</p> */}

                        {/* form-design */}
                        <div className='header-form'>
                            <label htmlFor="" className='text-light'>What subject areas are you interested in?</label>
                                <select id="select-field" name="subject" form="">
                                <option value="subject">All Subject Areas</option>
                                <option value="subject">Accounting And Finance</option>
                                <option value="subject">Accounting And Finance</option>
                                <option value="subject">Accounting And Finance</option>
                                <option value="subject">Accounting And Finance</option>
                                <option value="subject">Accounting And Finance</option>
                                <option value="subject">Accounting And Finance</option>
                                <option value="subject">Accounting And Finance</option>
                                <option value="subject">Accounting And Finance</option>
                                <option value="subject">Accounting And Finance</option>
                                </select>
                                {/* second-input-feild */}
                                <label htmlFor="" className='text-light mt-2'>Where do you want to study?</label>
                                <select id="select-field" name="subject" form="">
                                <option value="subject">All Location</option>
                                <option value="subject">Austalia</option>
                                <option value="subject">Garmany</option>
                                <option value="subject">Finland</option>
                                <option value="subject">Canada</option>
                                </select>
                                 {/* third-input-feild */}
                                 <label htmlFor="" className='text-light mt-2'>What level do you want to study?</label>
                                <select id="select-field" name="subject" form="">
                                <option value="subject">All Level</option>
                                <option value="subject">English Language</option>
                                <option value="subject">Foundation</option>
                                <option value="subject">PhD</option>
                                <option value="subject">Post Graduate</option>
                                <option value="subject">Pre-masters</option>
                                <option value="subject">Pre-sessional</option>
                                <option value="subject">Undergraduate</option>
                                </select>
                                 {/* four-input-feild */}
                                 <label htmlFor="" className='text-light mt-2'>When would you like to study?</label>
                                <select id="select-field" name="subject" form="">
                                <option value="subject">All Intake Periods</option>
                                <option value="subject">September-2023</option>
                                <option value="subject">Octobar-2023</option>
                                </select>
                                 {/* Five-input-feild */}
                                 <label htmlFor="" className='text-light mt-2'>Or Search For University</label>
                                   <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                                    <button class="btn btn-form my-2 my-sm-0" type="submit">Go</button>
                                   
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Header;