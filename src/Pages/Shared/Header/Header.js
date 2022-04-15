import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import logo from "../../../images/logo.png";
import "./Header.css";

const Header = () => {
	const [user] = useAuthState(auth);

	const handleLogout = () => {
		signOut(auth);
	};

	return (
		<header className="header-area">
			<div className="container">
				<nav className="nav-bar">
					<div className="logo">
						<img height="80px" src={logo} alt="" />
					</div>
					<ul>
						<Link to="/home">Home</Link>
						<Link to="/home/#about">About</Link>
						<Link to="/home/#services">Services</Link>
						<Link to="/home/#hotels">Hotels</Link>
						<Link to="/dashboard">Dashboard</Link>
						{user ? (
							<>
								<button onClick={handleLogout} className="logout-btn">
									Logout
								</button>
							</>
						) : (
							<>
								<Link to="/login">Login</Link>
								<Link className="register-btn" to="/register">
									Register
								</Link>
							</>
						)}
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;
