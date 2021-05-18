import React, { useEffect, } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Disclaimer = () => {
	

	return (
		<div>
			<Container className="d-flex flex-column justify-content-center align-items-center w-50 my-5">
				<h2>Consent Form</h2>
				<h4>Before proceeding, please take a moment to review and accept the below terms, along with the linked information sheet.</h4>
				<div className="disclaimer-text">
				<form>
					<table>
						<tr>
							<td>
								<input type="checkbox" id="term1" name="term1" /><br />
							</td>
							<td>
								<label for="term1">I have read and understood the information provided about this research project in the <a href="" target="_blank">Information Sheet</a> dated 18th May 2021.</label><br />
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
					</table>
					<br/><br/>
					<p>I wish to receive a summary of the research findings (please tick one):</p>
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
				</div>
			</Container>
			<Container className="d-flex flex-column  align-items-center">
				<Row>
					<LinkContainer to="/test" className="mx-2 my-2">
						<Button className="activityBtn">Start Research Activity</Button>
					</LinkContainer>
				</Row>
			</Container>
		</div>
	);
};

export default Disclaimer;
