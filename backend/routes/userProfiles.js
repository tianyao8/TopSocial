const express   = require('express');
const {getUserProfiles} = require('../controllers/userProfilesController');
const userProfilesRouter = express.Router();

//GET get user profiles.    /api/userProfiles/
userProfilesRouter.get('/', getUserProfiles);

//GET get user profile by ID.    /api/userProfiles/:userId



//PATCH update user profile by ID.    /api/userProfiles/:userId

module.exports = userProfilesRouter;