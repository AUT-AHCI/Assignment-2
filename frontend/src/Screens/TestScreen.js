import React, { useContext, useEffect } from 'react';
import FirebaseSSO from '../components/FirebaseSSO';
import Discliamer from '../components/Disclaimer';

const TestScreen = ({ history }) => {
	return (
		<>
			<FirebaseSSO></FirebaseSSO>
			<Discliamer></Discliamer>
		</>
	);
};

export default TestScreen;
