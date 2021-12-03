import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./Contact.css";

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(
                "service_hupnves",
                "template_sm9tbqj",
                form.current,
                "user_0336uhTvBF5wveNXta9E4"
            )
            .then(
                (res) => {
                    toast.success("Successful Your Contact...");
                },
                (error) => {
                    toast.error(error.text);
                }
            );
        e.target.reset();
    };
    return (
        <div className="contact-area" id="contact">
            <div className="container">
                <div className="contact">
                    <div className="contact-text">
                        <h4 className="text-center">
                            <span className="text-wrapper">Contact Me</span>
                        </h4>
                    </div>
                    <form ref={form} onSubmit={sendEmail}>
                        <div className="row">
                            <div className="col-md-6">
                                <input
                                    name="name"
                                    type="text"
                                    placeholder="Your Name"
                                    className="inputbox"
                                    required
                                />
                            </div>
                            <div className="col-md-6">
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="inputbox"
                                    name="useremail"
                                    required
                                />
                            </div>
                            <div className="col-12">
                                <textarea
                                    name="reply_to"
                                    className="inputbox"
                                    placeholder="message"
                                ></textarea>
                            </div>

                            <div className="col-12 text-center">
                                <p id="my-form-status"></p>
                                <button
                                    type="submit"
                                    className="button mt-3"
                                    value="Submit"
                                    id="my-form"
                                >
                                    <span className="left_border"></span> Send
                                    Message{" "}
                                    <span className="right_border"></span>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Contact;
