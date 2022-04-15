import React, { useState } from "react";
import SocialLogin from "../SocialLogin/SocialLogin";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useNavigate } from "react-router-dom";

const Register = () => {
	const [agree, setAgree] = useState(false);
	const [createUserWithEmailAndPassword, user, loading, error] =
		useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		const name = e.target.name.value;
		const email = e.target.email.value;
		const password = e.target.password.value;
		const confirmPassword = e.target.confirmpassword.value;

		if (password === confirmPassword) {
			createUserWithEmailAndPassword(email, password);
			navigate("/home");
		}
	};

	return (
		<section className="input-area">
			<div className="container">
				<div className="login-form">
					<h2>Register</h2>
					<form onSubmit={handleSubmit}>
						<label htmlFor="name">Full Name</label>
						<input type="name" name="name" placeholder="Full Name" />
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
						<label htmlFor="confirm-password">Confirm Password</label>
						<input
							type="password"
							name="confirmpassword"
							placeholder="Confirm Password"
						/>
						<div className="trams-condition">
							<input
								onClick={() => setAgree(!agree)}
								type="checkbox"
								name="trams"
								id="trams"
							/>
							<label htmlFor="trams">
								<small>Agree Trams and Condition KB-Hotel</small>
							</label>
						</div>
						<input
							disabled={!agree}
							type="submit"
							value="Register"
							className={!agree ? "disable-btn" : "details-btn"}
						/>
						<SocialLogin></SocialLogin>
					</form>
				</div>
			</div>
		</section>
	);
};

export default Register;
