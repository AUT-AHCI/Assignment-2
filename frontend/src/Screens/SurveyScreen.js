import React, { useEffect, useState } from 'react';
import FirebaseSSO from '../components/FirebaseSSO';
import RegisterForm from '../components/RegisterForm';
import Disclaimer from '../components/Disclaimer';
import axios from 'axios';
import Survey from '../components/Survey';

const Pages = {
	DISCLAIMER: 'Disclaimer',
	FORM: 'Form',
	SSO: 'SSO',
	SURVEY: 'Survey',
};

const SurveyScreen = ({ history }) => {
	const [page, setPage] = useState(Pages.DISCLAIMER);
	const [email, setEmail] = useState(null);
	const [formStartTime, setFormStartTime] = useState(null);
	const [ssoStartTime, setSSOStartTime] = useState(null);
	const [ssoTime, setSsoTime] = useState(null);
	const [formTime, setFormTime] = useState(null);
	const [recieve, setRecieve] = useState(false);

	useEffect(() => {
		async function submitInformation() {
			const config = {
				headers: {
					'Content-Type': 'application/json',
				},
			};
			await axios.post('/api/users/time', { email, ssoTime, formTime }, config);
		}
		if (email != null) {
			submitInformation();
		}
	}, [email, formTime, ssoTime]);

	let component = null;
	switch (page) {
		case Pages.DISCLAIMER:
			component = (
				<Disclaimer
					next={() => {
						setFormStartTime(new Date().getTime());
						setPage(Pages.FORM);
					}}
					setRecieve={setRecieve}
				/>
			);
			break;
		case Pages.FORM:
			component = (
				<RegisterForm
					next={() => {
						setSSOStartTime(new Date().getTime());
						setPage(Pages.SSO);
					}}
					timeMethod={setFormTime}
					time={formStartTime}
				/>
			);
			break;
		case Pages.SSO:
			component = (
				<FirebaseSSO
					timeMethod={setSsoTime}
					emailMethod={setEmail}
					next={() => {
						setPage(Pages.SURVEY);
					}}
					time={ssoStartTime}
				/>
			);
			break;
		case Pages.SURVEY:
			component = (
				<Survey
					email={email}
					recieve={recieve}
					ssoTime={ssoTime}
					formTime={formTime}
					next={() => {
						history.push('/thanks');
					}}
				></Survey>
			);
			break;
		default:
			<div>Hello</div>;
			break;
	}

	return <>{component}</>;
};

export default SurveyScreen;
