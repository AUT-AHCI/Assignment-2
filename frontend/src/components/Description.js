import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Description = () => {
	const containerStyle = {
		background: 'rgba(0, 0, 0, 0.6)',
		backgroundPosition: 'center',
		backgroundSize: 'cover',
		height: '100%'
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
					Quantitative research is divided into two areas of study, descriptive, and experimental
					(University of Southern California, 2021). Descriptive study measures each subject once,
					whereas experimental measures subjects twice, typically before and after the item of testing.
					In our case, descriptive study is ideal, as we are analysing the subject's usage of the test item.
				</p>
				<br />
				<p>
					As described by Fischler (n.d), quantitative research has a particular emphasis
					on collecting and analysing information	in the form of numbers. It serves as an effective
					means on comparing groups and measuring distinct attributes about individuals in groups,
					through methods such as experiments, surveys, and correlational studies.
				</p>
				<br />

				<h4>A/B Testing</h4>
				<p>A/B testing processes involve...</p>
				<p>The theory behind A/B testing is...</p>
				<br />
				<h4>Useability Research</h4>
				<p>
					As (Lewis, 2014) states, useability can be looked at how an individual or series of individual features work, in relation to the communication of an idea or concept. For example, as part of our study we are comparing whether or not SSO (single sign up) communicates with the user in a more concise fashion than a traditional form. In other words, we are looking to see if there is clear and precise understanding by the user when it comes to them using the two aforementioned methods. Furthermore, (Lewis, 2014) states that it is important to utilize quantitative and or qualitative methods when conducting a useability study. To that end we are incorporating quantitative as part of our research process.
				</p>
				<br />
				<p>
					According to (Hertzum, 2010), there are at least six different useability images. An image of useability being how useability is perceived. In our study we will be focusing on universal and perceived useability, as this best fits in with our study’s hypothesis. Perceived useability looks at how the user interacts with the useability system, in this case SSO and a traditional sign-up form. Whereas universal usability is more about making sure that everyone can use a system. In this case, we are looking into whether or not SSO is universally useable or if SSO has a greater appeal in terms of its universal useability.
				</p>
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
					University of Southern California. (2021).
					<em> Quantitative Methods. </em>
					Retrieved May 25, 2021, from
					https://libguides.usc.edu/writingguide/quantitative
				</p>
				<p>
					Fischler, S. (n.d).
					<em> Quantitative Research Methods. </em>
					Retrieved May 25, 2021, from
					https://education.nova.edu/Resources/uploads/app/35/files/arc_doc/quantitative_research_methods.pdf
				</p>
				<p>
					Hertzum, M. (2010).
					<em> Images of Usability. </em>
					Intl. Journal Of Human–Computer Interaction, 35.
				</p>
				<p>
					Lewis, J. R. (2014).
					<em> Usability: Lessons Learned … and Yet to Be Learned. </em>
					Journal of Human–Computer Interaction, 23.
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
