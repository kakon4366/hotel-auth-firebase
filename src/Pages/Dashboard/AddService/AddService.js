import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import "./AddServices.css";

const AddService = () => {
	const [user] = useAuthState(auth);

	const handleAddService = (e) => {
		e.preventDefault();
		const name = e.target.name.value;
		const price = e.target.price.value;
		const img = e.target.photoUrl.value;
		const email = user.email;

		if (!name || !price || !img) {
			return toast.error("Please provide all input fields!");
		}

		const service = { name, email, price, img };

		fetch("https://calm-tor-81190.herokuapp.com/service", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(service),
		})
			.then((res) => res.json())
			.then((data) => {
				toast.success(data.message);
				e.target.reset();
			});
	};
	return (
		<div>
			<h2>Add Service</h2>
			<form onSubmit={handleAddService} className="service-field">
				<label htmlFor="name">Name</label>
				<input type="text" name="name" />
				<label htmlFor="price">Price</label>
				<input type="number" name="price" />
				<label htmlFor="photoUrl">Photo URL</label>
				<input type="text" name="photoUrl" />
				<input type="submit" value="Add Services" />
			</form>
		</div>
	);
};

export default AddService;
