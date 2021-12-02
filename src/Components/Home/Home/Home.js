import React from "react";
import Header from "../../Share/Header/Header";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Counter from "../Counter/Counter";
import Project from "../Project/Project";
import Service from "../Service/Service";
import Slider from "../Slider/Slider";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Slider></Slider>
            <About></About>
            <Service></Service>
            <Counter></Counter>
            <Project></Project>
            <Contact></Contact>
        </div>
    );
};

export default Home;
