const { Router } = require('express');
const deletedPost = require('../Controller/deletedPost');
const getPost = require('../Controller/getPostID');
const getPostID = require('../Controller/getPostID');
const getUser = require('../Controller/getUser');
const getUserID = require('../Controller/getUserID');
const login = require('../Controller/login');
const postPost = require('../Controller/postPost');
const putUser = require('../Controller/putUser');
const putUserID = require('../Controller/putUserID');
const register = require('../Controller/register');
const authenticateToken = require('../Middleware/authToken')
const route = Router();

route.post('/api/auth/register', authenticateToken, register);

route.post('/api/auth/login', authenticateToken, login);

route.get('/api/posts', authenticateToken, getPost);

route.post('/api/posts', authenticateToken, postPost);

route.put('/api/posts/:id', authenticateToken, putUser);

route.get('/api/posts/:id', authenticateToken, getPostID);

route.delete('/api/posts/:id', authenticateToken, deletedPost);

route.get('/api/users', authenticateToken, getUser);

route.get('/api/users/:id', authenticateToken, getUserID);

route.put('/api/users/:id', authenticateToken, putUserID);

module.exports=route