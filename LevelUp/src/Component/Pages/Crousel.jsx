import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
export default function Crousel() {
	var settings = {
		dots: true,
		infinite: true,
		className: `bg-gray-500`,
		speed: 600,
		slidesToShow: 1,
		slidesToScroll: 1,
		// adaptiveHeight: true,
		autoplay: true,
		// pauseOnHover: true,
		speed: 300,
		height: 400,
	};
	return (
		<Slider {...settings} className="">
			{/* <div className=" h-50">
				<img src="./img6.jpg" style={{ height: '390px', width: '100%' }} />
				
			</div> */}
			<div className=" h-50 border-collapse border-2">
				<img src="./img4.png" style={{ height: '240px', width: '100%' }} />
			</div>
			<div className=" h-50 border-2">
				<img src="./img6.jpg" style={{ height: '290px', width: '100%' }} />
			</div>
			<div className=" h-50 border-2">
				<img src="./img5.png" style={{ height: '290px', width: '100%' }} />
			</div>
			{/* <div className=" h-50">
				<img
					src="./coming_soon.jpg"
					style={{ height: '290px', width: '100%' }}
				/>
			</div> */}
		</Slider>
	);
}
