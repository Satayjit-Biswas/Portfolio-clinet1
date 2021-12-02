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
        <div class="contact-area" id="contact">
            <div class="container">
                <div class="contact">
                    <div class="contact-text">
                        <h4 class="text-center">
                            <span class="text-wrapper">Contact Me</span>
                        </h4>
                    </div>
                    <form ref={form} onSubmit={sendEmail}>
                        <div class="row">
                            <div class="col-md-6">
                                <input
                                    name="name"
                                    type="text"
                                    placeholder="Your Name"
                                    class="inputbox"
                                    required
                                />
                            </div>
                            <div class="col-md-6">
                                <input
                                    type="email"
                                    placeholder="Email"
                                    class="inputbox"
                                    name="useremail"
                                    required
                                />
                            </div>
                            <div class="col-12">
                                <textarea
                                    name="reply_to"
                                    class="inputbox"
                                    placeholder="message"
                                ></textarea>
                            </div>

                            <div class="col-12 text-center">
                                <p id="my-form-status"></p>
                                <button
                                    type="submit"
                                    class="button mt-3"
                                    value="Submit"
                                    id="my-form"
                                >
                                    <span class="left_border"></span> Send
                                    Message <span class="right_border"></span>
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
