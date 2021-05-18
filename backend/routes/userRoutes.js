const express = require('express');
const { submitData } = require('../controllers/userController');

const router = express.Router();

router.route('/submit').post(submitData);

module.exports = router;
