import React from "react";
import { useParams } from "react-router-dom";
import useServices from "../../Hooks/useServices";

const Order = () => {
	const [rooms] = useServices();
	const { serviceId } = useParams();

	localStorage.setItem("bookingroom", JSON.stringify(serviceId));

	// const bookingRooms = rooms.find((room) => room._id === serviceId);

	// console.log(bookingRooms);

	return (
		<div>
			<h2>This is Order Page Here! {serviceId}</h2>
		</div>
	);
};

export default Order;
