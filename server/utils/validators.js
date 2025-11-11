const { body } = require('express-validator');

const registerValidation = [
  body('username').isLength({ min: 3 }).withMessage('Username too short'),
  body('email').isEmail().withMessage('Invalid email'),
  body('password').isLength({ min: 6 }).withMessage('Password must be 6+ chars')
];

const postValidation = [
  body('title').notEmpty().withMessage('Title required'),
  body('content').notEmpty().withMessage('Content required')
];

module.exports = { registerValidation, postValidation };
