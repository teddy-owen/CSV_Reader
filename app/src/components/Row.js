import React from 'react';

const Row = ({obj}) => {

	const points = Object.entries(obj).map((pair,index) => (<td key={index}>{pair[1]}</td>));

	return (		
		<tr>
			{ points }
		</tr>
		);
};


export default Row;