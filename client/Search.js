import React, { useState } from 'react';
import axios from 'axios';

const Search = () => {
	const [title, setTitle] = useState('');

	const handleSubmit = async event => {
		event.preventDefault();

		let response = await axios.get(`/api/search/${title}`);
		console.log(response);

		// api currently only sends back 10 results. could implement pagination as a future feature

		setTitle('');
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<label>Search by Title</label>
				<input type='text' value={title} onChange={event => setTitle(event.target.value)}></input>
				<button type='submit' disabled={!title.length}>
					Submit
				</button>
			</form>
		</>
	);
};

export default Search;
