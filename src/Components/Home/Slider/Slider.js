import React from "react";
import bg_img from "../../../Assets/bg2.jpg";
import "./Slider.css";

const Slider = () => {
    return (
        <div>
            <div
                className="slider-area dark-slider-area"
                style={{ backgroundImage: `url(${bg_img})` }}
                id="home"
            >
                <div className="container">
                    <div className="slider-text mt_50">
                        <h5>Hello I'm</h5>
                        <h2
                            className="btn-name text-white"
                            data-text="Satayjit Biswas"
                        >
                            Satayjit Biswas
                        </h2>
                        <div>
                            <span className="creative mr_5">And Junior</span>
                            <span>
                                <a
                                    href="#"
                                    className="typewrite"
                                    data-period="2000"
                                    data-type='[  "Full Stack Developer ."]'
                                >
                                    <span className="wrap"></span>
                                </a>
                            </span>
                        </div>
                        <a
                            className="button"
                            target="_blank"
                            href="https://drive.google.com/file/d/14QKggrA5L74HLjJxyQMGmwcFaKvQHtET/view?fbclid=IwAR0-kC-Vww0ipmUtRbT0D2u1l1fd92mPS-YkirWHS2Tkctsz-bI_40vUsi8"
                        >
                            <span className="left_border"></span>
                            view Resume
                            <span className="right_border"></span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;
