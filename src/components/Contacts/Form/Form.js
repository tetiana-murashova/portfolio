import React from 'react';


import './Form.css';





const Form = () => {



    function submitToAPI(e) {
        e.preventDefault();

        let name = document.getElementById("fname").value;

        let desc = document.getElementById("subject").value;
        if (name == "" || desc == "") {
            alert("Please Fill All Required Field");
            return false;
        }

        if (name !== '5') {
            alert("You make a mistake");
            return false;
        }


        let data = {
            name: name,
            desc: desc
        };

        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open("POST", "https://ykcnj9w206.execute-api.ap-southeast-2.amazonaws.com/prod");
        xmlhttp.setRequestHeader("Content-Type", "application/json");
        xmlhttp.send(JSON.stringify(data));
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState === 4) {
                let response = JSON.parse(xmlhttp.responseText);
                if (xmlhttp.status === 200) {
                    console.log('successful');
                    document.getElementById("contact-form").innerHTML = "<h1>Thank you for your message/feedback<br>I will get back to you soon!</h1>";
                } else {
                    console.log('failed');
                }
            }
        }

        document.getElementById('contact-form').reset();
    }





    return (
        <div>

                    <div className="contact-form__wrapper">
                        <form id="contact-form" onSubmit="return validateForm()" method="post">
                            <label htmlFor="fname">2+3=?</label>
                            <input type="text" id="fname" name="firstname" className="input--name"
                                   placeholder="Your answer.." required />
                            <label htmlFor="subject">Your message</label>
                            <textarea id="subject" name="subject" placeholder="Write something.."  required></textarea>
                            <button type="button" onClick={submitToAPI.bind(this)}
                                    className="contact-form__submit-btn">Submit
                            </button>
                        </form>
                    </div>

        </div>
    );
};

export default Form;
