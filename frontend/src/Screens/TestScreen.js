import React, { useContext, useEffect } from 'react';
import FirebaseSSO from '../components/FirebaseSSO';
import Discliamer from '../components/Disclaimer';
import RegisterForm from '../components/RegisterForm';

const TestScreen = ({ history }) => {
	return (
		<>
			<FirebaseSSO></FirebaseSSO>
			<Discliamer></Discliamer>
			<RegisterForm></RegisterForm>
		</>
	);
};

export default TestScreen;
