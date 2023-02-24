import React from 'react';
import { Link } from 'react-router-dom';
import WithAuth from '../../../WithAuth/WithAuth';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { selectCourse } from '../../../../Redux/Toolkit/CourseSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
function loadScript(src) {
	return new Promise((resolve) => {
		const script = document.createElement('script');
		script.src = src;
		script.onload = () => {
			resolve(true);
		};
		script.onerror = () => {
			resolve(false);
		};
		document.body.appendChild(script);
	});
}
function Javascript() {
	let amount = '2500';
	const location = useLocation();
	let subject = location.pathname.replace(/[^\w\s]/gi, '');
	const [course, setCoures] = useState();
	const [current, setCurrent] = useState();
	console.log('location', subject);
	console.log('currentPrice', current);
	const dispatch = useDispatch();
	useEffect(() => {
		if (subject) {
			async function getSubject() {
				let sub = await axios
					.get(`http://localhost:8000/${subject}`)
					.then((res) => res.data);
				// console.log('daa');
				dispatch(selectCourse(sub));
				setCoures(() => sub);
			}
			getSubject();
		}
	}, []);
	const allState = useSelector((state) => state.levelUp.selectedCourse);
	console.log('allState', allState);
	const allState2 = useSelector((state) => state.levelUp);
	console.log('allState2', allState2);
	console.log('course', course);
	function priceAndPay(value) {
		console.log('course_in_price', value);
		// value.user = allState2?.current_user[0]?._id;
		let dt = {
			...value,
			user_id: allState2?.current_user[0]?._id,
			course_id: value._id,
		};
		console.log('current', current);
		console.log('dddddddddd', dt);
		setCurrent(dt);
		showRazorpay();
	}
	async function showRazorpay(price) {
		const res = await loadScript(
			'https://checkout.razorpay.com/v1/checkout.js'
		);

		if (!res) {
			alert('Razorpay SDK failed to load. Are you online?');
			return;
		}
		// buyedItem({ user_id: profileState, data: cart.cart });
		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				data: current.course_price,
			}),
		};
		const data = await fetch(
			'http://localhost:8000/razorpay',
			requestOptions
		).then((response) => {
			return response.json();
		});

		console.log('data', data);
		const options = {
			key: 'rzp_test_LUoWzQJZYjdLNB',
			currency: data.currency,
			// amount: data.data?.amount?.toString(),
			amount: current,
			order_id: data.id,
			name: 'LevelUp.com',
			description: 'Hello Folk!! Avoid  to be Click Refresh button/icon',
			// image: 'http://localhost:1337/logo.svg',
			handler: async function (response) {
				// console.log('dkfkdfkdfdfd', response);
				const result = await axios.post(
					'http://localhost:8000/verification',
					response
				);
				console.log('rsponse', result.data);
				if (result.data) {
					const result = await axios.post(
						'http://localhost:8000/enrolling_user',
						current
					);
					console.log('renrolled_data', result);
				}
			},
			prefill: {
				name: 'raju Kumar',
				email: 'raju.kumar@palinfocom.com',
				phone_number: '9899999999',
			},
		};
		const paymentObject = new window.Razorpay(options);
		paymentObject.open();
	}
	return (
		<div>
			{/* <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css">
<link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"> */}

			<section className="relative  bg-blueGray-50">
				<div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
					<div
						className="absolute top-0 w-full h-full bg-center bg-cover"
						style={{
							backgroundImage:
								'url(' +
								'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1267&amp;q=80' +
								')',
						}}
						// style=" background-image: url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1267&amp;q=80')"
					>
						<span
							id="blackOverlay"
							className="w-full h-full absolute opacity-75 bg-black"
						></span>
					</div>
					<div className="container relative mx-auto">
						<div className="items-center flex flex-wrap">
							<div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
								<div className="pr-12">
									<h1 className="text-white font-semibold text-5xl">
										Your JS journey is started here
									</h1>
									{/* <p className="mt-4 text-lg text-blueGray-200"> */}
									<p className="mt-4 text-lg text-gray-300">
										you can grow with limitless world of js with most popular
										Library and framework and we promise you to we will make you
										newbiew to Pro
									</p>
								</div>
							</div>
						</div>
					</div>
					<div
						className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
						//  style="transform: translateZ(0px)"
					>
						<svg
							className="absolute bottom-0 overflow-hidden"
							xmlns="http://www.w3.org/2000/svg"
							preserveAspectRatio="none"
							version="1.1"
							viewBox="0 0 2560 100"
							x="0"
							y="0"
						>
							<polygon
								className="text-blueGray-200 fill-current"
								points="2560 0 2560 100 0 100"
							></polygon>
						</svg>
					</div>
				</div>
				<section className="pb-10 bg-blueGray-200 -mt-24">
					<div className="container mx-auto px-4">
						<div className="flex flex-wrap">
							{allState?.map((curr) => {
								return (
									<div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
										<div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
											<div className="px-4 py-5 flex-auto">
												<div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
													<i className="fas fa-award"></i>
												</div>
												<h6 className="text-xl font-semibold">
													{curr.course_name}
												</h6>
												<p className="mt-2 mb-4 text-blueGray-500">
													Divide details about your product or agency work into
													parts. A paragraph describing a feature will be
													enough.
												</p>
												{/* <button className="bg-blue-600 text-white font-semibold px-2 py-2 rounded-md">
											sxxxuyz
										</button> */}
												<div className="flex justify-center gap-5">
													<button
														onClick={() => priceAndPay(curr)}
														className="bg-red-400 text-white font-semibold px-2 py-2 rounded-lg"
													>
														Enroll Here
													</button>
													<div className="bg-red-400 text-white font-semibold px-2 py-2 rounded-lg">
														Rs- {curr.course_price}
													</div>
												</div>
											</div>
										</div>
									</div>
								);
							})}
							{/* <div className="w-full md:w-4/12 px-4 text-center">
								<div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
									<div className="px-4 py-5 flex-auto">
										<div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue-400">
											<i className="fas fa-retweet"></i>
										</div>
										<h6 className="text-xl font-semibold">
											React.js (JS Library)
										</h6>
										<p className="mt-2 mb-4 text-blueGray-500">
											Keep you user engaged by providing meaningful information.
											Remember that by this time, the user is curious.
										</p>
										<div className="flex justify-center gap-5">
											<button className="bg-red-400 text-white font-semibold px-2 py-2 rounded-lg">
												Enroll Here
											</button>
											<div className="bg-red-400 text-white font-semibold px-2 py-2 rounded-lg"></div>
										</div>
									</div>
								</div>
							</div>
							<div className="pt-6 w-full md:w-4/12 px-4 text-center">
								<div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
									<div className="px-4 py-5 flex-auto">
										<div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
											<i className="fas fa-fingerprint"></i>
										</div>
										<h6 className="text-xl font-semibold">
											Angular Js(JS framework)
										</h6>
										<p className="mt-2 mb-4 text-blueGray-500">
											Write a few lines about each one. A paragraph describing a
											feature will be enough. Keep you user engaged!
										</p>
										<div className="flex justify-center gap-5">
											<button className="bg-red-400 text-white font-semibold px-2 py-2 rounded-lg">
												Enroll Here
											</button>
											<div className="bg-red-400 text-white font-semibold px-2 py-2 rounded-lg">
												fdf
											</div>
										</div>
									</div>
								</div>
							</div> */}
						</div>
						{/* product end */}
						<footer className="relative  pt-8 pb-6 mt-1">
							<div className="container mx-auto px-4">
								<div className="flex flex-wrap items-center md:justify-between justify-center">
									<div className="w-full md:w-6/12 px-4 mx-auto text-center">
										<div className="text-sm text-blueGray-500 font-semibold py-1">
											by{' '}
											<a
												href="https://www.creative-tim.com"
												className="text-blueGray-500 hover:text-blueGray-800"
												target="_blank"
											>
												{' '}
												#LevelUp
											</a>
											.
										</div>
									</div>
								</div>
							</div>
						</footer>
					</div>
				</section>
			</section>
		</div>
	);
}

export default WithAuth(Javascript);
