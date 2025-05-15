const express = require('express');
const router = express.Router();
const empolyeeController = require('../controllers/empolyeeController');

// Routes
router.get('/', empolyeeController.getAllempolyee);
router.post('/submit-empolyee', empolyeeController.submitempolyee);
router.post('/delete-empolyee/:id', empolyeeController.deleteempolyee);
router.get('/search-empolyee', empolyeeController.searchempolyee);

module.exports = router;
