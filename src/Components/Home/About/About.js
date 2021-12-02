import React from "react";
import img from "../../../Assets/a.jpg";

const About = () => {
    return (
        <div class="about-area" id="about">
            <div class="container">
                <div class="about">
                    <div class="row justify-content-center align-items-center">
                        <div class="col-lg-4 col-md-12 img-middle">
                            <div class="about-img">
                                <img src={img} alt="" class="img-fluid" />
                            </div>
                        </div>
                        <div class="col-lg-7 col-md-12">
                            <div class="about-text">
                                <h3 class="mb_20">About Me</h3>
                                <p class="mb_20">
                                    I am <strong>Satayjit Biswas</strong>, web
                                    developer from Bangladesh. I have rich
                                    experience in web site design and building
                                    and customization, also I am good at
                                    WordPress.
                                </p>
                                <div class="address">
                                    <span>Name</span>: Satayjit Biswas
                                </div>
                                <div class="address">
                                    <span>Age</span>: 22
                                </div>
                                <div class="address">
                                    <span>Address</span>: Rajbari , Dhaka ,
                                    Bangladesh
                                </div>
                                <div class="address">
                                    <span>Phone</span>:{" "}
                                    <a href="tel:01783100136">
                                        {" "}
                                        +8801783100136
                                    </a>
                                </div>
                                <div class="address">
                                    <span>Email</span>:{" "}
                                    <a href="mailto:satayjitbiswas1@gmail.com">
                                        satayjitbiswas1@gmail.com
                                    </a>
                                </div>
                                <div class="button_wap mt_40">
                                    <a
                                        href="https://drive.google.com/u/0/uc?id=14QKggrA5L74HLjJxyQMGmwcFaKvQHtET&export=download"
                                        class="button mr_15"
                                    >
                                        <span class="left_border"></span>
                                        download Resume
                                        <span class="right_border"></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
