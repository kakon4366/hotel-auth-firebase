import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../../firebase.init";

const RequireAuth = ({ children }) => {
	const [user, loadding] = useAuthState(auth);

	const location = useLocation();

	if (loadding) {
		return <h1>Loadding...</h1>;
	}

	if (!user) {
		return (
			<Navigate to="/login" state={{ from: location }} replace></Navigate>
		);
	}
	return children;
};

export default RequireAuth;
