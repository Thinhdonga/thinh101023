const express = require('express');
const router = express.Router();
const serviceController = require('../controller/serviceController');

// Example route for listing all services
router.get('/services', serviceController.getAllServices);

// Example route for adding a new service
router.post('/services', serviceController.createService);

// Example route for updating a service
router.put('/services/:id', serviceController.updateService);

// Example route for deleting a service
router.delete('/services/:id', serviceController.deleteService);

module.exports = router;