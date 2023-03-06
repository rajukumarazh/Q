import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
function RecentsCourse() {
	const [recents, setRecents] = useState();
	const allState = useSelector((state) => state);
	console.log('allStatse', allState);
	const [address, setAddress] = useState('');
	// const [coures, setCourse] = useState();
	let currentUser = localStorage.getItem('user_id');
	let jsonfy = JSON.parse(currentUser);

	async function fetchRecents() {
		let response = await axios.post('http://localhost:8000/getongoing', {
			user_id: jsonfy[0]?._id,
		});
		console.log('responseive', response.data.data);
		setRecents(() => response.data.data);
		let currCourse = allState?.levelUp.enrolled_courses.course.filter(
			(curr) => {
				if (curr.course_id === recents?.course_id) {
					return curr;
				}
			}
		);
		//  setCourse(()=>currCourse)
	}
	useEffect(() => {
		fetchRecents();
	}, []);
	// console.log('response', coures);
	function getNavigate(dt) {
		console.log('helloe', dt);
		<Navigate to={`${dt}`} />;
	}
	return (
		<div className=" grid grid-cols-4 gap-4 p-2 ">
			{allState?.levelUp?.sort_course?.map((curr, i, arr) => {
				return (
					<div className="h-50 " key={curr._id}>
						<div className="rounded-lg shadow-lg bg-white max-w-sm">
							{/* <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light"> */}
							<Link to="/js">
								<img
									className="rounded-t-lg h-52 w-full"
									src={
										curr.img == undefined
											? 'https://mdbootstrap.com/img/new/standard/nature/182.jpg'
											: curr.img
									}
									alt="not_found"
								/>
							</Link>

							<div className="p-5">
								<h5 className="text-gray-900 text-xl font-medium mb-2">
									{curr.name}
								</h5>
								{curr.description == undefined ? (
									<p className="text-gray-700 text-base mb-4">
										Some quick example text to build on the card title and make
										up the bulk of the card's content.
									</p>
								) : (
									<p className="text-gray-700 text-base mb-4">
										{' '}
										{curr.description}
									</p>
								)}

								<button
									type="button"
									value="js"
									onClick={(e) => setAddress(e.target.value)}
									className=" inline-block w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
								>
									Explore
								</button>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
}

export default RecentsCourse;
