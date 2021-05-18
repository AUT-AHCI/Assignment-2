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
				<form>
					<table>
						<tr>
							<th>Accept</th>
						</tr>
						<tr>
							<td>
								<input type="checkbox" id="term1" name="term1" /><br />
							</td>
							<td>
								<label for="term1">I have read and understood the <a href="" target="_blank">information</a> provided about this research project in the Information Sheet dated dd mmmm yyyy.</label><br />
							</td>
						</tr>
						<tr>
							<td>
								<input type="checkbox" id="term2" name="term2" />
							</td>
							<td>
								<label for="term2">I have had an opportunity to ask questions and to have them answered.</label><br />
							</td>
						</tr>
						<tr>
							<td>
								<input type="checkbox" id="term3" name="term3" />
							</td>
							<td>
								<label for="term3">I understand that notes will be taken during the interviews and that they will also be audio-taped and transcribed.  (delete if not required)</label><br />
							</td>
						</tr>
						<tr>
							<td>
								<input type="checkbox" id="term4" name="term4" />
							</td>
							<td>
							<label for="term4">I understand that I will be recorded on video, but that this is then analysed and my face or any distinguishing features will not be used in any publication.  The video tapes will be then be stored in a locked cupboard in the office of the School of Engineering Computing and Mathematical Sciences.  (delete if not required)</label><br />
							</td>
						</tr>
						<tr>
							<td>
								<input type="checkbox" id="term5" name="term5" />
							</td>
							<td>
								<label for="term5">I understand that taking part in this study is voluntary (my choice) and that I may withdraw from the study at any time without being disadvantaged in any way.</label><br />
							</td>
						</tr>
						<tr>
							<td>
								<input type="checkbox" id="term6" name="term6" />
							</td>
							<td>
								<label for="term6">I understand that if I withdraw from the study then I will be offered the choice between having any data that is identifiable as belonging to me removed or allowing it to continue to be used. However, once the findings have been produced, removal of my data may not be possible.</label><br />
							</td>
						</tr>
						<tr>
							<td>
								<input type="checkbox" id="term7" name="term7" />
							</td>
							<td>
								<label for="term7">I agree to take part in this research.</label><br />
							</td>
						</tr>
						<tr>
							<td>
								<input type="checkbox" id="term8" name="term8" />
							</td>
							<td>
								<label for="term8">I wish to receive a summary of the research findings (please tick one):</label><br />
							</td>
						</tr>
					</table>
					<table>
						<tr>
							<td>
									<input type="radio" id="term9" name="term9" />
									<label for="term9">Yes</label>			
							</td>
							<td>
								<input type="radio" id="term9" name="term9" />
								<label for="term9">No</label>
							</td>
						</tr>
					</table>
					
					
					
					
				</form>
				{/* <input type="checkbox" id="accept"> Accept</input> */}
					{/* <p>
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
					</p> */}
				</div>
			</Container>
		</div>
	);
};

export default Disclaimer;
