import React from "react";
import './Footer.css';


const Footer = () => (
    <footer className="footer">

        <h3>Curious? Connect with us.</h3>

        <div className="row">
            <div className="column">
                <p>M - F:	9:00 am - 6:00 pm</p>
                <p>S:	10:00 am - 5:00 pm</p>
                <p>Su:	Closed</p>
            </div>
            <div className="column">
                <p>Contact</p>
                <p>p : 123-456-7890</p>
                <p>1600 Pennsylvania Ave NW, Washington, DC 20500</p>
            </div>
        </div>

    </footer>
);

export default Footer;