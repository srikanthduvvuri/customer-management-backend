const express = require('express');
const router = express.Router();
const Customer = require('../models/Customer');
//const logger = require('common/utils/logger');

// Create a new customer
router.post('/', async (req, res) => {
    const { name, email } = req.body;
    try {
        //logger.info('Creating a new customer');
        const newCustomer = new Customer({ name, email });
        await newCustomer.save();
        res.status(201).json(newCustomer);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Get all customers
router.get('/', async (req, res) => {
    try {
        //logger.info('Getting all customers');
        const customers = await Customer.find();
        return res.json(customers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get customer by ID
router.get('/:id', async (req, res) => {
    try {
        //logger.info('Getting Customer based on ID');
        const customer = await Customer.findById(req.params.id);
        if (!customer) {
            return res.status(404).json({ message: 'Customer not found' });
        }
        res.json(customer);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Update customer
router.put('/:id', async (req, res) => {
    try {
        //logger.info('Updating a customer');
        const updatedCustomer = await Customer.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedCustomer) {
            return res.status(404).json({ message: 'Customer not found' });
        }
        res.json(updatedCustomer);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;
