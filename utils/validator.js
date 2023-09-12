const { body } = require('express-validator');

exports.personValidationRules =
  [
    body('name')
      .isString()
      .notEmpty()
      .withMessage('Email must be a string and must not be empty')
  ];

