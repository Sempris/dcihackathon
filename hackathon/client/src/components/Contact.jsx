import "./Contact.scss";
import logoNoCP from "../images/logoNoCP.svg";
import ContactFormComp from './ContactForm';
import moment from 'moment';
import { useEffect, useState } from "react";

export default function Contact() {
    const [open, setOpen] = useState('green');

    useEffect(() => {
        const hourNow = parseInt(moment().format('HH'));
        if (hourNow < 10 || hourNow >= 23) {
            setOpen('red');
        }
    }, [])

    return <main>
        <div className="address container">
            <div>
                <img src={logoNoCP} alt="logo" id="logoNoCP" />
            </div>
            <div>
                <p>Sesame Street 146, Berlin 10015</p>
                <p>Phone: (0) 151 473 888</p>
            </div>
        </div>
        <div className="row d-flex justify-content-center">
            <div id="openOrNot" className={`${open} col-1`}></div>
            <div className="col-6">
                <h4>Opening Hours:</h4>
                <h5>Monday to Sunday 10:00 - 23:00</h5>
            </div>
            <div id="openOrNot" className={`${open} col-1`}></div>
        </div>
        <div className="map container">
            <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2427.5482242451353!2d13.365340550898766!3d52.523514543622866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851bdc63590e3%3A0xfb369e64a0ae5d2f!2sElla-Trebe-Stra%C3%9Fe%205%2C%2010557%20Berlin!5e0!3m2!1sen!2sde!4v1636899724474!5m2!1sen!2sde" 
            allowfullscreen="" loading="lazy" title="map" />
            <img src="./img/cafe.jpg" alt="cafe" />
        </div>
        <div className="container">
            <hr></hr>
        </div>
        <h2>Contact us!</h2>
        <ContactFormComp />
        <div className="container">
            <hr></hr>
        </div>
    </main>
}