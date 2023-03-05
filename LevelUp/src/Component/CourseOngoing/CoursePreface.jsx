import React from "react";
import { changeLearnginStatus } from "../../Redux/Toolkit/CourseSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import {
	Accordion,
	AccordionItem,
	AccordionItemHeading,
	AccordionItemButton,
	AccordionItemPanel,
} from "react-accessible-accordion";

// Demo styles, see 'Styles' section below for some notes on use.
import "react-accessible-accordion/dist/fancy-example.css";

export default function CoursePreface() {
	let dispatch = useDispatch();
	let locate = useLocation();
	const AllState = useSelector((state) => state);
	console.log("helo", AllState, locate);
	return (
		<Accordion className="p-4">
			<AccordionItem>
				<AccordionItemHeading>
					<AccordionItemButton>Introduction</AccordionItemButton>
				</AccordionItemHeading>
				<AccordionItemPanel>
					<div className="border-2 flex gap-5">
						<img src="./pre.jpg" className="w-40 " />
						<img src="./pre.jpg" className="w-40 " />
					</div>
					<p>
						Exercitation in fugiat est ut ad ea cupidatat ut
						in cupidatat occaecat ut occaecat consequat est
						minim minim esse tempor laborum consequat esse
						adipisicing eu reprehenderit enim.
					</p>
					<Link
						to="/ongoing"
						state={{ course: locate.state.course }}
						// onClick={() => dispatch(changeLearnginStatus())}
						className="bg-red-400 px-2 py-1 text-white font font-semibold rounded-lg "
					>
						Start
					</Link>
				</AccordionItemPanel>
			</AccordionItem>
			<AccordionItem>
				<AccordionItemHeading>
					<AccordionItemButton>Lets Start?</AccordionItemButton>
				</AccordionItemHeading>
				<AccordionItemPanel>
					<p>
						In ad velit in ex nostrud dolore cupidatat
						consectetur ea in ut nostrud velit in irure cillum
						tempor laboris sed adipisicing eu esse duis nulla
						non.
					</p>
				</AccordionItemPanel>
			</AccordionItem>
		</Accordion>
	);
}
