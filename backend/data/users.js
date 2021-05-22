const { database } = require('../config/db');

exports.insertData = (email, sso_time, form_time) => {
	console.log('Test');
	database
		.collection('times')
		.add({
			email: email,
			sso_time: Number(sso_time),
			form_time: Number(form_time),
		})
		.then((docRef) => {
			console.log('Document written with ID: ', docRef.id);
		})
		.catch((error) => {
			console.error('Error adding document: ', error);
		});
};
