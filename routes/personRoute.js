const express = require('express');
const person = require('../controllers/personContr');
const {personValidationRules } = require('../utils/validator')

const router = express.Router();

router.post('/api/person', personValidationRules, person.create);
router.get('/api/person/:id', person.getPerson);
router.put('/api/person/:id', person.update);
router.delete('/api/person/:id', person.delete);

module.exports = router;