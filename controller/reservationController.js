const Reservation = require('../models/Reservation');

// Lấy danh sách các đặt chỗ
exports.getAllReservations = async (req, res) => {
    try {
        const reservations = await Reservation.find();
        res.status(200).json(reservations);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Đặt chỗ mới
exports.createReservation = async (req, res) => {
    try {
        const newReservation = new Reservation(req.body);
        await newReservation.save();
        res.status(201).json({ message: 'Reservation created successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
