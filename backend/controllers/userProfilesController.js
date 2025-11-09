const axios     = require('axios');
const USER_PROFILES_API_URL = 'http://localhost:8000/userProfiles';

const getUserProfiles = async function(req, res) {
    try {
        const response = await axios.get(USER_PROFILES_API_URL);
        const userProfiles = response.data;
        res.status(200).json({
            msg: 'User profiles retrieved successfully',
            data: userProfiles
        })
        
    } catch (error) {
        next(error);
    }
}

const getUserProfileById = async function(req, res,next) {
    const userId = req.params.userId;
    if(!userId){
        return res.status(400).send({msg: 'User ID is required'});
    }
    try {
        const response = await axios.get(`${USER_PROFILES_API_URL}/${userId}`);
        const userProfile = response.data;
        res.status(200).json({
            msg: 'User profile retrieved successfully',
            data: userProfile
        });
    } catch (error) {
        console.error('Error', error);
        next(error);
    }
}

const patchUserProfileById = async function(req,res,next){
    const userId = req.params.userId;
    if(!userId){
        return res.status(400).send('Id is required')
    }
    const newUserProfileData = req.body;
    console.log('New User Profile Data:', newUserProfileData);
    try {
        await axios.delete(`${USER_PROFILES_API_URL}/${userId}`);
        res.status(200).json({
            msg: 'User profile deleted successfully'
    })
    } catch (error) {
        next(error)
    }
}


module.exports ={getUserProfileById,getUserProfiles,patchUserProfileById};
