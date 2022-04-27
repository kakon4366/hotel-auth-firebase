import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
	return (
		<div className="container ">
			<div className="dashboard-area">
				<div className="side-bar">
					<h2>Dashboard</h2>
					<div className="dashboard-menu">
						<Link to="add-service">Add User</Link>
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
