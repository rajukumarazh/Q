import React, { useEffect } from "react";
import q from "../../../q.json";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import {
	// setApidata,
	submitted,
	HandleMarks,
	chooseAnswer,
} from "../../../Redux/Toolkit/QuizzSlice";
import { Navigate } from "react-router-dom";
function Question(props) {
	const allState = useSelector((state) => state.levelUpQuizz);
	const allState2 = useSelector((state) => state);
	const [quest, setQuest] = useState();
	/// pagination here
	// console.log("hello2", allState2);
	useEffect(() => {
		setQuest(() => allState?.current_course_quizz);
	}, [allState]);
	console.log("props", props);
	const [subject, setSubject] = useState();

	const [sub, setSub] = useState(false);
	const [totalpage] = useState(quest?.length);
	const [perPage, setperPage] = useState(1);
	const totalNumberOfPage = totalpage / perPage;
	const [currentPage, setCurrentPage] = useState(1);
	let dt = Object.keys(q[0]);

	let lastindex = currentPage * perPage;
	let firstindex = lastindex - perPage;
	let pages = quest?.slice(firstindex, lastindex);
	console.log("pages", pages);
	let count = [];
	for (let i = 1; i <= totalNumberOfPage; i++) {
		count.push(i);
	}
	const dispatch = useDispatch(chooseAnswer);
	console.log("Q", q);
	const chooseAnswerFun = (ans, id) => {
		let quiz = [];
		allState?.current_course_quizz?.forEach((e) => {
			if (e._id === id) {
				let qzz = { ...e, choosen: ans };
				quiz.push(qzz);
			}
		});
		dispatch(chooseAnswer([...quiz]));
		console.log("id", id, ans, quiz);
	};
	if (sub == true) {
		return <Navigate to="/submitted" />;
	}
	const handleNavigate = () => {
		let totalMarks = allState.QNA?.current_course_quizz?.filter(
			(curr) => {
				return curr.correctAnswer == curr.choosen;
			},
		);
		console.log("marks", totalMarks?.length);
		setSub(!sub);
		dispatch(HandleMarks(totalMarks?.length), submitted());
		dispatch(submitted(true));
	};
	console.log("hello", allState);
	return (
		<div className="p-5 relative">
			{currentPage == allState?.QNA?.length ? (
				<p className="text-red-600 text-center font-semibold underline">
					Last Question{" "}
				</p>
			) : (
				""
			)}
			<div className="flex justify-between">
				{pages !== undefined ? (
					pages?.map((curr, i, arr) => {
						return (
							<div>
								<p className="text-red-500 font-semibold">
									{curr._id}.&nbsp;
									{curr.question}
								</p>
								<br />
								{curr?.ans?.answers.map((ans) => {
									return (
										<div className="flex items-center mb-4">
											<input
												id="default-radio-1"
												type="radio"
												onClick={() =>
													chooseAnswerFun(
														ans,
														curr._id,
													)
												}
												value={ans}
												name="default-radio"
												className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
											/>
											<label
												htmlFor="default-radio-1"
												className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
											>
												<p> {ans}</p>
											</label>
											{/* <button
												className="bg-blue-500 text-white px-2 py-1"
												onClick={() => chooseAnswerFun(ans, curr.id)}
											>
												{ans}
											</button> */}
										</div>
									);
								})}
							</div>
						);
					})
				) : (
					<p>Question Not found</p>
				)}
				{/* <div className="p-5">
					<select onChange={(e) => dispatch(chooseSubject(e.target.value))}>
						{dt?.map((curr) => {
							return <option value={curr}>{curr}</option>;
						})}
					</select>
				</div> */}
			</div>
			<div className="flex justify-between">
				<button
					onClick={() =>
						setCurrentPage(
							currentPage !== 1
								? currentPage - 1
								: currentPage,
						)
					}
					className="rounded-md px-2 py-1 text-black bg-green-500 shadow-md m-4"
				>
					Prev
				</button>

				<button
					onClick={() =>
						setCurrentPage(
							currentPage !== quest.length
								? currentPage + 1
								: currentPage,
						)
					}
					className="rounded-md px-2 py-1 text-black bg-green-500 shadow-md m-4"
				>
					Next
				</button>
			</div>

			{count
				? count.map((curr) => {
						return (
							<>
								<button
									value={curr}
									className="rounded-md px-2 py-1 text-black bg-green-500 shadow-md m-4"
									onClick={(e) =>
										setCurrentPage(e.target.value)
									}
								>
									{curr}
								</button>
							</>
						);
				  })
				: ""}
			{/* {allState?.QNA?.current_course_quizz[
				allState?.QNA?.current_course_quizz?.length - 1
			].choosen !== undefined &&
				allState?.QNA?.current_course_quizz?.filter(
					(curr) => curr.choosen == undefined,
				).length == 0 && ( */}
			<button
				onClick={() => handleNavigate()}
				className="text-white font-semibold px-2 py-3 bg-red-600 absolute right-6 rounded-md mt-5"
			>
				Submit
			</button>
			{/* )} */}
		</div>
	);
}

export default Question;
