import React from "react";
import "./AddServices.css";
const AddService = () => {
	const handleAddService = (e) => {
		e.preventDefault();
		const name = e.target.name.value;
		const price = e.target.price.value;
		const img = e.target.photoUrl.value;

		const service = { name, price, img };

		fetch("", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(service),
		})
			.then((res) => res.json)
			.then((data) => console.log(data));
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
