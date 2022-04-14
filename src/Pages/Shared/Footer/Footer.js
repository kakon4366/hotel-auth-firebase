import React from "react";
import "./Footer.css";

const Footer = () => {
	const date = new Date();
	const year = date.getFullYear();

	return (
		<footer className="footer">
			<small>Copyright &copy; {year}</small>
		</footer>
	);
};

export default Footer;
