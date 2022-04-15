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
		<div className="hotels">
			<h2 className="section-title">Hotels</h2>
			<div className="hotels-container">
				{hotels.map((hotel) => (
					<Hotel hotel={hotel} key={hotel.id}></Hotel>
				))}
			</div>
		</div>
	);
};

export default Hotels;
