import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Submission from './Submission';
import Question from './Question';
import Home from './Component/Pages/Scratch/Home';
import Login from './Component/Pages/Authentication/Login';
import Signup from './Component/Pages/Authentication/Signup';
import WebFooter from './Component/Pages/Scratch/WebFooter';
import ForgotPassword from './Component/Pages/Authentication/ForgotPassword';
import { useSelector } from 'react-redux';
// import Javascript from './Component/Pages/Course/Javascript';
import Javascript from './Component/Pages/Course/Type/Javascript';
import Navigation from './Component/Pages/Scratch/Navigation';
import AboutUs from './Component/Pages/Scratch/AboutUs';
import CourseDetailsPage from './Component/Pages/Course/CourseDetailsPage';

import User from './Component/Pages/User';
import ViewCourse from './Component/Pages/Course/ViewCourse';
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
				<Route path="/user" element={<User />}></Route>
				<Route path="/view" element={<ViewCourse />}></Route>
			</Routes>
			{/* <WebFooter /> */}
		</div>
	);
}

export default App;
