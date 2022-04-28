import React from "react";
import { useNavigate } from "react-router-dom";
import "./Room.css";

const Room = ({ room }) => {
	const { _id, name, price, img } = room;
	const navigate = useNavigate();

	return (
		<div className="room">
			<img src={img} alt="" />
			<div className="room-details">
				<h2>{name}</h2>
				<h4>
					Price: $<span>{price}</span>
				</h4>
			</div>
			<button
				onClick={() => navigate("/order/" + _id)}
				className="details-btn cart-btn"
			>
				Booking Now
			</button>
		</div>
	);
};

export default Room;
