import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function RecentsCourse() {
	// let allState = levelUp?.sort_course;
	let allState = useSelector((state) => state);
	console.log("recentsCourse", allState?.levelUpQuizz?.QNA2[0]);
	// let dt=allState?.apiData?.filter((currr)=>{
	//     if(allState?.levelUpQuizz?.QNA2[0]!==undefined){
	//         return currr._id == allState?.levelUpQuizz?.QNA2[0]
	//     }
	// });

	return (
		<div className=" grid grid-cols-4 gap-4 p-2 mt-40 ">
			<p>hell</p>
			<p>hhh</p>
		</div>
	);
}
export default RecentsCourse;
