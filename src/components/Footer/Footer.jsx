import React from 'react'
import './Footer.scss'
const Footer = () => {
    return (
        <>
        <footer className="footer">
            <div className="container">
                <div className="footer__box">
                    <h1>Let's work together.</h1>
                    <a href="" className="footer__link">Get in touch.</a>

                </div>


                <div className="footer__wrap">
                    <p>© Oli Harris 2023</p>
                    <div className="footer__menu">
                        <a href="">Twitter</a>
                        <a href="">Linkedin</a>
                        <a href="">Mail</a>
                    </div>
                </div>
            </div>
        </footer>
        </>
    )
}

export default Footer

