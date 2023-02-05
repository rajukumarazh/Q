import React from 'react';
import Question from './Question';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import Instruction from './Instruction';
function Home() {
	const allState = useSelector((state) => state);
	console.log('allStatse', allState);
	const [begin, setBegin] = useState(false);
	return (
		<div className="bg-gray-200 rounded-md shadow-md p-2">
			<h1 className="text-red-600 text-center text-xl font-semibold mb-5">
				Quizzato
			</h1>
			{begin == false && <Instruction />}
			{begin == false && (
				<button
					onClick={() => setBegin(!begin)}
					className="text-white font-semibold px-2 py-1 bg-red-600 absolute right-6 rounded-md mt-5"
				>
					Start
				</button>
			)}

			{/* {begin == true && allState.isSubmitted == false && <Question />} */}
			{begin == true && <Question />}
		</div>
	);
}

export default Home;
