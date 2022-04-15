import React from "react";
import About from "../About/About";
import Slider from "./Slider/Slider";
import "./Home.css";
import Services from "../Services/Services";

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
		</>
	);
};

export default Home;
