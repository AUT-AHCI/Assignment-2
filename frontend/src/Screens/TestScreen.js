import React, { useContext, useEffect } from 'react';
import FirebaseSSO from '../components/FirebaseSSO';
import RegisterForm from '../components/RegisterForm';

const TestScreen = ({ history }) => {
	return (
		<>
			<FirebaseSSO></FirebaseSSO>
			<RegisterForm></RegisterForm>
		</>
	);
};

export default TestScreen;
