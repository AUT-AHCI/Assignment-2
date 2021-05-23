import React, { useState, useEffect, useContext } from 'react';
import { Alert, Button, Col, Container, Form, Row } from 'react-bootstrap';

const backgroundStyle = {
	background:
		'linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),url("../img/casino.jpg")',

	backgroundPosition: 'center',
	backgroundSize: 'cover',
	height: '100vh',
};

const PASSWORD_MIN_LENGTH = 7;

const RegisterForm = ({ timeMethod, next, time }) => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [message, setMessage] = useState(null);
	const [error, setError] = useState(null);

	// const redirect = location.search ? location.search.split('=')[1] : '/';

	const submitHandler = (e) => {
		e.preventDefault();
		var timeTaken = (new Date().getTime() - time) / 1000.0;
		console.log(timeTaken);
		if (!name || name.length === 0) {
			setMessage('Please enter a name');
			return;
		}
		if (!email || email.length === 0) {
			setMessage('Please enter a email');
			return;
		}
		const regexLowercase = /[a-z]/gm;
		const regexUppercase = /[A-Z]/gm;
		const regexDigit = /\d/gm;
		const regexSpecial = /.*\W/gm;
		if (!password || password.length < PASSWORD_MIN_LENGTH) {
			setMessage('Password not long enough');
			return;
		}
		if (!regexLowercase.test(password)) {
			setMessage('Password must contain lowercase');
			return;
		}
		if (!regexUppercase.test(password)) {
			setMessage('Password must contain uppercase');
			return;
		}
		if (!regexDigit.test(password)) {
			setMessage('Password must contain a digit');
			return;
		}
		if (!regexSpecial.test(password)) {
			setMessage('Password must contain a special character');
			return;
		}
		if (password !== confirmPassword) {
			setMessage('Passwords do not match');
			return;
		}

		try {
			e.target.disabled = true;
			setMessage(null);
			timeMethod(timeTaken);
			next();
		} catch (error) {
			setError(
				error.response && error.response.data.message
					? error.response.data.message
					: error.message
			);
		}
	};

	return (
		<div style={backgroundStyle}>
			<Container>
				<br></br>
				<h2>Login Form</h2>
				<Row className="d-flex justify-content-center ">
					<Col md={4} xs={12}>
						<Form className="my-5">
							<input type="hidden" value="something"></input>
							<Form.Group controlId="name">
								<Form.Label className="text-style  ">Name</Form.Label>
								<Form.Control
									readOnly="readonly"
									onFocus={(e) => e.target.removeAttribute('readonly')}
									autoComplete="none"
									type="text"
									placeholder="Enter Name"
									value={name}
									onChange={(e) => setName(e.target.value)}
									required
								></Form.Control>
							</Form.Group>

							<Form.Group controlId="formBasicEmail">
								<Form.Label className="text-style  ">Email</Form.Label>
								<Form.Control
									readOnly="readonly"
									onFocus={(e) => e.target.removeAttribute('readonly')}
									autoComplete="none"
									type="email"
									placeholder="Enter Email"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									required
								></Form.Control>
							</Form.Group>
							<Form.Group className="my-3" controlId="formBasicPassword">
								<Form.Label className="text-style  ">Password</Form.Label>
								<Form.Control
									readOnly="readonly"
									onFocus={(e) => e.target.removeAttribute('readonly')}
									autoComplete="new-password"
									type="password"
									placeholder="Enter Password"
									value={password}
									onChange={(e) => setPassword(e.target.value)}
									required
								></Form.Control>
							</Form.Group>

							<Form.Group controlId="confirmPassword">
								<Form.Label className="text-style  ">Password</Form.Label>
								<Form.Control
									readOnly="readonly"
									onFocus={(e) => e.target.removeAttribute('readonly')}
									autoComplete="new-password"
									type="password"
									placeholder="Confirm Password"
									value={confirmPassword}
									onChange={(e) => setConfirmPassword(e.target.value)}
									required
								></Form.Control>
							</Form.Group>

							<Button onClick={submitHandler} variant="primary" className="my-2">
								Register
							</Button>
							{message && <Alert variant="info">{message}</Alert>}
							{error && <Alert variant="info">{error}</Alert>}
						</Form>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default RegisterForm;
