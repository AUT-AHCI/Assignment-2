import React, { useContext, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import firebase from 'firebase';
import GoogleButton from 'react-google-button';

const FirebaseSSO = ({ timeMethod, emailMethod, next }) => {
	var provider = new firebase.auth.GoogleAuthProvider();

	const time = new Date().getTime();

	//console.log(method);
	//method(time);

	function signUp() {
		firebase
			.auth()
			.signInWithPopup(provider)
			.then((result) => {
				var timeTaken = (new Date().getTime() - time) / 1000.0;
				/** @type {firebase.auth.OAuthCredential} */
				var credential = result.credential;

				// This gives you a Google Access Token. You can use it to access the Google API.
				//var token = credential.accessToken;
				//console.log(credential);
				// The signed-in user info.
				var user = result.user;
				console.log(user);
				console.log(user.email);
				console.log(timeTaken);

				timeMethod(timeTaken);
				emailMethod(user.email);
				next();
				// ...
			})
			.catch((error) => {
				// Handle Errors here.
				var errorCode = error.code;
				var errorMessage = error.message;
				// The email of the user's account used.
				var email = error.email;
				// The firebase.auth.AuthCredential type that was used.
				var credential = error.credential;
				// ...
			});
	}

	return (
		<div>
			<Container className="d-flex flex-column justify-content-center align-items-center h-100 my-5">
				<h2>SSO</h2>
				<GoogleButton onClick={signUp} />
			</Container>
		</div>
	);
};

export default FirebaseSSO;
