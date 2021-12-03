import React from "react";
import img from "../../../Assets/counterimg.jpg";

const Counter = () => {
    return (
        <div
            className="counter-area"
            style={{ backgroundImage: `url(${img})` }}
        >
            <div className="counter">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-6">
                            <div className="counter-box text-center">
                                <i className="fal fa-user"></i>
                                <span className="count-up">6</span>
                                <h3>Happy Clients</h3>
                            </div>
                        </div>
                        <div className="col-md-3 col-6">
                            <div className="counter-box text-center">
                                <i className="fal fa-handshake"></i>
                                <span className="count-up">12</span>
                                <h3>Project Done</h3>
                            </div>
                        </div>
                        <div className="col-md-3 col-6">
                            <div className="counter-box text-center">
                                <i className="fal fa-comment-alt-smile"></i>
                                <span className="count-up">30</span>
                                <h3>Total Review</h3>
                            </div>
                        </div>
                        <div className="col-md-3 col-6">
                            <div className="counter-box text-center">
                                <i className="fal fa-history"></i>
                                <span className="count-up">128</span>
                                <h3>Working Hours</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Counter;
