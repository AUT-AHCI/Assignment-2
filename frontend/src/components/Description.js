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
				<h4>A/B Testing</h4>
				<p>A/B Testing process involve gather data, identify goals, generate hypothesis, create variations, 
					run experiment, and finally analyze the results ("A/B testing," n.d.).</p>
				<p>The theory behind A/B testing is that we have a webpage and we change it to create a new version of that webpage ("A/B testing," n.d.). 
					In our case, we have a webpage for traditional form sign up 
					and we modify it to a Single-sign-on (Google SSO) webpage to compare which one the user prefer.</p>
				<br />
				<h1>Planning and Implementation</h1>
				<br />
				<p>we gonn do this and it's gonna be gr8</p>
				<br />
				<br />
				<br />
				<p>
					A/B testing. (n.d.).
					<em> Optimizely: The World's Leading Progressive Delivery and Experimentation Platform.</em>
					Retrieved May 25, 2021, from
					https://www.optimizely.com/optimization-glossary/ab-testing/
				</p>

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
