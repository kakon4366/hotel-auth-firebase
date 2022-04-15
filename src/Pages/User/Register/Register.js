import React from "react";
import SocialLogin from "../SocialLogin/SocialLogin";
import {
	useCreateUserWithEmailAndPassword,
	useSendEmailVerification,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useNavigate } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";

const Register = () => {
	const [createUserWithEmailAndPassword, user, loading, error] =
		useCreateUserWithEmailAndPassword(auth);

	const [sendEmailVerification, sending, varificationError] =
		useSendEmailVerification(auth);

	const navigate = useNavigate();

	if (sending) {
		return <Loading></Loading>;
	}

	const handleSubmit = async (e) => {
		e.preventDefault();
		const name = e.target.name.value;
		const email = e.target.email.value;
		const password = e.target.password.value;
		const confirmPassword = e.target.confirmpassword.value;

		if (password === confirmPassword) {
			createUserWithEmailAndPassword(email, password);
			navigate("/home");
			if (email) {
				await sendEmailVerification();
			}
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
							<input type="checkbox" name="check" id="check" />
							<label htmlFor="check">
								<small>Agree Trams and Condition KB-Hotel</small>
							</label>
						</div>
						<input
							type="submit"
							value="Register"
							className="details-btn"
						/>
						<SocialLogin></SocialLogin>
					</form>
				</div>
			</div>
		</section>
	);
};

export default Register;
