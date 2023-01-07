import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Submission from './Submission';
import Question from './Question';
import Home from './Home';
function App() {
	return (
		<Routes>
			<Route path="/" element={<Question />} />
			<Route path="/home" element={<Home />} />
			<Route path="/submitted" element={<Submission />}></Route>
		</Routes>
	);
}

export default App;
