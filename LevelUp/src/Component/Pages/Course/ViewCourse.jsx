import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import CourseLearning from "../../CourseOngoing/CourseLearning";
import CoursePreface from "../../CourseOngoing/CoursePreface";
import { handleCurrentCourse } from "../../../Redux/Toolkit/CourseSlice";
import { useDispatch } from "react-redux";
import { useRef } from "react";
export default function ViewCourse() {
	const [course, setCourse] = useState();
	const location = useLocation();
	const dispatch = useDispatch();
	const allState = useSelector((curr) => curr);
	const lt = useRef(null);
	useEffect(() => {
		setCourse(() =>
			allState?.levelUp?.enrolled_courses?.course.filter(
				(curr) => curr.course_id == location?.state?.course,
			),
		);
	}, [location]);
	if (course) {
		dispatch(handleCurrentCourse(course[0]));
	}
	console.log("ViewCourse", allState);
	console.log("hello", course?.[0].courses[0].course_name);
	console.log("selectedCourse", location.state.course);
	console.log("current_course", course);
	return (
		<div className="mt-14 bg-slate-100">
			<section className="text-indigo-200 body-font p-5 bg-gray-900">
				{/* <Link to="coursedet"> */}
				<div className="mx-auto flex px-5  md:flex-row flex-col items-center jobcard">
					<div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center">
						<figure className="visible">
							<div className="">
								<div className="pt-10 px-2 sm:px-6">
									<span className="inline-block py-1 px-2 rounded-full bg-green-600 text-white  text-xs font-bold tracking-widest mb-2">
										Featured Courses
									</span>
									<h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-100">
										Namaste &nbsp;
										{
											course?.[0].courses[0]
												.course_name
										}
										<br className="hidden lg:inline-block" />
										{/* enroll now */}
									</h1>
									<p className="text-indigo-200 text-base pb-6">
										From local banks to local
										government, we partner with
										organizations on their journey
										to digital transformation. Our
										customers include 15 million
										professionals in 175 countries
										and 800 of the fortune 1000.
									</p>
									<p className="text-indigo-200 text-base pb-8">
										We can't believe how far we
										have come in the last 6
										months. I really did not think
										this awesome career move would
										come so quickly. Thanks to
										each of you put into SI and
										the partner relationships.
									</p>
									<div className="flex items-center justify-between">
										<div className="flex items-center pb-12">
											<div className="h-12 w-12">
												<img
													src="./akshaysaini.jpg"
													alt
													className="h-full w-full object-cover overflow-hidden rounded-full"
												/>
											</div>
											<p className="text-indigo-200 font-bold ml-3">
												Mr Akshay Saini
												<br />
												<span className="text-indigo-200 text-base font-light">
													Namaste React &
													Namaste js
												</span>
											</p>
										</div>
									</div>
								</div>
							</div>
						</figure>
					</div>
					<div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 sm:block hidden">
						<img
							className="object-cover object-center rounded"
							alt="hero"
							// src="https://dummyimage.com/720x600"
							src={`${course?.[0].courses[0].img}`}
						/>
					</div>
				</div>
				{/* </Link> */}
			</section>
			<h1 className="mt-5 text-2xl text-red-600 text-center font-bold">
				--Preface--{" "}
			</h1>
			<CoursePreface />
			{allState.levelUp.learning_status ? <CourseLearning /> : ""}
		</div>
	);
}
