import React, { useEffect, useState } from "react";
import "./ShowServicesList.css";

const ShowServicesList = () => {
	const [services, setServices] = useState([]);

	useEffect(() => {
		fetch("http://localhost:5000/service")
			.then((res) => res.json())
			.then((data) => setServices(data));
	}, []);

	const handleServiceDelete = (id) => {
		if (window.confirm("Are you sure delete this service?")) {
			const url = `http://localhost:5000/service/${id}`;
			fetch(url, {
				method: "DELETE",
			})
				.then((res) => res.json())
				.then((data) => {
					console.log(data);
				});
		}
	};

	return (
		<div>
			<h2>Total Service: {services.length}</h2>
			<table className="service-list">
				<thead>
					<tr>
						<th>Service Name</th>
						<th>Service Price</th>
						<th>Service Image</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{services.map((service) => (
						<tr key={service._id}>
							<td>{service.name}</td>
							<td>{service.price}</td>
							<td>
								<img height="84px" src={service.img} alt="" />
							</td>
							<td>
								<button>Edit</button>
								<button
									onClick={() => handleServiceDelete(service._id)}
								>
									Delete
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default ShowServicesList;
