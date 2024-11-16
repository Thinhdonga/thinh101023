const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  customerName: {
    type: String,
    required: [true, 'Tên khách hàng là bắt buộc'],
    trim: true
  },
  date: {
    type: Date,
    required: [true, 'Ngày đặt chỗ là bắt buộc']
  },
  time: {
    type: String,
    required: [true, 'Thời gian đặt chỗ là bắt buộc'],
    validate: {
      validator: function(v) {
        return /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/.test(v);
      },
      message: props => `${props.value} không phải là thời gian hợp lệ!`
    }
  },
  status: {
    type: String,
    enum: ['Pending', 'Confirmed', 'Cancelled'],
    default: 'Pending'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Middleware để kiểm tra trùng lịch
bookingSchema.pre('save', async function(next) {
  if (this.isModified('date') || this.isModified('time')) {
    const existingBooking = await this.constructor.findOne({
      date: this.date,
      time: this.time,
      status: { $ne: 'Cancelled' },
      _id: { $ne: this._id }
    });

    if (existingBooking) {
      throw new Error('Thời gian này đã được đặt!');
    }
  }
  next();
});

module.exports = mongoose.model('Booking', bookingSchema);

bookingSchema.pre('save', async function(next) {
    if (this.isModified('date') || this.isModified('time')) {
      const existingBooking = await this.constructor.findOne({
        date: this.date,
        time: this.time,
        status: { $ne: 'Cancelled' },
        _id: { $ne: this._id }
      });
  
      if (existingBooking) {
        throw new Error('Thời gian này đã được đặt!');
      }
    }
    next();
  });
  
  module.exports = mongoose.model('Booking', bookingSchema);