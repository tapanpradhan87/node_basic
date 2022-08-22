const express = require('express');
const app = express();
const userController = require('./controllers/user.controller');

app.use('/user', userController);

app.listen(3000);