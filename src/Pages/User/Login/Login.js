import React from "react";
import "./Login.css";

const Login = () => {
	return (
		<section className="input-area">
			<div className="container">
				<div className="login-form">
					<h2>Login</h2>
					<form action="">
						<label htmlFor="email">E-mail Address</label>
						<input type="email" placeholder="E-mail Address" />
						<label htmlFor="password">Password</label>
						<input type="password" placeholder="Password" />
						<div className="trams-condition">
							<input type="checkbox" name="check" id="check" />
							<label htmlFor="check">
								<small>Agree Trams and Condition KB-Hotel</small>
							</label>
						</div>
						<input type="button" value="Login" className="details-btn" />
					</form>
				</div>
			</div>
		</section>
	);
};

export default Login;
