import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Submission from './Submission';
import Question from './Question';
import Home from './Component/Pages/Home';
import Login from './Component/Pages/Login';
import Signup from './Component/Pages/Signup';
import WebFooter from './Component/Pages/WebFooter';
import ForgotPassword from './Component/Pages/ForgotPassword';
function App() {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/forgotpassword" element={<ForgotPassword />} />
				<Route path="/submitted" element={<Submission />}></Route>
			</Routes>
			<WebFooter />
		</div>
	);
}

export default App;
