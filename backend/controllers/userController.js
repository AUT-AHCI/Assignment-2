const asyncHandler = require('express-async-handler');
const { insertTime, insertSurvey, getUsabilityRatings, getSurveyCount } = require('../data/users');

exports.insertTime = asyncHandler(async (req, res) => {
	const { email, ssoTime, formTime } = req.body;
	console.log(email, ssoTime, formTime);

	if (email && ssoTime && formTime) {
		insertTime(email, ssoTime, formTime);
		res.json({
			valid: true,
		});
	} else {
		res.status(401);
		throw new Error('Invalid time details');
	}
});

exports.insertSurvey = asyncHandler(async (req, res) => {
	const {
		email,
		passwordRequirements,
		formDelays,
		ssoComfortabe,
		ssoFeelSavedTime,
		ssoIssues,
		formUsability,
		ssoUsability,
		preference,
		recieve,
	} = req.body;

	try {
		insertSurvey(
			email,
			passwordRequirements,
			formDelays,
			ssoComfortabe,
			ssoFeelSavedTime,
			ssoIssues,
			formUsability,
			ssoUsability,
			preference,
			recieve
		);
		res.json({
			valid: true,
		});
	} catch (error) {
		console.log(error);
		res.status(401);
		throw new Error('Invalid survey details');
	}
});

exports.getUsabilityRatings = asyncHandler(async (req, res) => {
	var data = await getUsabilityRatings(rating);
	res.json(...data, {
		valid: true,
	});
});
exports.getSurveyCount = asyncHandler(async (req, res) => {
	var count = await getSurveyCount(rating);
	res.json({
		valid: true,
		count: count,
	});
});
