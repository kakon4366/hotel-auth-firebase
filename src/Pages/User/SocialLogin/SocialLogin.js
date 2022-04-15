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
			<div className="social-btns">
				<button className="details-btn singin-btn">
					<img height="30px" src={google} alt="" />
				</button>
				<button className="details-btn singin-btn">
					<img height="30px" src={github} alt="" />
				</button>
				<button className="details-btn singin-btn">
					<img height="30px" src={facebook} alt="" />
				</button>
			</div>
		</div>
	);
};

export default SocialLogin;
