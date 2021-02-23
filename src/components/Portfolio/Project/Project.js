import React, {Component} from 'react';
import './Project.css'

class Project extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="portfolio--content__wrapper">
                {/*<h3 className="portfolio--content__title">{this.props.name}</h3>*/}
                <div className="portfolio--card-and-text">
                    <a href={this.props.link} target="_blank">
                        <div className="portfolio--card">
                                <div className="portfolio--card__content">
                                    <img src={this.props.images} alt={this.props.alt} />
                                </div>
                        </div>
                    </a>
                    <div>
                        <p className="portfolio--text"> {this.props.name} <br />
                            {this.props.tools}
                            <br /><br />
                        </p>

                        <form className='my-form' action={this.props.link}
                              method="get" target="_blank">
                            <button className="portfolio--view-detail-btn">
                                VIEW DETAILS
                                <i className="fas fa-angle-double-right btn-arrow"></i>
                            </button>
                        </form>

                    </div>
                </div>
            </div>
        );
    }
}

export default Project;
