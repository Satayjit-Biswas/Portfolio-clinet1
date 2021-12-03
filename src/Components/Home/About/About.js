import React from "react";
import img from "../../../Assets/a.jpg";

const About = () => {
    return (
        <div className="about-area" id="about">
            <div className="container">
                <div className="about">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-lg-4 col-md-12 img-middle">
                            <div className="about-img">
                                <img src={img} alt="" className="img-fluid" />
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-12">
                            <div className="about-text">
                                <h3 className="mb_20">About Me</h3>
                                <p className="mb_20">
                                    I am <strong>Satayjit Biswas</strong>, web
                                    developer from Bangladesh. I have rich
                                    experience in web site design and building
                                    and Development, also I am good at Fishing
                                    Man. Recently I worked React site.
                                </p>
                                <div className="address">
                                    <span>Name</span>: Satayjit Biswas
                                </div>
                                <div className="address">
                                    <span>Age</span>: 22
                                </div>
                                <div className="address">
                                    <span>Address</span>: Rajbari , Dhaka ,
                                    Bangladesh
                                </div>
                                <div className="address">
                                    <span>Phone</span>:{" "}
                                    <a href="tel:01783100136">
                                        {" "}
                                        +8801783100136
                                    </a>
                                </div>
                                <div className="address">
                                    <span>Email</span>:{" "}
                                    <a href="mailto:satayjitbiswas1@gmail.com">
                                        satayjitbiswas1@gmail.com
                                    </a>
                                </div>
                                <div className="button_wap mt_40">
                                    <a
                                        href="https://drive.google.com/u/0/uc?id=14QKggrA5L74HLjJxyQMGmwcFaKvQHtET&export=download"
                                        className="button mr_15"
                                    >
                                        <span className="left_border"></span>
                                        download Resume
                                        <span className="right_border"></span>
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
