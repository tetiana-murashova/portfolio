import React, {Component} from 'react';
import './Feedback.css'
import Project from "../Portfolio/Project/Project";

const holmesglen = require('./holmesglen.png');

class Feedback extends Component {
    constructor(props) {
        super(props);
        this.state = {
            feedback: [
                {
                    title: 'Holmesglen Institute of TAFE',
                    name: 'Sruthy Korembith.Subject: Design',
                    images: holmesglen,
                    alt: 'holmesglen logo',
                    text: '"Thank you for all your hard work. Your final' +
                        ' website is well structured with a clean and professional style. You also' +
                        'created a useable, functional and well-designed website, demonstrated the principles' +
                        'of user-centred design and' +
                        ' also meets the required accessibility standards. Excellent Work."'
                },
                {
                    title: 'Holmesglen Institute of TAFE',
                    name: 'Sruthy Korembith.Subject: Web essential',
                    images: holmesglen,
                    alt: 'holmesglen logo',
                    text: '"You website fulfils the project brief. Excellent, clean coding and ' +
                        'professionally designed website. Your website was nicely balanced and consistent ' +
                        'across all pages. I liked the colour scheme and navigation, really easy to explore. You' +
                        ' have demonstrated the knowledge to create a professional website based on Html5, CSS3."'
                }
            ]
        }
    }

    render() {
        return (
            <div className="section-feedback">



                    <div>
                        <h2 className="section-feedback__title">FEEDBACK</h2>
                    </div>
                    {/*<p className="section-feedback__text">Feedback baced on Holmesglen Institute and customers</p>*/}

                    <div className="block-feedback-cards">


                            {this.state.feedback.map((feed, index) => {
                                return(
                                    <div className="feedback-card__element">
                                        <div className="feedback-card__image-wrapper">
                                            <img src={feed.images} alt={feed.alt}
                                                 className="feedback-card__image" />
                                        </div>
                                        <div className="feedback-card__text">
                                            <h3 className="feedback-card__text-title">{feed.title}</h3>
                                            <p className="feedback-card__text-name">{feed.name}</p>
                                            <p className="feedback-card__text-paragraph">{feed.text}</p>
                                        </div>
                                    </div>
                                )}
                            )}






                    </div>


            </div>
        );
    }
}

export default Feedback;
