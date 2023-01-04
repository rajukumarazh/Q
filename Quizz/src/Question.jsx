import React, { useEffect } from 'react';
import q from './q.json';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { chooseAnswer } from './Redux/Action';
function Question() {
	const [subject, setSubject] = useState();
	const [quest, setQuest] = useState(q[0].geography);
	const [newSub, setNewSub] = useState();
	const [totalpage] = useState(quest.length);
	const [perPage, setperPage] = useState(1);
	const totalNumberOfPage = totalpage / perPage;
	const [currentPage, setCurrentPage] = useState(1);
	const [answer, setAnswer] = useState();
	let dt = Object.keys(q[0]);
	const allState = useSelector((state) => state);
	console.log('hello', allState);
	/// pagination
	let lastindex = currentPage * perPage;
	let firstindex = lastindex - perPage;
	let pages = quest.slice(firstindex, lastindex);
	console.log('pages', pages);
	let count = [];
	for (let i = 1; i <= totalNumberOfPage; i++) {
		count.push(i);
	}
	const dispatch = useDispatch(chooseAnswer);
	console.log('allQuestions', quest);
	console.log('answer', answer);
	return (
		<div className="p-5">
			<div className="flex justify-between">
				{pages !== undefined ? (
					pages?.map((curr, i, arr) => {
						return (
							<div>
								<p className="text-red-500 font-semibold">
									{curr.id}.&nbsp;
									{curr.question}
								</p>
								<br />
								{curr.answers.map((ans) => {
									return (
										<div className="flex items-center mb-4">
											<input
												id="default-radio-1"
												type="radio"
												// onClick={(e) =>
												// 	setAnswer({
												// 		...answer,
												// 		id: curr.id,
												// 		choosenAnsw: e.target.value,
												// 		// currectAns: correctAnswer,
												// 	})
												// }
												onClick={(e) =>
													dispatch(
														chooseAnswer(
															{ choosenAnsw: e.target.value, id: curr.id }

															// currectAns: correctAnswer,
														)
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
										</div>
									);
								})}
							</div>
						);
					})
				) : (
					<p>Question Not found</p>
				)}
				<div className="p-5">
					<select onChange={(e) => setSubject(e.target.value)}>
						{dt?.map((curr) => {
							return <option value={curr}>{curr}</option>;
						})}
					</select>
				</div>
			</div>
			<div className="flex justify-between">
				<button
					onClick={() =>
						setCurrentPage(currentPage !== 1 ? currentPage - 1 : currentPage)
					}
					className="rounded-md px-2 py-1 text-black bg-green-500 shadow-md m-4"
				>
					Prev
				</button>

				<button
					onClick={() =>
						setCurrentPage(
							currentPage !== quest.length ? currentPage + 1 : currentPage
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
									onClick={(e) => setCurrentPage(e.target.value)}
								>
									{curr}
								</button>
							</>
						);
				  })
				: ''}
		</div>
	);
}

export default Question;
