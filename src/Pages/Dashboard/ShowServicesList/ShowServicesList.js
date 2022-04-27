import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "./ShowServicesList.css";

const ShowServicesList = () => {
	const [services, setServices] = useState([]);
	const [serviceDelete, setServiceDelete] = useState(false);
	const [limit, setLimit] = useState(5);
	const [pages, setPages] = useState(0);
	const [pageCount, setPageCount] = useState();
	const [serviceCount, setServiceCount] = useState();

	useEffect(() => {
		fetch(
			`https://calm-tor-81190.herokuapp.com/servicelist?page=${pages}&limit=${limit}`
		)
			.then((res) => res.json())
			.then((data) => {
				setServices(data);
			});
	}, [serviceDelete, pages, limit]);

	useEffect(() => {
		fetch("https://calm-tor-81190.herokuapp.com/serviceListCount")
			.then((res) => res.json())
			.then((data) => {
				setServiceCount(data.count);
				setPageCount(Math.ceil(data.count / limit));
			});
	}, [limit]);

	const handleServiceDelete = (id) => {
		if (window.confirm("Are you sure delete this service?")) {
			const url = `https://calm-tor-81190.herokuapp.com/service/${id}`;
			fetch(url, {
				method: "DELETE",
			})
				.then((res) => res.json())
				.then((data) => {
					setServiceDelete(!serviceDelete);
					toast.success(data.message);
				});
		}
	};

	return (
		<div>
			<h2>Total Service: {serviceCount}</h2>
			<span>
				Service show {services.length} by {serviceCount}
			</span>
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
			{/* pagination */}
			<div className="pagination-area">
				{[...Array(pageCount).keys()].map((number) => (
					<button
						className={`page-btn ${pages === number ? "selected" : ""}`}
						onClick={() => setPages(number)}
						key={number}
					>
						{number + 1}
					</button>
				))}
				<select
					defaultValue={limit}
					onChange={(e) => setLimit(e.target.value)}
				>
					<option value="2">2</option>
					<option value="5">5</option>
					<option value="10">10</option>
					<option value="15">15</option>
				</select>
			</div>
		</div>
	);
};

export default ShowServicesList;
