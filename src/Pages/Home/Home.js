import React from "react";
import About from "../About/About";
import Slider from "./Slider/Slider";
import "./Home.css";
import Services from "../Services/Services";
import Hotels from "../Hotels/Hotels";

const Home = () => {
	return (
		<>
			<section>
				<Slider></Slider>
			</section>
			<section id="about" className="about-area">
				<div className="container">
					<About></About>
				</div>
			</section>
			<section id="services" className="services-area">
				<div className="container">
					<Services></Services>
				</div>
			</section>
			<section id="hotels" className="hotels-area">
				<div className="container">
					<Hotels></Hotels>
				</div>
			</section>
		</>
	);
};

export default Home;
