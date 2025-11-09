const axios = require('axios');
const USER_POSTS_API_URL = 'http://localhost:8000/userPosts';

const getUserPosts = async function(req, res, next) {
    try {
        const response = await axios.get(USER_POSTS_API_URL);
        const userPosts = response.data;
        res.status(200).json({
            msg: 'Get user posts successfully',
            data: userPosts
        });
    } catch (error) {
        next(error);
    }
}

const getUserPostById = async function(req, res, next) {
    const id = req.params.post_userId || req.params.postId;
    if(!id){
        return res.status(400).send('Post ID is required');
    }
    try {
        const response = await axios.get(`${USER_POSTS_API_URL}/${id}`);
        const userPost = response.data;
        res.status(200).json({
            msg: 'Get user post by ID successfully',
            data: userPost
        });
    } catch (error) {
        next(error);
    };
}

const addUserPost = async function(req, res, next) {
    const newUserPost = req.body;
    if(!newUserPost || Object.keys(newUserPost).length === 0){
        return res.status(400).send('New user post data is required');
    }
    try {
        await axios.post(USER_POSTS_API_URL,newUserPost,{
            headers: {"Content-Type": "application/json"}
        });
        const createdUserPost = response.data;
        res.status(200).json({
            msg: 'User post created successfully',
        });
    } catch (error) {
        next(error)
    }
}

const deleteUserPostById = async function(req,res,next){
    const postId = req.params.postId;
    if(!postId){
        return res.status(400).send('Post ID is required');
    }
    try {
        await axios.delete(`${USER_POSTS_API_URL}/${postId}`);
        res.status(200).json({
            msg: 'User post deleted successfully'
        });
    }
    catch (error) {
        next(error);
    }
}

const updateUserPost = async function(req,res,next){
    const postId = req.params.postId;
    if(!postId){
        return res.status(400).send('Post ID is required');
    }
    const updatedUserPostData = req.body;
    try {
        await axios.put(`${USER_POSTS_API_URL}/${postId}`,updatedUserPostData,{
            headers: {"Content-Type": "application/json"}
        });
        res.status(200).json({
            msg: 'User post updated successfully'
        });
    } catch (error) {
        next(error);
    }
}

module.exports = {getUserPosts,getUserPostById, addUserPost, deleteUserPostById, updateUserPost};