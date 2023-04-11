import React, { useState } from 'react';
// import '../styles/App.css';
const App = () => {
	const [val, setVal] = useState({
		text: '',
		num: '',
	});

	const handleInput = event => {
		// use console.log

		setVal({
			...val,
			[event.target.name]: event.target.value,
		});
		console.log(
			`Input in #${event.target.name}-input is ` + event.target.value
		);
	};

	// do not change id of input elements
	return (
		<div id="main">
			<label htmlFor="text-input">Text Input:- </label>
			<input
				name="text"
				id="text-input"
				onChange={handleInput}
				value={val.text}
				type={'text'}
			/>

			<br />
			<br />

			<label htmlFor="num-input">Number input</label>
			<input
				name="num"
				id="num-input"
				onChange={handleInput}
				value={val.num}
				type={'number'}
			/>
			<br />
		</div>
	);
};

export default App;
