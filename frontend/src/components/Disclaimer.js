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
								<label for="term1">I have read and understood the <a href="" target="_blank">information</a> provided about this research project in the Information Sheet dated 18/05/2021.</label><br />
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
				</div>
			</Container>
		</div>
	);
};

export default Disclaimer;
