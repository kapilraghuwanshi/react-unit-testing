import axios from "axios";
import React from "react";

const TextAxios = ({ url }) => {
	const [data, setData] = React.useState();

	const fetchData = async () => {
		const response = await axios.get(url);
		setData(response.data.title);
	};

	return (
		<>
			<button onClick={fetchData} data-testid='fetch-data'>
				Load Data
			</button>
			{data ? (
				<div data-testid='show-data'>{data}</div>
			) : (
				<h1 data-testid='loading-text'>Loading...</h1>
			)}
		</>
	);
};

export default TextAxios;