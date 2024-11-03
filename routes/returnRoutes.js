const express = require('express');
const router = express.Router();
const returnController = require('../controllers/returnController');

// Route to get all returns
router.get('/', returnController.getReturns);

// Route to update a single return's status
router.put('/:returnId/status', returnController.updateReturnStatus);

// Route to update multiple returns' statuses
router.put('/bulk/update-status', returnController.updateMultipleReturnStatuses);

module.exports = router;