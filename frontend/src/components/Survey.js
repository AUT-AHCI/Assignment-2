import React, { useState } from 'react';
import { Button, Col, Container, Row, ButtonGroup } from 'react-bootstrap';
import axios from 'axios';

const backgroundStyle = {
	background:
		'linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),url("../img/casino.jpg")',

	backgroundPosition: 'center',
	backgroundSize: 'cover',
	height: '100vh',
	textalign: 'center',
};

const Survey = ({ email, recieve, ssoTime, formTime, next }) => {
	const [passwordRequirements, setPasswordRequirements] = useState(-1);
	const [formDelays, setFormDelays] = useState('');

	const [ssoComfortabe, setSSOComfortabe] = useState(-1);
	const [ssoFeelSavedTime, setSSOFeelSavedTime] = useState(-1);
	const [ssoIssues, setSSOIssues] = useState('');

	const [formUsability, setFormUsability] = useState(-1);
	const [ssoUsability, setSSOUsability] = useState(-1);

	const [preference, setPreference] = useState(null);

	const submitHandler = async (e) => {
		e.preventDefault();

		if (
			formUsability === -1 ||
			ssoUsability === -1 ||
			preference === null ||
			passwordRequirements === -1 ||
			ssoComfortabe === -1 ||
			ssoFeelSavedTime === -1
		) {
			return;
		}
		e.target.disabled = true;

		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};

		await axios.post(
			'/api/users/survey',
			{
				email,
				passwordRequirements,
				formDelays,
				ssoComfortabe,
				ssoFeelSavedTime,
				ssoIssues,
				formUsability,
				ssoUsability,
				preference,
				recieve,
			},
			config
		);
		next();
	};

	let arr = Array.apply(null, { length: 5 }).map(Number.call, Number);
	return (
		<div style={backgroundStyle}>
			<Container className="text-center">
				<br />
				<h2>Login Survey</h2>
				<hr />

				<br />
				{/* <div>
					<h3>Results:</h3>
					<Row className="d-flex">
						<Col md={4} xs={12}>{` `}</Col>
						<Col md={2} xs={12}>
							<br />
							Form:
							<br />
							{`${formTime} Seconds`}
						</Col>
						<Col md={2} xs={12}>
							<br />
							SSO:
							<br />
							{`${ssoTime} Seconds`}
						</Col>
					</Row>
				</div> */}
				<hr />

				<p>Were the password requirements excessive:</p>
				<div
					className="align-items-center d-flex justify-content-center"
					style={{ marginBottom: 20 }}
				>
					<ButtonGroup aria-label="" id="">
						<Button
							variant="secondary"
							onClick={(e) => setPasswordRequirements(1)}
							active={passwordRequirements === 1}
						>
							Yes
						</Button>
						<Button
							variant="secondary"
							onClick={(e) => setPasswordRequirements(0)}
							active={passwordRequirements === 0}
						>
							No
						</Button>
					</ButtonGroup>
				</div>

				<p>Did any other part of the form cause delays:</p>
				<div
					className="align-items-center d-flex justify-content-center"
					style={{ marginBottom: 20 }}
				>
					<textarea
						id="noter-text-area"
						name="textarea"
						value={formDelays}
						onChange={(e) => setFormDelays(e.value)}
					/>
				</div>

				<p>Do you feel you saved time using SSO:</p>
				<div
					className="align-items-center d-flex justify-content-center"
					style={{ marginBottom: 20 }}
				>
					<ButtonGroup aria-label="" id="">
						<Button
							variant="secondary"
							onClick={(e) => setSSOFeelSavedTime(1)}
							active={ssoFeelSavedTime === 1}
						>
							Yes
						</Button>
						<Button
							variant="secondary"
							onClick={(e) => setSSOFeelSavedTime(0)}
							active={ssoFeelSavedTime === 0}
						>
							No
						</Button>
					</ButtonGroup>
				</div>

				<p>Do you feel comfortable associating your SSO account(s) to this site:</p>
				<div
					className="align-items-center d-flex justify-content-center"
					style={{ marginBottom: 20 }}
				>
					<ButtonGroup aria-label="" id="">
						<Button
							variant="secondary"
							onClick={(e) => setSSOComfortabe(1)}
							active={ssoComfortabe === 1}
						>
							Yes
						</Button>
						<Button
							variant="secondary"
							onClick={(e) => setSSOComfortabe(0)}
							active={ssoComfortabe === 0}
						>
							No
						</Button>
					</ButtonGroup>
				</div>

				<p>Was there any other issues connecting your SSO:</p>
				<div
					className="align-items-center d-flex justify-content-center"
					style={{ marginBottom: 20 }}
				>
					<textarea
						id="noter-text-area"
						name="textarea"
						value={ssoIssues}
						onChange={(e) => setSSOIssues(e.value)}
					/>
				</div>

				<Row className="d-flex justify-content-center">
					<Col md={4} xs={12}>
						<p>Signup form usability:</p>
						<div
							className="align-items-center d-flex justify-content-center"
							style={{ marginBottom: 20 }}
						>
							<h4
								className="justify-content-center d-flex"
								style={{ marginBottom: 0, marginRight: 20 }}
							>
								Easy
							</h4>
							<ButtonGroup aria-label="" id="">
								{arr.map((item, index) => {
									item = item + 1;
									return (
										<Button
											type="submit"
											variant="secondary"
											onClick={(e) => setFormUsability(item)}
											active={formUsability === item}
											key={index}
										>
											{`${item}`}
										</Button>
									);
								})}
							</ButtonGroup>
							<h4
								className="justify-content-center d-flex"
								style={{ marginBottom: 0, marginLeft: 20 }}
							>
								Hard
							</h4>
						</div>

						<p>SSO usability:</p>
						<div
							className="align-items-center d-flex justify-content-center"
							style={{ marginBottom: 20 }}
						>
							<h4
								className="justify-content-center d-flex"
								style={{ marginBottom: 0, marginRight: 20 }}
							>
								Easy
							</h4>
							<ButtonGroup aria-label="" id="">
								{arr.map((item, index) => {
									item = item + 1;
									return (
										<Button
											variant="secondary"
											onClick={(e) => setSSOUsability(item)}
											active={ssoUsability === item}
											key={index}
										>
											{`${item}`}
										</Button>
									);
								})}
							</ButtonGroup>
							<h4
								className="justify-content-center d-flex"
								style={{ marginBottom: 0, marginLeft: 20 }}
							>
								Hard
							</h4>
						</div>

						<p>Sign up preference:</p>
						<div
							className="align-items-center d-flex justify-content-center"
							style={{ marginBottom: 20 }}
						>
							<ButtonGroup aria-label="" id="">
								<Button
									variant="secondary"
									onClick={(e) => setPreference('signup')}
									active={preference === 'signup'}
								>
									Signup form
								</Button>
								<Button
									variant="secondary"
									onClick={(e) => setPreference('sso')}
									active={preference === 'sso'}
								>
									Google SSO
								</Button>
							</ButtonGroup>
						</div>
						<div>
							{' '}
							<Button variant="primary" onClick={submitHandler}>
								Submit
							</Button>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Survey;
