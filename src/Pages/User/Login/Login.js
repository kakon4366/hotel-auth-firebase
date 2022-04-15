import React from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";
import "./Login.css";

const Login = () => {
	const [signInWithEmailAndPassword, user, loading, error] =
		useSignInWithEmailAndPassword(auth);

	const navigate = useNavigate();
	const location = useLocation();

	let from = location.state?.from?.pathname || "/";

	if (user) {
		navigate(from, { replace: true });
	}

	const handleLogin = (e) => {
		e.preventDefault();
		const email = e.target.email.value;
		const password = e.target.password.value;

		signInWithEmailAndPassword(email, password);
	};

	return (
		<section className="input-area">
			<div className="container">
				<div className="login-form">
					<h2>Login</h2>
					<form onSubmit={handleLogin}>
						<label htmlFor="email">E-mail Address</label>
						<input
							type="email"
							name="email"
							placeholder="E-mail Address"
						/>
						<label htmlFor="password">Password</label>
						<input
							type="password"
							name="password"
							placeholder="Password"
						/>
						<div className="trams-condition">
							<input type="checkbox" name="check" id="check" />
							<label htmlFor="check">
								<small>Agree Trams and Condition KB-Hotel</small>
							</label>
						</div>
						<input type="submit" value="Login" className="details-btn" />
						<SocialLogin></SocialLogin>
					</form>
				</div>
			</div>
		</section>
	);
};

export default Login;
