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
		<section
			className="input-area"
			data-aos="zoom-in-up"
			data-aos-duration="300"
		>
			<div className="container">
				<div className="login-form">
					<h2>Login</h2>
					<form onSubmit={handleLogin}>
						<label htmlFor="email">E-mail Address</label>
						<input
							type="email"
							name="email"
							placeholder="E-mail Address"
							required
						/>
						<label htmlFor="password">Password</label>
						<input
							type="password"
							name="password"
							placeholder="Password"
							required
						/>
						<span>{error ? error.message : ""}</span>
						<input
							type="submit"
							value={loading ? "Loading..." : "Login"}
							className="details-btn"
						/>
					</form>
					<SocialLogin></SocialLogin>
				</div>
			</div>
		</section>
	);
};

export default Login;
