const express = require('express');
const passport = require('passport');

const UserController = require('../controllers/user');

module.exports = (app) => {
  // User
  app.get('/api/authorize', UserController.authorize);
};
