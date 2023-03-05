import React from "react";
import { Link } from "react-router-dom";
import Question from "./QuizzeTrivia/Question";
import Submission from "./QuizzeTrivia/Submission";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { current } from "@reduxjs/toolkit";
import { handleQuizzData } from "../../Redux/Toolkit/QuizzSlice";
import { useDispatch } from "react-redux";
function OnGoingCourse() {
	let dispatch = useDispatch();
	let allState = useSelector((state) => state);
	console.log("allStateOngoing", allState);
	const location = useLocation();
	console.log("expppp", location.state);
	const [current_chapter, setCurrentChapter] = useState({
		chapter: "",
		quest: "",
	});
	let currCourseQuizz = allState?.levelUp.enrolled_courses.QNA?.filter(
		(curr) => curr.course_id == location?.state?.course,
	);

	useEffect(() => {
		let currCourseQuizz = allState?.levelUp.enrolled_courses.QNA?.filter(
			(curr) => curr.course_id == location?.state?.course,
		);
		if (currCourseQuizz) {
			dispatch(handleQuizzData(currCourseQuizz[0]?.qeust));
		}
	}, []);
	console.log("helloOngoing", currCourseQuizz[0]);
	console.log("hello", current_chapter);
	return (
		<div className="mt-10">
			{/* <!-- page --> */}

			<main
				className="min-h-screen w-full bg-gray-100 text-gray-700"
				x-data="layout"
			>
				<h1 className="font-bold text-lg text-center">
					Course Name
				</h1>
				{/* <!-- header page --> */}
				{/* <header className="flex w-full items-center justify-between border-b-2 border-gray-200 bg-white p-2">
					<!-- logo -->
					<div className="flex items-center space-x-2">
						<button type="button" className="text-3xl">
							<i className="bx bx-menu"></i>
						</button>
						<div>Logo</div>
					</div>

					<!-- button profile -->
					<div>
						<button
							type="button"
							className="h-9 w-9 overflow-hidden rounded-full"
						>
							<img
								src="https://plchldr.co/i/40x40?bg=111111"
								alt="plchldr.co"
							/>
						</button>

						<!-- dropdown profile -->
						<div
							className="absolute right-2 mt-1 w-48 divide-y divide-gray-200 rounded-md border border-gray-200 bg-white shadow-md"
							x-show="profileOpen"
							x-transition
						>
							<div className="flex items-center space-x-2 p-2">
								<img
									src="https://plchldr.co/i/40x40?bg=111111"
									alt="plchldr.co"
									className="h-9 w-9 rounded-full"
								/>
								<div className="font-medium">Hafiz Haziq</div>
							</div>

							<div className="flex flex-col space-y-3 p-2">
								<button  className="transition hover:text-blue-600">
									My Profile
								</button>
								<button  className="transition hover:text-blue-600">
									Edit Profile
								</button>
								<button  className="transition hover:text-blue-600">
									Settings
								</button>
							</div>

							<div className="p-2">
								<button className="flex items-center space-x-2 transition hover:text-blue-600">
									<svg
										className="h-4 w-4"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
										></path>
									</svg>
									<div>Log Out</div>
								</button>
							</div>
						</div>
					</div>
				</header> */}

				<div className="flex">
					<aside
						className="flex w-72 flex-col space-y-2 border-r-2 border-gray-200 bg-white p-2"
						// style="height: 90.5vh"
						// x-show="asideOpen"
					>
						<button
							value={"introduction"}
							onClick={(e) =>
								setCurrentChapter(e.target.value)
							}
							className="  border-2 flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-blue-600"
						>
							<span className="text-2xl">
								<i className="bx bx-home"></i>
							</span>
							<span>Introduction</span>
						</button>

						<button
							value={"Data Type"}
							className=" border-2 flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-blue-600"
						>
							<span className="text-2xl">
								<i className="bx bx-cart"></i>
							</span>
							<span>Data Type</span>
						</button>

						<button
							value={"Function"}
							className=" border-2 flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-blue-600"
						>
							<span className="text-2xl">
								<i className="bx bx-shopping-bag"></i>
							</span>
							<span>Function</span>
						</button>

						<button
							value={"IIFE"}
							className=" border-2 flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-blue-600"
						>
							<span className="text-2xl">
								<i className="bx bx-heart"></i>
							</span>
							<span>IIFE</span>
						</button>

						<button
							value={"Async_Await"}
							className=" border-2 flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-blue-600"
						>
							<span className="text-2xl">
								<i className="bx bx-user"></i>
							</span>
							<span>Async and Await</span>
						</button>
					</aside>

					{/* <!-- main content page --> */}
					<div className="w-full p-4">
						<p>
							Lorem ipsum dolor sit amet consectetur,
							adipisicing elit. Expedita quam odit officiis
							magni doloribus ipsa dolore, dolores nihil
							accusantium labore, incidunt autem iure quae
							vitae voluptate, esse asperiores aliquam
							repellat. Harum aliquid non officiis porro at
							cumque eaque inventore iure. Modi sunt optio
							mollitia repellat sed ab quibusdam quos
							harum!
						</p>
						<div>
							{allState?.isSubmitted ? (
								<Submission />
							) : (
								<Question
									quest={currCourseQuizz[0]}
									chapter={current_chapter}
								/>
							)}
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}

export default OnGoingCourse;
