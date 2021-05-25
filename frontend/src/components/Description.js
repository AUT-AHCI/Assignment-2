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
				<h1>Summary</h1>
				<br />
				<p>This research study was undertaken in May 2021 to discover if there are any usability issues surrounding sign-up forms, and if there is truly a clear advantage of using single-sign-on (SSO) compared to traditional form sign up.</p>
				<p>To conduct this study, we developed a prototype website containing a sign-up form, which requires specific criteria to be met for fields such as the password. The presence of a SSO method is also given, to gauge how users find it and if there is much efficiency gained from using it.</p>
				<p>This website was distributed amongst potential test users to gauge their preferences and performances, with a survey at the end to gather feedback and preferences.</p>

				<br />
				<br />
				<br />
				<br />
				<h1>Question & Hypothesis</h1>
				<br />
				<p>The question we aim to answer through conducting this study is:</p>
				<p>Are traditional sign up forms still ideal in this day and age? Are there any evident usability issues with it, and can we improve it, such as through using SSO?</p>
				<br />
				<p>Our hypothesis is that bees are pretty cool, and that we shouldn't care about websites. let's look at bees instead.</p>

				<br />
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
