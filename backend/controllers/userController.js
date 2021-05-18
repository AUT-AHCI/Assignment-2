const asyncHandler = require('express-async-handler');
const { insertData } = require('../data/users');

exports.submitData = asyncHandler(async (req, res) => {
	const { email, sso_time, form_time } = req.body;

	// console.log(user);

	if (email && sso_time && form_time) {
		insertData(email, sso_time, form_time);
		res.json({
			valid: true,
		});
	} else {
		res.status(401);
		throw new Error('Invalid submission details');
	}
});
