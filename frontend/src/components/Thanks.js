import React from 'react';
import { Container } from 'react-bootstrap';

const Thanks = () => {
	const containerStyle = {
		marginTop: '40vh',
	};

	return (
		<div style={containerStyle}>
			<Container className="d-flex flex-column justify-content-center align-items-center w-50">
				<h1>Thanks!</h1>
			</Container>
		</div>
	);
};

export default Thanks;
