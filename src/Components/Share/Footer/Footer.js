import React from "react";
import img from "../../../Assets/logo.png";

const Footer = () => {
    return (
        <footer class="footer-area">
            <div class="container">
                <div class="footer-text text-center">
                    <div class="footer-img dark-footer-img">
                        <img src={img} alt="" class="img-fluid" />
                    </div>
                    <div class="footer-icon">
                        <a href="#">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                        <a href="#">
                            <i class="fab fa-twitter"></i>
                        </a>
                        <a href="#">
                            <i class="fab fa-whatsapp"></i>
                        </a>
                        <a href="#">
                            <i class="fab fa-linkedin-in"></i>
                        </a>
                        <a href="#">
                            <i class="fab fa-github"></i>
                        </a>
                    </div>
                    <p class="mt_25">
                        Developer by
                        <span class="f_color">Satayjit Biswas</span>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
