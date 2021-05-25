import React from 'react';
import { Container, Button } from 'react-bootstrap';
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
				<p>
					This research study was undertaken in May 2021 to discover if there are
					any usability issues surrounding sign-up forms, and if there is truly a clear advantage
					of using single-sign-on (SSO) compared to traditional form sign up.
				</p>
				<p>
					To conduct this study, we decided to take a quantitative research approach,
					and developed a prototype website containing a sign-up form, which requires specific
					criteria to be met for fields such as the password. The presence of a SSO method is
					also given, to gauge how users find it and if there is much efficiency gained from using it.
				</p>
				<p>
					This website was distributed amongst potential test users to gauge their preferences
					and performances, with a survey at the end to gather feedback and preferences.
				</p>

				<br />
				<br />
				<br />
				<br />
				<h1>Question & Hypothesis</h1>
				<br />
				<p>The question we aim to answer through conducting this study is:</p>
				<p>
					Are traditional sign up forms still ideal in this day and age? Are there any
					evident usability issues with it, and can we improve it?
				</p>
				<br />
				<p>
					Our hypothesis is that the use of SSO will save the user some small amount of time,
					however they will indicate preference for control over the account details.
				</p>

				<br />
				<br />
				<br />
				<br />
				<h1>Methodology</h1>
				<h4>How we're going about the study - refence relevant literature</h4>
				<br />
				<p>
					To gather findings, we will be utilizing a quantitative, statistical analysis study.
					This study will involve:
				</p>
				<ul>
					<li>Measuring time taken for both form sign-up and SSO.</li>
					<li>Alternating the order of each method to reduce bias. (A/B Testing)</li>
					<li>
						Asking the user a series of usability questions to gauge preferences
						in a survey after both sign-up methods.
					</li>
				</ul>

				<br />
				<h2>Processes & Theory</h2>

				<h4>Quantitative Research</h4>
				<p>
					As described by Fischler (n.d), quantitative research primarily follows the six steps
					of identifying a problem, justifying the problem, identifying and specifying data items
					to measure/observe,	collecting data, analsying and intepreting the data, and
					finally reviewing, evaluating and reporting the data.
				</p>
				<p>The theory behind quantitative is...</p>
				<br />

				<h4>A/B Testing</h4>
				<p>A/B testing processes involve...</p>
				<p>The theory behind A/B testing is...</p>
				<br />

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

				<br />
				<br />
				<div className="references">
				<h1>References</h1>
				<p>
					Fischler, S. (n.d).
					<em> Quantitative Research Methods. </em>
					Retrieved May 25, 2021, from
					https://education.nova.edu/Resources/uploads/app/35/files/arc_doc/quantitative_research_methods.pdf
				</p>

				</div>				
				<br />
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
