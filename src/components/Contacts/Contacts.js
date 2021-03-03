import React from 'react';


import './Contacts.css';
import BussinessCard from "./BussinessCard/BussinessCard";
import Form from "./Form/Form";

const Contacts = () => {
    return (
        <div>


            <section id="contact" className="section-contacts__wrapper">

                <h3 className="section-contacts__title">Contact me</h3>
                <div className="section-contacts__content">

                    <BussinessCard />
                    <Form />


                </div>

            </section>



        </div>
    );
};

export default Contacts;
