import { React, useState } from 'react';
import { Navigate } from 'react-router-dom';
function WithAuth(Component) {
	let dt = localStorage.getItem('token');
	console.log('Hello Hoc', dt);
	const AuthRoute = () => {
		const isAuth = localStorage.getItem('token');
		if (isAuth == undefined) {
			return <Navigate to="/login" />;
		} else {
			return <Component />;
		}
	};

	return AuthRoute;
}
export default WithAuth;
