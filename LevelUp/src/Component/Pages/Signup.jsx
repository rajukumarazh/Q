import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import WithAuth from '../WithAuth/WithAuth';
function Signup() {
	const [signUpDetails, SetSignUpDetails] = useState({
		email: '',
		password: '',
	});
	const [Registered, setRegistered] = useState(false);
	console.log('data', signUpDetails);
	let handleSubmit = async (e) => {
		e.preventDefault();
		// dispatch(createUser(signUp));
		let ar = await axios
			.post('http://localhost:8000/signup', signUpDetails)
			.then((res) => res);
		console.log('postedData', ar);
		setRegistered(true);
	};
	return (
		<div className="flex justify-between ">
			<div className="h-screen bg-gradient-to-br from-blue-200 to-indigo-600 flex justify-center items-center w-full">
				<div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
					<img
						src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-htmlForm/draw2.webp"
						className="w-full"
						alt="Sample image"
					/>
				</div>
				{/* <htmlForm> */}
				<div className="bg-white px-10 py-8 rounded-xl w-screen shadow-md max-w-sm">
					<div className="space-y-4">
						<h1 className="text-center text-2xl font-semibold text-gray-600">
							all starting from here
						</h1>
						{/* <div>
								<label
									htmlFor="email"
									className="block mb-1 text-gray-600 font-semibold"
								>
									Username
								</label>
								<input
									type="text"
									className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full border-4"
								/>
							</div> */}
						<div>
							<label
								htmlFor="email"
								className="block mb-1 text-gray-600 font-semibold"
							>
								Email
							</label>
							<input
								type="text"
								onChange={(e) =>
									SetSignUpDetails({ ...signUpDetails, email: e.target.value })
								}
								className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full border-4"
							/>
						</div>
						<div>
							<label
								htmlFor="email"
								className="block mb-1 text-gray-600 font-semibold"
							>
								Password
							</label>
							<input
								type="text"
								onChange={(e) =>
									SetSignUpDetails({
										...signUpDetails,
										password: e.target.value,
									})
								}
								className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full border-4"
							/>
						</div>
					</div>
					<button
						onClick={(e) => handleSubmit(e)}
						className="mt-4 w-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-indigo-100 py-2 rounded-md text-lg tracking-wide"
					>
						Register
					</button>
					{Registered == true && (
						<p className="text-red-400">
							You are successfully Registered{' '}
							<Link to="/login" className="underline text-blue">
								click to login
							</Link>
						</p>
					)}
				</div>
				{/* </htmlForm> */}
			</div>
		</div>
	);
}

export default Signup;
