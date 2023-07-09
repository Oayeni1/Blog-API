const { Router } = require('express');
const delet = require('../Controller/deleteID');
const getID = require('../Controller/getID');
const getPost = require('../Controller/getPost');
const getUser = require('../Controller/getUser');
const getUserID = require('../Controller/getUserID');
const login = require('../Controller/login');
const postPost = require('../Controller/postPost');
const putID = require('../Controller/putID');
const putUserID = require('../Controller/putUserID');
const register = require('../Controller/register');

const route = Router();

route.post('/api/auth/register', register);

route.post('/api/auth/login', login);

route.get('/api/posts', getPost);

route.post('/api/posts', postPost);

route.put('/api/posts/:id', putID);

route.get('/api/posts/:id', getID);

route.delete('/api/posts/:id', delet);

route.get('/api/users', getUser);

route.get('/api/users/:id', getUserID);

route.put('/api/users/:id', putID);

module.exports=route