import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../images/logo.png";
import "./Header.css";

const Header = () => {
	return (
		<header className="header-area">
			<div className="container">
				<nav className="nav-bar">
					<div className="logo">
						<img height="80px" src={logo} alt="" />
					</div>
					<ul>
						<Link to="/">Home</Link>
						<Link to="/home/#about">About</Link>
						<Link to="#services">Services</Link>
						<Link to="/hotels">Hotels</Link>
						<Link to="/login">Login</Link>
						<Link className="register-btn" to="/register">
							Register
						</Link>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;
