import React, { useEffect, useState } from 'react';
import FirebaseSSO from '../components/FirebaseSSO';
import RegisterForm from '../components/RegisterForm';
import Disclaimer from '../components/Disclaimer';

const Pages = {
	DISCLAIMER: 'Disclaimer',
	SSO: 'SSO',
	FORM: 'Form',
};

const TestScreen = ({ history }) => {
	const [page, setPage] = useState(Pages.DISCLAIMER);
	const [email, setEmail] = useState(null);
	const [ssoTime, setSsoTime] = useState(null);
	const [formTime, setFormTime] = useState(null);

	let component = null;
	switch (page) {
		case Pages.DISCLAIMER:
			component = <Disclaimer next={() => setPage(Pages.SSO)} />;
			break;
		case Pages.SSO:
			component = (
				<FirebaseSSO
					timeMethod={setSsoTime}
					emailMethod={setEmail}
					next={() => setPage(Pages.FORM)}
				/>
			);
			break;
		case Pages.FORM:
			component = <RegisterForm />;
			break;
		default:
			<div>Hello</div>;
			break;
	}

	return <>{component}</>;
};

export default TestScreen;
