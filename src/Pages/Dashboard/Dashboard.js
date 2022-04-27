import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./Dashboard.css";
import { PlusIcon, BookmarkIcon } from "@heroicons/react/solid";

const Dashboard = () => {
	return (
		<div className="container ">
			<div className="dashboard-area">
				<div className="side-bar">
					<h2>Panel</h2>
					<div className="dashboard-menu">
						<Link to="dashboard-summery" className="services-link">
							<BookmarkIcon className="dashboard-icon" />
							<span>Dashboard</span>
						</Link>
						<Link to="add-service" className="services-link">
							<PlusIcon className="dashboard-icon" />
							<span>Add Service</span>
						</Link>
					</div>
				</div>
				<div className="side-bar show-routes">
					<Outlet></Outlet>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
