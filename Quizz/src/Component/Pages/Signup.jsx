import React from 'react';
import { Link } from 'react-router-dom';
function Signup() {
	return (
		<div className="flex justify-between ">
			<div className="h-screen bg-gradient-to-br from-blue-200 to-indigo-600 flex justify-center items-center w-full">
				<div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
					<img
						src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
						className="w-full"
						alt="Sample image"
					/>
				</div>
				<form>
					<div className="bg-white px-10 py-8 rounded-xl w-screen shadow-md max-w-sm">
						<div className="space-y-4">
							<h1 className="text-center text-2xl font-semibold text-gray-600">
								all starting from here
							</h1>
							<div>
								<label
									for="email"
									className="block mb-1 text-gray-600 font-semibold"
								>
									Username
								</label>
								<input
									type="text"
									className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full border-4"
								/>
							</div>
							<div>
								<label
									for="email"
									className="block mb-1 text-gray-600 font-semibold"
								>
									Email
								</label>
								<input
									type="text"
									className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full border-4"
								/>
							</div>
							<div>
								<label
									for="email"
									className="block mb-1 text-gray-600 font-semibold"
								>
									Password
								</label>
								<input
									type="text"
									className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full border-4"
								/>
							</div>
						</div>
						<button className="mt-4 w-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-indigo-100 py-2 rounded-md text-lg tracking-wide">
							Register
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default Signup;
