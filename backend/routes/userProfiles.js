const express   = require('express');
const {getUserProfiles, getUserProfileById,patchUserProfileById} = require('../controllers/userProfilesController');
const userProfilesRouter = express.Router();

//GET get user profiles.    /api/userProfiles/
userProfilesRouter.get('/', getUserProfiles);

//GET get user profile by ID.    /api/userProfiles/:userId
userProfilesRouter.get('/:userId', getUserProfileById);

//PATCH update user profile by ID.    /api/userProfiles/:userId
userProfilesRouter.patch('/:userId', patchUserProfileById);

module.exports = userProfilesRouter;