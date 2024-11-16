const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://thinh101023:NVT33%4018@thinh100123.iiw9j.mongodb.net/?retryWrites=true&w=majority&appName=thinh100123');
    console.log('Đã kết nối với MongoDB');
  } catch (error) {
    console.error('Lỗi kết nối MongoDB:', error);
    process.exit(1);
  }
};
module.exports = connectDB;