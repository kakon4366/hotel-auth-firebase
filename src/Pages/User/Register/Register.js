import React from "react";
import SocialLogin from "../SocialLogin/SocialLogin";

const Register = () => {
	return (
		<section className="input-area">
			<div className="container">
				<div className="login-form">
					<h2>Register</h2>
					<form action="">
						<label htmlFor="name">Full Name</label>
						<input type="name" placeholder="Full Name" />
						<label htmlFor="email">E-mail Address</label>
						<input type="email" placeholder="E-mail Address" />
						<label htmlFor="password">Password</label>
						<input type="password" placeholder="Password" />
						<label htmlFor="confirm-password">Confirm Password</label>
						<input type="password" placeholder="Confirm Password" />
						<div className="trams-condition">
							<input type="checkbox" name="check" id="check" />
							<label htmlFor="check">
								<small>Agree Trams and Condition KB-Hotel</small>
							</label>
						</div>
						<input type="button" value="Login" className="details-btn" />
						<SocialLogin></SocialLogin>
					</form>
				</div>
			</div>
		</section>
	);
};

export default Register;
