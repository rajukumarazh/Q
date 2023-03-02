import React from 'react';
import { Link } from 'react-router-dom';
import Crousel from './Crousel';
import WebFooter from './WebFooter';
import CourseCard from '../Course/CourseCard';
import { useState } from 'react';
import {
	sortCourse,
	curr_user_course,
} from '../../../Redux/Toolkit/CourseSlice';
import { useDispatch } from 'react-redux';
// import Review from '../Review';
import Review from './Review';
import WithAuth from '../../WithAuth/WithAuth';
import axios from 'axios';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

function Home() {
	const [showcourse, setShowCourse] = useState(false);
	const dispatch = useDispatch();
	const allState = useSelector((state) => state);
	const [enrolled_courses, setEnrolled_course] = useState();
	let user_id = localStorage.getItem('user_id');
	let user = JSON.parse(user_id);
	console.log('suer', user);
	useEffect(() => {
		async function getEnrolledCourse() {
			axios
				.post('http://localhost:8000/getrelate', {
					user_id: user[0]?._id,
				})
				.then((result) => {
					setEnrolled_course(result);
					return result;
				});
		}
		getEnrolledCourse();

		// console.log('dts', enrolled_courses);
	}, []);
	if (enrolled_courses !== undefined) {
		dispatch(curr_user_course(enrolled_courses?.data));
	}
	console.log('dtsHomePage', enrolled_courses);
	return (
		<div>
			<section className="mb-40">
				<div className="text-center bg-gray-50 text-gray-800 py-24 px-6">
					<h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">
						Level up your experience <br />
						<span className="text-blue-600">for Industry</span>
					</h1>
					<a
						className="inline-block px-7 py-3 mr-2 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
						data-mdb-ripple="true"
						data-mdb-ripple-color="light"
						href="#!"
						role="button"
					>
						Get started
					</a>
					<a
						className="inline-block px-7 py-3 bg-transparent text-blue-600 font-medium text-sm leading-snug uppercase rounded hover:text-blue-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out"
						data-mdb-ripple="true"
						data-mdb-ripple-color="light"
						href="#!"
						role="button"
					>
						Learn more
					</a>
				</div>
				<div className="w-full">
					<Crousel />
				</div>
				<div className="flex justify-between">
					<h1 className="text-xl font-bold flex-start mt-5 ">
						World of courses
					</h1>
					<div className="relative p-2">
						<button
							onClick={() => setShowCourse(!showcourse)}
							id="dropdownHoverButton"
							data-dropdown-toggle="dropdownHover"
							style={{ width: '172px' }}
							data-dropdown-trigger="hover"
							className="text-white bg-gray-400 hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
							type="button"
						>
							Select Course
							<svg
								className="w-4 h-4 ml-2"
								aria-hidden="true"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M19 9l-7 7-7-7"
								></path>
							</svg>
						</button>

						{showcourse == true && (
							<div
								id="dropdownHover"
								className="z-10 mt-2 absolute  bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
							>
								<ul
									className="py-2 text-sm text-gray-700 dark:text-gray-200"
									aria-labelledby="dropdownHoverButton"
								>
									<li onClick={() => dispatch(sortCourse('Web-Development'))}>
										<p className="block px-4 py-2   hover:bg-gray-300 dark:hover:bg-gray-600 dark:hover:text-white">
											Web Development
										</p>
									</li>
									<li
										// onClick={() =>
										// 	setShowCourse(
										// 		!showcourse,
										// 	)
										// }
										onClick={() => dispatch(sortCourse('backend'))}
									>
										<p className="block px-4 py-2 hover:bg-gray-300 dark:hover:bg-gray-600 dark:hover:text-white">
											Back_End Development
										</p>
									</li>
									<li
										// onClick={() =>
										// 	setShowCourse(
										// 		!showcourse,
										// 	)
										// }
										onClick={() => dispatch(sortCourse('cloud'))}
									>
										<p className="block px-4 py-2 hover:bg-gray-300 dark:hover:bg-gray-600 dark:hover:text-white">
											Cloud Programming
										</p>
									</li>
									<li
										onClick={() => dispatch(sortCourse('database'))}
										// onClick={() =>
										// 	setShowCourse(
										// 		!showcourse,
										// 	)
										// }
									>
										<p className="block px-4 py-2 hover:bg-gray-300 dark:hover:bg-gray-600 dark:hover:text-white">
											Database
										</p>
									</li>
									<li
										// onClick={() =>
										// 	setShowCourse(
										// 		!showcourse,
										// 	)
										// }
										onClick={() => dispatch(sortCourse('all'))}
									>
										<p className="block px-4 py-2 hover:bg-gray-300 dark:hover:bg-gray-600 dark:hover:text-white">
											all courses
										</p>
									</li>
								</ul>
							</div>
						)}
					</div>
				</div>
				<CourseCard />
				{/* <Review name={"raju kumar"} />
				<Review name={"peter"} /> */}
				{/* <Review name={'hawkins'} /> */}
			</section>
		</div>
	);
}
export default WithAuth(Home);
