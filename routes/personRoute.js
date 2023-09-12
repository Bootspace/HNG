const express = require('express');
const person = require('../controllers/personContr');
const {personValidationRules } = require('../utils/validator')

const router = express.Router();

router.post('/api', personValidationRules, person.create);
router.get('/api/:id', person.getPerson);
router.put('/api/:id', person.update);
router.delete('/api/:id', person.delete);

module.exports = router;