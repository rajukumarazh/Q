import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// import {setApidata, submitted, HandleMarks, chooseAnswer } from "../"
import {
	setApidata,
	submitted,
	HandleMarks,
	chooseAnswer,
} from '../../../Redux/Toolkit/QuizzSlice';
import { useDispatch } from 'react-redux';
function Submission() {
	const allState = useSelector((state) => state);
	console.log('Submission', allState);
	const dispatch = useDispatch();
	let navigate = useNavigate();
	function pleaseNavigate() {
		dispatch(submitted());
		navigate('/user');
	}
	return (
		<div>
			<div className="bg-gray-100 h-screen">
				<div className="bg-white p-6  md:mx-auto">
					<svg
						viewBox="0 0 24 24"
						className="text-green-600 w-16 h-16 mx-auto my-6"
					>
						<path
							fill="currentColor"
							d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
						></path>
					</svg>
					<div className="text-center">
						<h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">
							Quizz Submitted
						</h3>

						<div className="flex justify-center">
							<p className="text-red-500 my-2">
								Hello folk your quizz is submitted & your earned marks is
								{allState?.TotalMarks}
							</p>
							&nbsp;
							<h1 className="text-lg font-semibold text-red-500 text-center mt-1 ">
								&nbsp; "{allState?.levelUpQuizz?.TotalMarks}"
							</h1>
						</div>
						<p className="text-gray-600 my-2">
							Thank you for completing your quiz trivia
						</p>
						<p> Have a great day! </p>
						<div className="flex gap-5 justify-center">
							<div className="py-10 text-center">
								<button
									onClick={pleaseNavigate}
									className="px-12 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3"
								>
									GO BACK
								</button>
							</div>
							<div className="py-10 text-center">
								<Link to={'/'}>
									<button
										className="px-12 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3"
										// onClick={() => dispatch(resetCartOnPayment())}
									>
										Home
									</button>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Submission;
