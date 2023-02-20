import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Submission from './Submission';
import Question from './Question';
import Home from './Component/Pages/Home';
import Login from './Component/Pages/Login';
import Signup from './Component/Pages/Signup';
import WebFooter from './Component/Pages/WebFooter';
import ForgotPassword from './Component/Pages/ForgotPassword';
import { useSelector } from 'react-redux';
import Javascript from './Component/Pages/Javascript';
import Navigation from './Component/Pages/Navigation';
import AboutUs from './Component/Pages/AboutUs';
import CourseDetailsPage from './Component/Pages/CourseDetailsPage';
import Profile from './Component/Pages/Profile';
function App() {
	// const allState = useSelector((state) => state);
	// console.log('allStatse', allState);
	return (
		<div className="">
			<Navigation />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/forgotpassword" element={<ForgotPassword />} />
				<Route path="/submitted" element={<Submission />}></Route>
				<Route path="/js" element={<Javascript />}></Route>
				<Route path="/about" element={<AboutUs />}></Route>
				<Route path="/c_details" element={<CourseDetailsPage />}></Route>
				<Route path="/profile" element={<Profile />}></Route>
			</Routes>
			{/* <WebFooter /> */}
		</div>
	);
}

export default App;
