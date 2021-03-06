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

exports.insertSurvey = (
	email,
	password_requirements,
	form_delays,
	sso_comfortabe,
	sso_feel_saved_time,
	sso_issues,
	form_usability,
	sso_usability,
	preference,
	recieve
) => {
	database
		.collection('surveys')
		.add({
			email: email,
			password_requirements: Boolean(password_requirements),
			form_delays: form_delays,
			sso_comfortabe: Boolean(sso_comfortabe),
			sso_feel_saved_time: Boolean(sso_feel_saved_time),
			sso_issues: sso_issues,
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

exports.getSurveyResults = async (fields) => {
	const docs = await database.collection('surveys').get();
	const data = [];
	docs.forEach((doc) => {
		const info = doc.data();
		const result = {};
		for (var field in fields) {
			result[field] = info[field];
		}
	});
	return data;
};

exports.getTimes = async () => {
	const docs = await database.collection('times').get();
	const data = [];
	docs.forEach((doc) => {
		const info = doc.data();
		delete info.email;
		data.push(info);
	});
	return data;
};

exports.getSurveyCount = async () => {
	var count;
	for (var count = 0; count < 5; count++) {
		await database
			.collection('surveys')
			.get()
			.then((result) => {
				count = result.size;
			}, console.error);
	}
	return count;
};

exports.getUsabilityRatings = async (rating) => {
	var data = { sso: {}, form: {} };
	for (var count = 1; count <= 5; count++) {
		await database
			.collection('surveys')
			.where(`sso_usability`, '==', count)
			.get()
			.then((result) => {
				data['sso'][count] = result.size;
			}, console.error);
		await database
			.collection('surveys')
			.where(`form_usability`, '==', count)
			.get()
			.then((result) => {
				data['form'][count] = result.size;
			}, console.error);
	}
	return data;
};
