const express = require('express');
const {getUserPosts,getUserPostById, addUserPost,deleteUserPostById,updateUserPost} = require('../controllers/userPostsController');
const userPostsRouter = express.Router();

//GET get all user posts /api/userPosts/
userPostsRouter.get('/', getUserPosts);
//GET get user post by ID /api/userPosts/:postId
userPostsRouter.get('/:postId', getUserPostById);
//POST post a user post /api/userPosts/
userPostsRouter.post('/', addUserPost);
//PUT update a user post by ID /api/userPosts/:postId
userPostsRouter.put('/:postId', updateUserPost);
//DELETE delete a user post by ID /api/userPosts/:postId
userPostsRouter.delete('/:postId', deleteUserPostById);
module.exports = userPostsRouter;