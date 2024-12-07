const mongoose = require ("mongoose");

const connectDB = async () => {
    try {
        const conn = mongoose.connect('mongodb://localhost:27017')
        console.log("Connect mongo success");
        
    } catch (error) {
        console.log("fault connectDB")
    }
}
module.exports = connectDB
