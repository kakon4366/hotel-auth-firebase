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
						<a href="/home">Home</a>
						<a href="/home/#about">About</a>
						<a href="/home/#services">Services</a>
						<a href="/home/#hotels">Hotels</a>
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
