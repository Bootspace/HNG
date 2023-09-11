const { body } = require('express-validator');

exports.personValidationRules =
  [
    body('email')
      .isEmail()
      .notEmpty()
      .withMessage('Email must be valid'),
    body('firstname')
      .isString()
      .notEmpty()
      .withMessage('Email must be a string and must not be empty'),
    body('lastname')
      .isString()
      .notEmpty()
      .withMessage('Email must be a string and must not be empty')
  ];

