import React from "react";
import About from "../About/About";
import Slider from "./Slider/Slider";
import "./Home.css";
import Services from "../Services/Services";
import Hotels from "../Hotels/Hotels";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Home = () => {
	return (
		<div id="home">
			<section data-aos="slide-down" data-aos-duration="500">
				<Slider></Slider>
			</section>
			<section data-aos="slide-left" data-aos-duration="500">
				<About></About>
			</section>
			<section data-aos="slide-right" data-aos-duration="500">
				<Services></Services>
			</section>
			<section data-aos="slide-left" data-aos-duration="500">
				<Hotels></Hotels>
			</section>
		</div>
	);
};

export default Home;
