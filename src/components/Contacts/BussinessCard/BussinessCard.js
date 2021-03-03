import React from 'react';


import './BussinessCard.css';

const BussinessCard = () => {
    return (
        <div>



                    <div className="contact-card__wrapper">

                        <div className="contact-card">

                            <div className="contact-card__front">

                                <div className="contact-card__front-left">
                                    <img className="contact-card__img" src={require("./LogoRed.png")}
                                         alt="logo" />
                                    <h4><span>WEB</span>Developer</h4>
                                </div>

                                <div className="contact-card__front-right">
                                    <div className="contact-card__person contact-card__text">
                                        <i className="fas fa-user-tie"></i>
                                        <div>
                                            <h4>TETIANA MURASHOVA</h4>
                                            <p>Web Developer</p>
                                        </div>
                                    </div>
                                    <div className="contact-card__phone contact-card__text">
                                        <i className="fas fa-phone"></i>
                                        <div>
                                            <p>+61 490 864 845</p>
                                        </div>
                                    </div>
                                    <div className="contact-card__email contact-card__text">
                                        <i className="fas fa-envelope-open"></i>
                                        <div>
                                            <a href="mailto:murashovatania1@gmail.com">
                                                <p>murashovatania1@gmail.com</p>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="contact-card__address contact-card__text">
                                        <i className="fas fa-map-marker-alt"></i>
                                        <div>
                                            <p>Melbourne, Australia</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="contact-card__back ">
                                <img src={require("./LogoRed.png")} alt="logo" />
                            </div>

                        </div>
                    </div>






                    {/*<div className="contact-form__wrapper">*/}
                    {/*    <form id="contact-form" onSubmit="return validateForm()" method="post">*/}
                    {/*        <label htmlFor="fname">2+3=?</label>*/}
                    {/*        <input type="text" id="fname" name="firstname" className="input--name"*/}
                    {/*               placeholder="Your answer.." required />*/}
                    {/*        <label htmlFor="subject">Your message</label>*/}
                    {/*        <textarea id="subject" name="subject" placeholder="Write something.."  required></textarea>*/}
                    {/*        <button type="button" onClick="submitToAPI(event)"*/}
                    {/*                className="contact-form__submit-btn">Submit*/}
                    {/*        </button>*/}
                    {/*    </form>*/}
                    {/*</div>*/}







        </div>
    );
};

export default BussinessCard;
