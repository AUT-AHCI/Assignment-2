import React from 'react';
import { Container, Row, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Hero = () => {
	const headerStyle = {
		fontSize: '4rem',
		fontWeight: '700',
		lineHeight: '1.3',
		marginBottom: '40px',
		color: '#fefefe',
		marginTop: '100px',
	};

	const h2Style = {
		fontSize: '2rem',
		fontWeight: '700',
		lineHeight: '1.3',
		marginBottom: '40px',
		color: '#fefefe',
	};

	const containerStyle = {
		background: 'linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1))',
		backgroundPosition: 'center',
		backgroundSize: 'cover',
		height: '660px',
	};


	return (
		<div style={containerStyle}>
			
			{/* <Header></Header> */}

			<Container className="d-flex flex-column  align-items-center">
				<h1 style={headerStyle}>Applied HCI</h1>
				<h2 style={h2Style}>Delaware - Semester 1 2021</h2>
				<h2 style={h2Style}>Sign-Up Study</h2>
				
				<Row>
					<LinkContainer to="/findings" className="mx-2 my-2">
						<Button className="findingsBtn">Study Findings</Button>
					</LinkContainer>
				</Row>
				<Row>
					<LinkContainer to="/disclaimer" className="mx-2 my-4">
						<Button className="signupBtn">Start Research Activity</Button>
					</LinkContainer>
				</Row>
			</Container>
		</div>
	);
};
export default Hero;
