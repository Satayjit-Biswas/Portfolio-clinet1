import React from "react";
import img from "../../../Assets/counterimg.jpg";

const Counter = () => {
    return (
        <div class="counter-area" style={{ backgroundImage: `url(${img})` }}>
            <div class="counter">
                <div class="container">
                    <div class="row">
                        <div class="col-md-3 col-6">
                            <div class="counter-box text-center">
                                <i class="fal fa-user"></i>
                                <span class="count-up">6</span>
                                <h3>Happy Clients</h3>
                            </div>
                        </div>
                        <div class="col-md-3 col-6">
                            <div class="counter-box text-center">
                                <i class="fal fa-handshake"></i>
                                <span class="count-up">12</span>
                                <h3>Project Done</h3>
                            </div>
                        </div>
                        <div class="col-md-3 col-6">
                            <div class="counter-box text-center">
                                <i class="fal fa-comment-alt-smile"></i>
                                <span class="count-up">30</span>
                                <h3>Total Review</h3>
                            </div>
                        </div>
                        <div class="col-md-3 col-6">
                            <div class="counter-box text-center">
                                <i class="fal fa-history"></i>
                                <span class="count-up">128</span>
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
