import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import WebFooter from "./Scratch/WebFooter";
import WithAuth from "../WithAuth/WithAuth";
import { useState } from "react";
import ProfileDetails from "./ProfileDetails/ProfileDetails";
import RecentsCourse from "../CourseOngoing/RecentsCourse";
import ClientHelp from "../Support/ClientHelp";
function Profile() {
	let AllState = useSelector((state) => state);
	console.log("allState", AllState);
	const [component, setComponent] = useState("default_course");
	console.log("dddddd", component);
	return (
		<div>
			<div className=" flex " style={{}}>
				{/* <!-- 
  add this in your css

  @layer components {
    .sidebar{
      transition:all .4s ease-in-out;
    }
  }
--> */}
				<div class="min-h-screen bg-gray-100 w-1/5">
					<div class="sidebar min-h-screen w-[3.35rem] overflow-hidden border-r  ">
						<div class="flex h-screen flex-col justify-between  pb-6">
							<div className="fixed">
								<div className="w-max p-1.5">
									<img
										src="https://tailus.io/images/logo.svg"
										className="w-32"
										alt=""
									/>
								</div>
								<ul className="mt-6 space-y-2 tracking-wide">
									<li className="min-w-max">
										<button
											value={"default_course"}
											aria-label="dashboard"
											onClick={(e) =>
												setComponent(
													e.target.value,
												)
											}
											className="relative flex items-center space-x-4 bg-gradient-to-r from-sky-600 to-cyan-400 px-4 py-3 text-white"
										>
											<svg
												className="-ml-1 h-6 w-6"
												viewBox="0 0 24 24"
												fill="none"
											>
												<path
													d="M6 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8ZM6 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-1Z"
													className="fill-current text-cyan-400 dark:fill-slate-600"
												></path>
												<path
													d="M13 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2V8Z"
													className="fill-current text-cyan-200 group-hover:text-cyan-300"
												></path>
												<path
													d="M13 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1Z"
													className="fill-current group-hover:text-sky-300"
												></path>
											</svg>
											Dashboard
										</button>
									</li>
									<li className="min-w-max">
										<button
											onClick={(e) =>
												setComponent(
													() =>
														e.target
															.value,
												)
											}
											// href="#"
											value={"profile"}
											className="bg group flex items-center space-x-4 rounded-full px-4 py-3 text-gray-600"
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												className="h-5 w-5"
												viewBox="0 0 20 20"
												fill="currentColor"
											>
												<path
													className="fill-current text-gray-300 group-hover:text-cyan-300"
													fill-rule="evenodd"
													d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z"
													clip-rule="evenodd"
												/>
												<path
													className="fill-current text-gray-600 group-hover:text-cyan-600"
													d="M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z"
												/>
											</svg>
											Profile
											{/* <span className="group-hover:text-gray-700">Profile</span> */}
										</button>
									</li>
									<li className="min-w-max">
										<button
											// href="#"
											value={"ongoing_course"}
											onClick={(e) =>
												setComponent(
													() =>
														e.target
															.value,
												)
											}
											className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600"
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												className="h-5 w-5"
												viewBox="0 0 20 20"
												fill="currentColor"
											>
												<path
													className="fill-current text-gray-600 group-hover:text-cyan-600"
													fill-rule="evenodd"
													d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
													clip-rule="evenodd"
												/>
												<path
													className="fill-current text-gray-300 group-hover:text-cyan-300"
													d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"
												/>
											</svg>
											Ongoing course
											{/* <span className="group-hover:text-gray-700">
												{' '}
												Ongoing course
											</span> */}
										</button>
									</li>
									<li className="min-w-max">
										<button
											// href="#"
											value={"other"}
											onClick={(e) =>
												setComponent(
													() =>
														e.target
															.value,
												)
											}
											className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600"
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												className="h-5 w-5"
												viewBox="0 0 20 20"
												fill="currentColor"
											>
												<path
													className="fill-current text-gray-600 group-hover:text-cyan-600"
													d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"
												/>
												<path
													className="fill-current text-gray-300 group-hover:text-cyan-300"
													d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"
												/>
											</svg>
											Other data
											{/* <span className="group-hover:text-gray-700">
												Other data
											</span> */}
										</button>
									</li>
									<li className="min-w-max">
										<button
											value={"help"}
											// href="#"
											onClick={(e) =>
												setComponent(
													() =>
														e.target
															.value,
												)
											}
											className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600"
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												className="h-5 w-5"
												viewBox="0 0 20 20"
												fill="currentColor"
											>
												<path
													className="fill-current text-gray-300 group-hover:text-cyan-300"
													d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"
												/>
												<path
													className="fill-current text-gray-600 group-hover:text-cyan-600"
													fill-rule="evenodd"
													d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
													clip-rule="evenodd"
												/>
											</svg>
											Help
											{/* <span className="group-hover:text-gray-700">Finance</span> */}
										</button>
									</li>
								</ul>
							</div>
							<div className="w-max -mb-3">
								<button
									// href="#"
									value={"setting"}
									onClick={(e) =>
										setComponent(
											() => e.target.value,
										)
									}
									className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-5 w-5 group-hover:fill-cyan-600"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path
											fill-rule="evenodd"
											d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
											clip-rule="evenodd"
										/>
									</svg>

									<span className="group-hover:text-gray-700">
										Settings
									</span>
								</button>
							</div>
						</div>
					</div>
				</div>
				<div>
					{component == "default_course" ? (
						<div className=" grid grid-cols-4 gap-4 mt-28 px-2 ">
							{AllState?.levelUp?.enrolled_courses?.course?.map(
								(curr, i, arr) => {
									return (
										<div
											className="h-50 "
											key={curr._id}
										>
											<div className="rounded-lg shadow-lg bg-white max-w-sm">
												{/* <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light"> */}
												<Link
													to="/view"
													state={{
														course: curr
															.courses[0]
															._id,
													}}
												>
													<img
														className="rounded-t-lg h-52 w-full"
														src={
															curr
																.courses[0]
																.img ==
															undefined
																? "https://mdbootstrap.com/img/new/standard/nature/182.jpg"
																: curr
																		.courses[0]
																		.img
														}
														alt="not_found"
													/>
												</Link>

												<div className="p-5">
													<h5 className="text-gray-900 text-xl font-medium mb-2">
														{
															curr
																.courses[0]
																.name
														}
													</h5>
													{curr
														.courses[0]
														.description ==
													undefined ? (
														<p className="text-gray-700 text-base mb-4">
															Some
															quick
															example
															text
															to
															build
															on
															the
															card
															title
															and
															make
															up
															the
															bulk
															of
															the
															card's
															content.
														</p>
													) : (
														<p className="text-gray-700 text-base mb-4">
															{
																curr
																	.courses[0]
																	.description
															}
														</p>
													)}

													<button
														type="button"
														value="js"
														onClick={(
															e,
														) =>
															setAddress(
																e
																	.target
																	.value,
															)
														}
														className=" inline-block w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
													>
														Start
														Learning
													</button>
												</div>
											</div>
										</div>
									);
								},
							)}
						</div>
					) : component == "profile" ? (
						<ProfileDetails />
					) : component == "ongoing_course" ? (
						<RecentsCourse />
					) : component == "help" ? (
						<ClientHelp />
					) : (
						component == "default_course"
					)}
				</div>
			</div>
		</div>
	);
}

export default WithAuth(Profile);
