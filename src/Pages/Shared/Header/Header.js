import React from "react";
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
						<a href="/">Home</a>
						<a href="#about">About</a>
						<a href="/services">Services</a>
						<a href="/hotels">Hotels</a>
						<a href="/login">Login</a>
						<a className="register-btn" href="/register">
							Register
						</a>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;
