const express = require('express');
const router = express.Router();
const reservationController = require('../controller/reservationController');

// Example route for getting all reservations
router.get('/reservations', reservationController.getAllReservations);

// Example route for creating a new reservation
router.post('/reservations', reservationController.createReservation);

// Example route for updating a reservation
router.put('/reservations/:id', reservationController.updateReservation);

// Example route for deleting a reservation
router.delete('/reservations/:id', reservationController.deleteReservation);

module.exports = router;
