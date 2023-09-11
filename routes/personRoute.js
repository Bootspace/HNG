const express = require('express');
const person = require('../controllers/personContr');
const {personValidationRules } = require('../utils/validator')

const router = express.Router();

router.post('/api/person', personValidationRules, person.create);
router.get('/api/person', person.getPeople);
router.get('/api/person/:criteria', person.getPerson);
router.patch('/api/person/:id', person.update);
router.delete('/api/person/:id', person.delete);

module.exports = router;