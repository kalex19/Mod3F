import React from 'react';
import Card from '../Card/Card';

const CardContainer = props => {
	const cards = props.data.map(card => {
		return <Card data={card} />;
	});
	return <section className="container">{cards}</section>;
};

export default PresidentsContainer;
