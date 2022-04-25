import React from "react";
import About from "../About/About";
import Slider from "./Slider/Slider";
import "./Home.css";
import Services from "../Services/Services";
import Hotels from "../Hotels/Hotels";

const Home = () => {
	return (
		<div id="home">
			<section>
				<Slider></Slider>
			</section>
			<About></About>
			<Services></Services>
			<Hotels></Hotels>
		</div>
	);
};

export default Home;
