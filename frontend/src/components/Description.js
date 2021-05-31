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
				<h4>Why Quantitative?</h4>
				<p>
					We have selected this methodology because quantitative research typically 
					follows a strict procedure prepared specifcally for statistical analysis, 
					to discover complex casual relationships, and the effects of influence variables 
					have on each other (Alzheimer Europe, 2009). Often consisting of instruments such as 
					questionnaires with rating scales, quantitative research is carried out to answer 
					a specific question or address a certain issue (Dewitt Wallace Library, 2021).
					Due to the methods in which quantitative research is commonly carried out with, 
					it is typically a more time efficient methodology.
				</p>
				<h4>Why not Qualitative?</h4>
				<p>
					Qualitative research is excellent for recording, analysing and prying deeper into 
					the significance of human behaviour and experience (Alzheimer Europe, 2009), 
					allowing for discovery of patterns of meaning in data collected through raw 
					participant observation and in-depth interviews. Logic then dictates that 
					qualitative research would make a solid choice for our research, however, 
					the reason we have decided not to go with qualitative research, is due to the 
					main constraint of time. Interviews and observation sessions with consenting 
					participants takes a considerable time to prepare and carry out, making 
					qualitative research a highly difficult route to take. In the event we were 
					organized much earlier, qualitative research would have been the ideal choice.
				</p>

				<br />
				<br />
				<br />
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
				<p>A/B Testing process involve gather data, identify goals, generate hypothesis, create variations, 
					run experiment, and finally analyze the results ("A/B testing," n.d.).</p>
				<p>The theory behind A/B testing is that we have a webpage and we change it to create a new version of that webpage ("A/B testing," n.d.). 
					In our case, we have a webpage for traditional form sign up 
					and we modify it to a Single-sign-on (Google SSO) webpage to compare which one the user prefer.</p>
				<p>
					The methods involved in A/B testing typically follow the process of identifying 
					elements to compare and measure, creating variations of the product reflecting 
					differences in the identified elements, running the experiment to gauge the effects 
					on test users, and finally analysing the data results (Optimizely, nd.).
				</p>
				<br />
				<p>
					A/B testing is a method of comparing two versions of a webpage or app against each 
					other (Optimizely, n.d) to determine which one performs better. It allows for 
					checking focused questions about the product being researched, to measure the impact 
					of certain changes. This practice of testing allows for researchers to construct 
					hypotheses and learn why certain elements and aspects of a product impact user behaviour.
				</p>
				<br />

				<h4>Usability Research</h4>
				<p>
					As (Lewis, 2014) states, usability can be looked at how an individual or series of 
					individual features work, in relation to the communication of an idea or concept. 
					For example, as part of our study we are comparing whether or not SSO (single sign up) 
					communicates with the user in a more concise fashion than a traditional form. 
					In other words, we are looking to see if there is clear and precise understanding 
					by the user when it comes to them using the two aforementioned methods. 
					Furthermore, (Lewis, 2014) states that it is important to utilize quantitative 
					and or qualitative methods when conducting a usability study. To that end we 
					are incorporating quantitative as part of our research process.
				</p>
				<br />
				<p>
					According to (Hertzum, 2010), there are at least six different usability images. 
					An image of usability being how usability is perceived. In our study we will be 
					focusing on universal and perceived usability, as this best fits in with our 
					study’s hypothesis. Perceived usability looks at how the user interacts with the 
					usability system, in this case SSO and a traditional sign-up form. Whereas 
					universal usability is more about making sure that everyone can use a system. 
					In this case, we are looking into whether or not SSO is universally useable or 
					if SSO has a greater appeal in terms of its universal usability.
				</p>
				
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
					A/B testing. (n.d.).
					<em> Optimizely: The World's Leading Progressive Delivery and Experimentation Platform.</em>
					Retrieved May 25, 2021, from
					https://www.optimizely.com/optimization-glossary/ab-testing/
					Alzheimer Europe. (2009).
					<em> The Four Main Approaches. </em>
					Retrieved May 28, 2021, from
					https://www.alzheimer-europe.org/Research/Understanding-dementia-research/Types-of-research/The-four-main-approaches
				</p>
				<p>
					Dewitt Wallace Library. (2021).
					<em> Qualitative vs. Quantitative. </em>
					Retrieved May 28, 2021, from
					https://libguides.macalester.edu/c.php?g=527786&p=3608639
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
				<p>
					Optimizely. (n.d.).
					<em> A/B Testing. </em>
					Retrieved May 28, 2021, from
					https://www.optimizely.com/optimization-glossary/ab-testing/
				</p>
				<p>
					University of Southern California. (2021).
					<em> Quantitative Methods. </em>
					Retrieved May 25, 2021, from
					https://libguides.usc.edu/writingguide/quantitative
				</p>
				
				

				</div>
			</Container>
		</div>
	);
};

export default Description;
