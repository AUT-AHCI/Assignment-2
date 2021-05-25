import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Description = () => {
	const containerStyle = {
		background: 'rgba(0, 0, 0, 0.6)',
		backgroundPosition: 'center',
		backgroundSize: 'cover',
		height: '100%',
	};

	return (
		<div style={containerStyle}>
			<Container className="d-flex flex-column justify-content-center align-items-center w-50">
				<br />
				<br />
				<br />
				<h1>Overview</h1>
				<br />
				<p>the question is, i dont know what im doing</p>

				<br />
				<br />
				<br />
				<h1>Hypothesis</h1>
				<br />
				<p>we think, bees</p>

				<br />
				<br />
				<br />
				<h1>Methodology</h1>
				<h4>How we're going about the study - refence relevant literature</h4>
				<br />
				<p>to conduct our study and find answer to thing, we using thingy</p>

				<br />
				<Container className="d-flex flex-column justify-content-center align-items-center">
					<Row>
						<Col>
							<h2>Processes</h2>
							<h4>research about processes</h4>
							<p>yabba dabba doo woo</p>
						</Col>
						<Col>
							<h2>Theory</h2>
							<h4>research bout the theorie</h4>
							<p>it work like this you see</p>
						</Col>
					</Row>
				</Container>

				<br />
				<br />
				<br />
				<h1>Planning and Implementation</h1>
				<br />
				<p>we gonn do this and it's gonna be gr8</p>
				<br />
				<br />
				<br />

				<LinkContainer to="/findings" className="mx-2 my-2">
					<Button className="findingsBtn">Study Findings</Button>
				</LinkContainer>
				<br />
				<br />
				<br />
				<br />
				<br />
			</Container>
		</div>
	);
};

export default Description;
