const express = require('express');
const userProfilesRouter = require('./userProfiles');

const router = express.Router();

router.use('/userProfiles', userProfilesRouter);

module.exports = router;