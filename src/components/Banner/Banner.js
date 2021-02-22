import React from 'react';
import './Banner.css'
import Bookmarks from "../Bookmarks/Bookmarks";
import SocialLinks from "../SocialLinks/SocialLinks";

const Photo = () => {
    return(
        <div className="main-banner__right-side__photo">
            <img className="main-banner_photo" src={require("./photo_5.png")} alt="photo of me" />
        </div>
    )
}

const Text = () => {
    return(
        <div>
        <a href="#" className="main-banner__small-text">
            <h4 className="tooltip"><i className="fas fa-check"></i> I’M CURRENTLY AVAILABLE FOR WORK
                <span className="tooltip-text">Contact me</span>
            </h4>
        </a>
    <p className="main-banner__main-text"><span>Hello </span><br /> I’m a Tetiana Web-Developer based in
        Melbourne </p>
        </div>
    )
}

const Banner = () => {
    return (
        <div className="page--main-banner__wrapper">
                {/*<Bookmarks />*/}
            <div className="main-banner">

                <div className="aside-space"></div>

                <div className="main-banner__left-side">
                    <Text />
                    <SocialLinks />
                </div>
                    <Photo />

            </div>



        </div>


    );
};

export default Banner;
