import React from "react";
import "./Room.css";

const Room = ({ room }) => {
	const { name, price, img } = room;
	return (
		<div className="room">
			<img src={img} alt="" />
			<div className="room-details">
				<h2>{name}</h2>
				<h4>
					Price: $<span>{price}</span>
				</h4>
			</div>
			<button className="details-btn cart-btn">Booking Now</button>
		</div>
	);
};

export default Room;
