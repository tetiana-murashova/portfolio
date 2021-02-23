import React, {Component} from 'react';
import './Portfolio.css'
import Project from "./Project/Project";

const front_page = require('./project_images/1.JPG');



class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.state={
            cards: [
                   {name:'Design and development in WordPress',
                    tools :'(WordPress)',
                    link: 'http://gallopinggroup.com/kfr/',
                    images: front_page,
                    alt: 'photo of horse'
                },
                {name:'Redesign and development of "IT company" Website',
                    tools :'(HTML, CSS and JavaScript)',
                    link: 'https://tetiana-murashova.github.io/DiTec-front_page/',
                    images: front_page,
                    alt: 'photo of IT office'
                },
                {name:'Design and development "Epoxy Floor" Website',
                    tools :'(HTML, CSS and JavaScript)',
                    link: 'https://tetiana-murashova.github.io/floors/',
                    images: front_page,
                    alt: 'photo of epoxy floor'
                },
                {name:'Design and development of "Roof Painting" Website',
                    tools :'(HTML, CSS and JavaScript)',
                    link: 'https://tetiana-murashova.github.io/roof/',
                    images: front_page,
                    alt: 'photo of roof'
                },
                {name:'Design and development "Epoxy Floor" Website',
                    tools :'(HTML, CSS and JavaScript)',
                    link: 'https://tetiana-murashova.github.io/floors/',
                    images: front_page,
                    alt: 'photo of epoxy floor'
                },
                {name:'Design and development "Ivan School" Website',
                    tools :'(Bootstrap and React.)',
                    link: 'https://school.tania-m.com',
                    images: front_page,
                    alt: 'photo of child'
                },
                {name:'Car Game',
                    tools :'(HTML, CSS and JavaScript)',
                    link: 'https://tetiana-murashova.github.io/car_game/',
                    images: front_page,
                    alt: 'photo of car'
                },
                {name:'Relaxer App',
                    tools :'(HTML, CSS and JavaScript)',
                    link: 'https://tetiana-murashova.github.io/relaxation-app/',
                    images: front_page,
                    alt: 'photo of meditation'
                },
                {name:'Tic-tac-toe',
                    tools :'(HTML, CSS and JavaScript)',
                    link: 'https://tetiana-murashova.github.io/tic-tac-toe/ ',
                    images: front_page,
                    alt: 'tic tac toe'
                }

            ],
            pageTitle: 'Some of my projects'

        }
    }
    render() {
        return (
            <div id="portfolio" className="portfolio--section__wrapper">
                <h2 className="portfolio--section__title">{this.state.pageTitle}</h2>
                <div className="underline"></div>
<div className="project-wrap">
                {this.state.cards.map((card, index) => {
                    return(
                    <Project
                    key={index}
                    name={card.name}
                    tools={card.tools}
                    link={card.link}
                    images={card.images}
                    alt={card.alt}
                    />
                    )}
                )}
</div>

            </div>
        );
    }
}

export default Portfolio;
