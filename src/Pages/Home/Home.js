import React from "react";
import About from "../About/About";
import Slider from "./Slider/Slider";
import "./Home.css";

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
		</>
	);
};

export default Home;
