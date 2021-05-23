const { database } = require('../config/db');

exports.insertTime = (email, sso_time, form_time) => {
	database
		.collection('times')
		.add({
			email: email,
			sso_time: Number(sso_time),
			form_time: Number(form_time),
		})
		.then((docRef) => {
			console.log('Times written with ID: ', docRef.id);
		})
		.catch((error) => {
			console.error('Error adding document: ', error);
		});
};

exports.insertSurvey = (email, form_usability, sso_usability, preference, recieve) => {
	database
		.collection('surveys')
		.add({
			email: email,
			form_usability: Number(form_usability),
			sso_usability: Number(sso_usability),
			preference: preference,
			recieve: Boolean(recieve),
		})
		.then((docRef) => {
			console.log('Survey written with ID: ', docRef.id);
		})
		.catch((error) => {
			console.error('Error adding document: ', error);
		});
};
