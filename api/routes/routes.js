const router = require("express").Router();


//controller
const authController = require('../controller/auth.controller');
const ConversationController = require('../controller/conversation.controller');
const MessageController = require('../controller/messages.controller');
const PostController = require('../controller/post.controller');
const UserController = require('../controller/users.controller');

// Login and regsiter routes
router.post("/api/auth/register", authController.RegisterHandler);
router.post("/api/auth/login", authController.LoginHandler);


//convo
router.post("/api/conversations/", ConversationController.CreateConversation);
router.get("/api/conversations/:userId", ConversationController.FetchConversation);
router.get("/api/conversations/find/:firstUserId/:secondUserId", ConversationController.ParticularTwoChats);

// messages /api/messages
router.post("/api/messages/", MessageController.CreateMessage);
router.get("/api/messages/:conversationId", MessageController.FetchConveration);

// post
// to create a post
router.post("/api/posts/", PostController.CreatePost);
// to update a post
router.put("/api/posts/:id", PostController.UpdatePost);
// to delete a post
router.delete("/api/posts/:id", PostController.DeletePost);
// like dislike
router.put("/api/posts/:id/like", PostController.LikeHandler);
//  to get a post
router.get("/api/posts/:id", PostController.FetchPost);
// get timeline Post 
router.get("/api/posts/timeline/:userId", PostController.FetchTimeLine);
// get users all posts
router.get("/api/posts/profile/:username", PostController.FetchAllPost);

// user Api /api/users
// update user
router.put('/api/users/:id', UserController.UpdateUser);
// get all users
router.get('/api/users/users', UserController.FetchAllUser);
// delete User
router.delete('/api/users/:id', UserController.DeleteUser);
//fetch a user
router.get('/api/users/', UserController.Fetch_a_User);
//get friends
router.get("/api/users/friends/:userId", UserController.FetchFriends);
//follow a user
router.put('/api/users/:id/follow', UserController.Follow_a_User);
//unfollow a user
router.put('/api/users/:id/unfollow', UserController.Unfollow_a_User);

module.exports = router;
