import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import auth from "../../firebase.init";
import useServices from "../../Hooks/useServices";
import "./Order.css";

const Order = () => {
	const [rooms] = useServices();
	const [user] = useAuthState(auth);
	const [bookingRoom, setBookingRoom] = useState("");

	const { serviceId } = useParams();
	const bookingRooms = rooms.find((room) => room._id === serviceId);

	useEffect(() => {
		setBookingRoom(bookingRooms?.name);
	}, [bookingRooms]);

	const handleOrder = (e) => {
		e.preventDefault();
	};

	return (
		<div className="container order-area">
			<h2>Place Your Order</h2>
			<form onSubmit={handleOrder} className="order-form">
				<input
					type="text"
					value={user?.displayName}
					name="name"
					placeholder="Your Name"
				/>
				<input
					type="email"
					value={user?.email}
					name="email"
					placeholder="Email Address"
					readOnly
					disabled
				/>
				<input
					type="text"
					value={bookingRoom}
					onChange={(e) => setBookingRoom(e.target.value)}
					name="room"
					placeholder="Your Booking Room"
				/>
				<input type="text" name="address" placeholder="Address" />
				<input type="text" name="phone" placeholder="Phone Numbar" />
				<input type="submit" value="Order Now" />
			</form>
		</div>
	);
};

export default Order;
