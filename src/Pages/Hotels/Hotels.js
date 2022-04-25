import React, { useEffect, useState } from "react";
import Hotel from "./Hotel/Hotel";
import "./Hotels.css";

const Hotels = () => {
	const [hotels, setHotels] = useState([]);

	useEffect(() => {
		fetch("hotel-data.json")
			.then((res) => res.json())
			.then((data) => setHotels(data));
	}, []);

	return (
		<section
			id="hotels"
			className="hotels-area"
			data-aos="slide-left"
			data-aos-duration="500"
		>
			<div className="container">
				<div className="hotels">
					<h2 className="section-title">Hotels</h2>
					<div className="hotels-container">
						{hotels.map((hotel) => (
							<Hotel hotel={hotel} key={hotel.id}></Hotel>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hotels;
