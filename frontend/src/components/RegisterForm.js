import React, { useState, useEffect, useContext } from 'react';
import { Alert, Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserProvider } from '../UserContext';
import zxcvbn from 'zxcvbn';

const backgroundStyle = {
	background:
		'linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),url("../img/casino.jpg")',

	backgroundPosition: 'center',
	backgroundSize: 'cover',
	height: '100vh',
};

const PASSWORD_MIN_LENGTH = 7;
const regexrLowercase = /[a-z]/gm;
const regexUppercase = /[A-Z]/gm;
const regexDigit = /\d/gm;
const regexSpecial = /.*\W/gm;

const RegisterScreen = ({ history }) => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [message, setMessage] = useState(null);
	const [error, setError] = useState(null);

	// const redirect = location.search ? location.search.split('=')[1] : '/';

	const submitHandler = async (e) => {
		e.preventDefault();
		if (!name || name.length === 0) {
			setMessage('Please enter a name');
			return;
		}
		if (!email || email.length === 0) {
			setMessage('Please enter a email');
			return;
		}
		if (!password || password.length <= PASSWORD_MIN_LENGTH) {
			setMessage('Please enter a password');
			return;
		}
		if (!confirmPassword || confirmPassword.length <= PASSWORD_MIN_LENGTH) {
			setMessage('Please confirm your password');
			return;
		}

		if (password !== confirmPassword) {
			setMessage('Passwords do not match');
			return;
		}

		try {
			setMessage(null);
			//const user = await register(name, email, password);
			//setUser(user);
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
				<Row className="d-flex justify-content-center ">
					<Col md={8} xs={12}>
						<Form onSubmit={submitHandler} className="my-5">
							<input type="hidden" value="something"></input>
							<Form.Group controlId="name">
								<Form.Label className="text-style  ">Name</Form.Label>
								<Form.Control
									readOnly="readonly"
									onFocus={(e) =>
										console.log(e.target.removeAttribute('readonly'))
									}
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
									onFocus={(e) =>
										console.log(e.target.removeAttribute('readonly'))
									}
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
									onFocus={(e) =>
										console.log(e.target.removeAttribute('readonly'))
									}
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
									onFocus={(e) =>
										console.log(e.target.removeAttribute('readonly'))
									}
									autoComplete="new-password"
									type="password"
									placeholder="Confirm Password"
									value={confirmPassword}
									onChange={(e) => setConfirmPassword(e.target.value)}
									required
								></Form.Control>
							</Form.Group>

							<Button type="submit" variant="primary" className="my-2">
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

export default RegisterScreen;
