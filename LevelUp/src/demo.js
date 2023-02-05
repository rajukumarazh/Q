import './styles.css';
import { useState } from 'react';
export default function App() {
	const [paginate, setPaginate] = useState({
		data: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l'],
		currentpage: 1,
		perPage: 3,
	});
	let lastindex = paginate.currentpage * paginate.perPage;
	let firstindex = lastindex - paginate.perPage;
	let pages = paginate.data.slice(firstindex, lastindex);

	console.log('pages', pages);
	let pageNumbers = [];
	for (
		let i = 1;
		i <= Math.ceil(paginate?.data.length / paginate.perPage);
		i++
	) {
		pageNumbers.push(i);
	}
	return (
		<div>
			<div className="App">
				<h1>Hello Paginate</h1>
				{console.log('hello', paginate.currentpage)}
				{pages.map((curr, i, arr) => {
					return (
						<div
							style={{
								display: '',
								justifyContent: 'center',
								gap: '50px',
							}}
						>
							<li>{curr}</li>
						</div>
					);
				})}
			</div>
			<div>
				{pageNumbers.map((c, i, ar) => {
					return (
						<div
							style={{
								display: 'inline-flex',
								gap: '10px',
								justifyContent: 'center',
							}}
						>
							<button
								value={c}
								onClick={(e) => {
									setPaginate({
										...paginate,
										currentpage: Number(e.target.value),
									});
									// console.log("current", e.target.value);
								}}
							>
								{c}
							</button>
						</div>
					);
				})}
			</div>
		</div>
	);
}
