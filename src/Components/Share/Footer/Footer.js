import React from "react";
import img from "../../../Assets/logo.png";

const Footer = () => {
    return (
        <footer className="footer-area">
            <div className="container">
                <div className="footer-text text-center">
                    <div className="footer-img dark-footer-img">
                        <img src={img} alt="" className="img-fluid" />
                    </div>
                    <div className="footer-icon">
                        <a href="#">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#">
                            <i className="fab fa-whatsapp"></i>
                        </a>
                        <a href="#">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                        <a href="#">
                            <i className="fab fa-github"></i>
                        </a>
                    </div>
                    <p className="mt_25">
                        Developer by
                        <span className="f_color">Satayjit Biswas</span>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
