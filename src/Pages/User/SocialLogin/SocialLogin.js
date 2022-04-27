import React from "react";
import "./SocialLogin.css";
import google from "../../../images/social/google.png";
import github from "../../../images/social/github.png";
import facebook from "../../../images/social/facebook.png";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
	const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
	const navigate = useNavigate();
	const location = useLocation();

	let from = location.state?.from?.pathname || "/";

	if (user) {
		navigate(from, { replace: true });
	}

	return (
		<div>
			<div className="separetor">
				<span>or</span>
			</div>
			<div className="social-btns">
				<button
					onClick={() => signInWithGoogle()}
					className="details-btn singin-btn"
				>
					<img height="30px" src={google} alt="" />
				</button>
				<button className="details-btn singin-btn">
					<img height="30px" src={github} alt="" />
					<br />
					<span>comming soon</span>
				</button>
				<button className="details-btn singin-btn">
					<img height="30px" src={facebook} alt="" />
					<br />
					<span>comming soon</span>
				</button>
			</div>
		</div>
	);
};

export default SocialLogin;
