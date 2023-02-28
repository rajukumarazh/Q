import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
function ProfileSidebar() {
	let navigate = useNavigate();
	function logOut() {
		localStorage.removeItem('token');
		navigate('/login');
	}
	return (
		<div className="relative">
			{/* <!-- component --> */}
			{/* <link
				rel="stylesheet"
				href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css"
			/> */}

			<div className="min-h-md flex flex-row bg-gray-100  absolute right-0  z-100 ">
				<div className="flex flex-col w-40  rounded-r-3xl overflow-hidden ">
					<ul className="flex flex-col py-4 ">
						<li>
							<Link
								to={'/'}
								className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
							>
								<span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
									<i className="bx bx-home"></i>
								</span>
								<span className="text-sm font-medium">Dashboard</span>
							</Link>
						</li>
						<li>
							<Link
								to={'/'}
								className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
							>
								<span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
									<i className="bx bx-log-out"></i>
								</span>
								<span className="text-sm font-medium">failed payment</span>
							</Link>
						</li>

						<li>
							<Link
								to={'/user'}
								className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
							>
								<span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
									<i className="bx bx-log-out"></i>
								</span>
								<span className="text-sm font-medium">Profile</span>
							</Link>
						</li>
						<li>
							<button
								onClick={() => logOut()}
								className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
							>
								<span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
									<i className="bx bx-log-out"></i>
								</span>
								<span className="text-sm font-medium">Logout</span>
							</button>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default ProfileSidebar;
