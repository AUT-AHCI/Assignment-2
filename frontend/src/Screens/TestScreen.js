import React, { useContext, useEffect } from 'react';
import FirebaseSSO from '../components/FirebaseSSO';
import Discliamer from '../components/Disclaimer';
import RegisterForm from '../components/RegisterForm';
import AboutUs from '../components/AboutUs';

const TestScreen = ({ history }) => {
	return (
		<>
			<FirebaseSSO></FirebaseSSO>
			<RegisterForm></RegisterForm>
			<Discliamer></Discliamer>
			<AboutUs></AboutUs>
		</>
	);
};

export default TestScreen;
