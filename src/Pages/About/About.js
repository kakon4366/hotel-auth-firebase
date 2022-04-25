import React from "react";
import "./About.css";
import profilePhoto from "../../images/kakon.jpg";

const About = () => {
	return (
		<section
			id="about"
			className="about-area"
			data-aos="slide-down"
			data-aos-duration="500"
		>
			<div className="container">
				<div className="about">
					<h2 className="section-title">About Us</h2>
					<div className="profile-details">
						<div className="profile-photo">
							<img width="300px" src={profilePhoto} alt="" />
						</div>
						<div className="profile-content">
							<h3>Kakon Barman</h3>
							<small>Founder, KB-Hotel</small>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Ullam, qui. Architecto officiis omnis, repudiandae
								numquam voluptas dolore! Accusantium veritatis
								voluptatibus deserunt fugiat amet saepe dolore eos non
								debitis pariatur voluptas corrupti, quo impedit
								explicabo odit cupiditate libero nobis eum voluptate
								blanditiis nostrum perferendis? Quam ratione modi ut.
								Possimus, quo voluptatibus?
							</p>
							<button className="details-btn">Learn More</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
