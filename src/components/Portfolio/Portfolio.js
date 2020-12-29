import React, {Component} from 'react';
 import './Portfolio.css'
import Project from "./Project/Project";

class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.state={
            cards: [
                   {name:'Redesign and development of "IT company" Website',
                    tools :'HTML, CSS and JavaScript',
                    link: 'http://ditec-solutions-front-page.tania-m.com'
                },
                {name: 'Audi', year:2020},
                {name:'Lada 9', year: 2001}
            ],
            pageTitle: 'SOME OF MY PROJECTS'

        }
    }
    render() {
        return (
            <div id="portfolio" className="portfolio--section__wrapper">
                <h2 className="portfolio--section__title">{this.state.pageTitle}</h2>

                {this.state.cards.map((card, index) => {
                    return(
                    <Project
                    key={index}
                    name={card.name}
                    tools={card.tools}
                    link={card.link}
                    />
                    )}
                )}

            </div>
        );
    }
}

export default Portfolio;
