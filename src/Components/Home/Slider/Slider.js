import React from "react";
import bg_img from "../../../Assets/bg2.jpg";
import "./Slider.css";

const Slider = () => {
    return (
        <div>
            <div class="slider-area dark-slider-area" id="home">
                <div class="container">
                    <div class="slider-text mt_50">
                        <h5>Hello I'm</h5>
                        <h2
                            class="btn-name text-white"
                            data-text="Satayjit Biswas"
                        >
                            Satayjit Biswas
                        </h2>
                        <div>
                            <span class="creative">And Junior </span>
                            <span>
                                <a
                                    href="#"
                                    class="typewrite"
                                    data-period="2000"
                                    data-type='[  " Full Stack Developer ."]'
                                >
                                    <span class="wrap"></span>
                                </a>
                            </span>
                        </div>
                        <a
                            class="button"
                            target="_blank"
                            href="https://drive.google.com/file/d/14QKggrA5L74HLjJxyQMGmwcFaKvQHtET/view?fbclid=IwAR0-kC-Vww0ipmUtRbT0D2u1l1fd92mPS-YkirWHS2Tkctsz-bI_40vUsi8"
                        >
                            <span class="left_border"></span>
                            view Resume
                            <span class="right_border"></span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;
