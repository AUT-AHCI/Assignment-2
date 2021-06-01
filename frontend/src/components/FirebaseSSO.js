import React from 'react';
import { Container } from 'react-bootstrap';
import firebase from 'firebase';
import GoogleButton from 'react-google-button';

const FirebaseSSO = ({ timeMethod, emailMethod, next, time }) => {
	var provider = new firebase.auth.GoogleAuthProvider();

	async function signUp() {
		firebase
			.auth()
			.signInWithPopup(provider)
			.then((result) => {
				var timeTaken = (new Date().getTime() - time) / 1000.0;

				var user = result.user;
				timeMethod(timeTaken);
				emailMethod(user.email);
				next();
			})
			.catch((error) => {
				console.log(error);
			});
	}

	return (
		<div>
			<Container className="d-flex flex-column justify-content-center align-items-center h-100 my-5">
				<h2>SSO Login</h2>
				<GoogleButton onClick={signUp} />
			</Container>
		</div>
	);
};

export default FirebaseSSO;
