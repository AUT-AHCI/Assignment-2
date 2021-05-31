import React from 'react';
import { Container, Row, Button, Form } from 'react-bootstrap';

const Disclaimer = ({ next, setRecieve }) => {
	function submit() {
		for (var i = 1; i <= 5; i++) {
			const value = document.getElementById('term' + i);
			if (!value.checked) {
				return;
			}
		}
		const recieveYes = document.getElementById('term6');
		const recieveNo = document.getElementById('term7');
		if (!recieveYes.checked && !recieveNo.checked) {
			return;
		}
		setRecieve(recieveYes.checked);
		next();
	}

	return (
		<div>
			<Form>
				<Container className="d-flex flex-column justify-content-center align-items-center w-50 my-5">
					<h2>Consent Form</h2>
					<h4>
						Before proceeding, please take a moment to review and accept the below
						terms, along with the linked information sheet.
					</h4>
					<div className="disclaimer-text">
						<table>
							<tbody>
								<tr>
									<td>
										<input type="checkbox" id="term1" name="term1" />
										<br />
									</td>
									<td>
										<label htmlFor="term1">
											I have read and understood the information provided
											about this research project in the{' '}
											<a href="InformationSheet.pdf" target="_blank">
												Information Sheet
											</a>{' '}
											dated 18th May 2021.
										</label>
										<br />
									</td>
								</tr>
								<tr>
									<td>
										<input type="checkbox" id="term2" name="term2" />
									</td>
									<td>
										<label htmlFor="term2">
											I have had an opportunity to ask questions and to have
											them answered.
										</label>
										<br />
									</td>
								</tr>
								<tr>
									<td>
										<input type="checkbox" id="term3" name="term3" />
									</td>
									<td>
										<label htmlFor="term3">
											I understand that taking part in this study is voluntary
											(my choice) and that I may withdraw from the study at
											any time without being disadvantaged in any way.
										</label>
										<br />
									</td>
								</tr>
								<tr>
									<td>
										<input type="checkbox" id="term4" name="term4" />
									</td>
									<td>
										<label htmlFor="term4">
											I understand that if I withdraw from the study then I
											will be offered the choice between having any data that
											is identifiable as belonging to me removed or allowing
											it to continue to be used. However, once the findings
											have been produced, removal of my data may not be
											possible.
										</label>
										<br />
									</td>
								</tr>
								<tr>
									<td>
										<input type="checkbox" id="term5" name="term5" />
									</td>
									<td>
										<label htmlFor="term5">
											I agree to take part in this research.
										</label>
										<br />
									</td>
								</tr>
							</tbody>
						</table>
						<br />
						<br />
						<h5>
							I wish to receive a summary of the research findings (please tick one):
						</h5>
						<table>
							<tbody>
								<tr>
									<td>
										<input type="radio" id="term6" name="termSummary" />
										<label htmlFor="term6">Yes</label>
									</td>
									<td>
										<input type="radio" id="term7" name="termSummary" />
										<label htmlFor="term7">No</label>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</Container>
				<Container className="d-flex flex-column  align-items-center">
					<Row>
						<div className="mx-2 my-2">
							<Button
								className="activityBtn"
								onClick={(e) => {
									e.preventDefault();
									submit();
								}}
							>
								Start Research Activity
							</Button>
						</div>
					</Row>
				</Container>
			</Form>
		</div>
	);
};

export default Disclaimer;
