import React from "react";
import "./Hotel.css";

const Hotel = ({ hotel }) => {
	const { img, name } = hotel;
	return (
		<div className="hotel">
			<img height="100%" width="100%" src={img} alt="" />
			<div className="hotel-name">
				<h3>{name}</h3>
			</div>
		</div>
	);
};

export default Hotel;
