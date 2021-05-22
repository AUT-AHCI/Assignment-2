const firebase = require('firebase-admin');
require('dotenv').config();

const config = JSON.parse(process.env.FIREBASE_CONFIG);
console.log(config);

firebase.initializeApp({
	credential: firebase.credential.cert(config),
});

const database = firebase.firestore();

exports.database = database;
