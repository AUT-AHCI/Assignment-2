const express = require('express');
const { insertTime, insertSurvey } = require('../controllers/userController');

const router = express.Router();

router.route('/time').post(insertTime);
router.route('/survey').post(insertSurvey);

module.exports = router;
