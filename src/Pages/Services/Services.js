import React from "react";
import useServices from "../../Hooks/useServices";
import Room from "./Room/Room";
import "./Services.css";

const Services = () => {
	const [rooms] = useServices();

	return (
		<section
			id="services"
			className="services-area"
			data-aos="slide-right"
			data-aos-duration="500"
		>
			<div className="container">
				<div className="services">
					<h2 className="section-title">Services</h2>
					<div className="services-container">
						{rooms.map((room) => (
							<Room room={room} key={room.id}></Room>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Services;
