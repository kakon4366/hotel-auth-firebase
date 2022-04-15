import React from "react";
import "./SocialLogin.css";
import google from "../../../images/social/google.png";
import github from "../../../images/social/github.png";
import facebook from "../../../images/social/facebook.png";

const SocialLogin = () => {
	return (
		<div>
			<div className="separetor">
				<span>or</span>
			</div>
			<button className="details-btn singin-btn">
				<img height="30px" src={google} alt="" />
				<span>Signin With Google</span>
			</button>
			<button className="details-btn singin-btn">
				<img height="30px" src={github} alt="" />
				<span>Signin With Github</span>
			</button>
			<button className="details-btn singin-btn">
				<img height="30px" src={facebook} alt="" />
				<span>Signin With Facebook</span>
			</button>
		</div>
	);
};

export default SocialLogin;
