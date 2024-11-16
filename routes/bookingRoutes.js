const express = require('express');
const router = express.Router();
const Booking = require('../models/booking');

// Lấy danh sách đặt chỗ
router.get('/', async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ date: 1, time: 1 });
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Tạo đặt chỗ mới
router.post('/', async (req, res) => {
  try {
    const booking = new Booking(req.body);
    await booking.save();
    res.status(201).json(booking);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Cập nhật đặt chỗ
router.put('/:id', async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);
    if (!booking) {
      return res.status(404).json({ message: 'Không tìm thấy lịch đặt chỗ' });
    }

    // Kiểm tra trùng lịch
    if (req.body.date && req.body.time) {
      const existingBooking = await Booking.findOne({
        date: req.body.date,
        time: req.body.time,
        status: { $ne: 'Cancelled' },
        _id: { $ne: req.params.id }
      });

      if (existingBooking) {
        return res.status(400).json({ message: 'Thời gian này đã được đặt!' });
      }
    }

    Object.assign(booking, req.body);
    await booking.save();
    res.json(booking);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Hủy đặt chỗ
router.patch('/:id/cancel', async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);
    if (!booking) {
      return res.status(404).json({ message: 'Không tìm thấy lịch đặt chỗ' });
    }

    booking.status = 'Cancelled';
    await booking.save();
    res.json(booking);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
