import React from "react";
import "./AddServices.css";
const AddService = () => {
	return (
		<div>
			<h2>Add Service</h2>
			<div className="service-field">
				<label htmlFor="name">Name</label>
				<input type="text" name="name" />
				<label htmlFor="price">Price</label>
				<input type="number" name="price" />
				<label htmlFor="photoUrl">Photo URL</label>
				<input type="text" name="photoUrl" />
				<input type="submit" value="Add Services" />
			</div>
		</div>
	);
};

export default AddService;
