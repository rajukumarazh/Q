import React from 'react';
import { useSelector } from 'react-redux';
import { useRef } from 'react';
function CourseLearning() {
	let allState = useSelector((curr) => curr);
	// const qrRef = React.useRef < HTMLDivElement > null;
	// if (allState?.levelUp?.learning_status == true) {
	// 	let dt = qrRef.current;
	// 	console.log('dt', dt);
	// }
	return (
		<div className="active">
			<p className="mb-3 font-light text-black dark:text-gray-400">
				Track work across the enterprise through an open, collaborative
				platform. Link issues across Jira and ingest data from other software
				development tools, so your IT support and operations teams have richer
				contextual information to rapidly respond to requests, incidents, and
				changes.
			</p>
			<p className="font-light text-black">
				Deliver great service experiences fast - without the complexity of
				traditional ITSM solutions.Accelerate critical development work,
				eliminate toil, and deploy changes with ease, with a complete audit
				trail for every change.
			</p>
		</div>
	);
}

export default CourseLearning;
