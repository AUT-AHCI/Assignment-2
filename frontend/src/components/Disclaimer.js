import React, { useEffect, } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
// var ScrollBox = require('react-scroll-box').ScrollBox; // ES5
import {ScrollBox, ScrollAxes, FastTrack} from 'react-scroll-box'; // ES6

const Disclaimer = () => {
	

	return (
		<div>
			<Container className="d-flex flex-column justify-content-center align-items-center h-100 w-50 my-5">
				<h2>Disclaimer</h2>
				<div className="disclaimer-text">
					<p>
						The purpose of this research project is to explore the useability of single sign on (SSO) compared to signing up with a traditional form. We will then get you to take a survey at the end to gather your feedback on the useability of both sign-up methods.
						This research is being conducted by Ashely Thew, Aaron Gilbert, Travis Hun and Robert Ankersmit at the Auckland University of Technology (AUT).
						You are invited to participate in this research project because you have the capability to use a variety of sign-up methods, such as SSO and the traditional form sign up.
						Your participation in this research project is voluntary and you can choose not to participate. If you decide to participate in this research project, you may withdraw at any time. If you decide not to participate or withdraw from the research project prematurely, you will not be penalized in any way.
						The survey questions will be about how you found using the different sign-up methods and whether one method was more usable for you when compared with the other sign-up method.
						The procedure involves signing in with either a SSO or a traditional form sign up, this will take approximately 5 to 10 minutes or less in some cases. Your responses will be confidential and will not collect your IP address, name,	
						The results of this study will be used for scholarly purposes only and may be shared with AUT representatives.
						If you have any questions in regards to the research please contact.
						This research has been approved by Dr Robert Wellington from AUT.
						By clicking on ‘agree’ button below this indicates the following:
						-	You have read the above information.
						-	You are voluntarily agreeing to participate.
						If you do not wish to participate, please select the ‘disagree’ option.
					</p>
				</div>
			</Container>
		</div>
	);
};

export default Disclaimer;
