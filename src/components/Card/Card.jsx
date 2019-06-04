import React from 'react';

const Card = props => {
	return (
		<section className="card">
			<ul>
				<li>Number: {props.data.number}</li>
				<li>President: {props.data.president}</li>
				<li>Born: {props.data.birth_year}</li>
				<li>Died: {props.data.death_year}</li>
				<li>Took Office: {props.data.took_office}</li>
				<li>Left Office: {props.data.left_office}</li>
				<li>Party: {props.data.party}</li>
			</ul>
		</section>
	);
};

export default Card;
