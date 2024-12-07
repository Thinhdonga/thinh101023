const Service = require('../models/Service');

// Lấy danh sách dịch vụ
exports.getAllServices = async (req, res) => {
    try {
        const services = await Service.find();
        res.status(200).json(services);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Thêm dịch vụ mới
exports.addService = async (req, res) => {
    try {
        const newService = new Service(req.body);
        await newService.save();
        res.status(201).json({ message: 'Service added successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
