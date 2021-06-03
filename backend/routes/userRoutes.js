const express = require('express');
const {
	insertTime,
	insertSurvey,
	getUsabilityRatings,
	getSurveyCount,
	getTimes,
} = require('../controllers/userController');

const router = express.Router();

router.route('/time').post(insertTime);
router.route('/survey').post(insertSurvey);

router.route('/survey/ratings').get(getUsabilityRatings);
router.route('/survey/count').get(getSurveyCount);
router.route('/survey/times').get(getTimes);

module.exports = router;
