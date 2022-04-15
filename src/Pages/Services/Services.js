import React, { useEffect, useState } from "react";
import Room from "./Room/Room";
import "./Services.css";

const Services = () => {
	const [rooms, setrooms] = useState([]);

	useEffect(() => {
		fetch("hotel-services.json")
			.then((res) => res.json())
			.then((data) => setrooms(data));
	}, []);

	return (
		<div className="services">
			<h2 className="section-title">Services</h2>
			<div className="services-container">
				{rooms.map((room) => (
					<Room room={room} key={room.id}></Room>
				))}
			</div>
		</div>
	);
};

export default Services;
