const User = require('../models/user.model');

// GET all users
exports.getAllUsers = (req, res) => {
    User.getAll((err, results) => {
        if (err) return res.status(500).json(err);
        res.json(results);
    });
};

// GET user by ID
exports.getUserById = (req, res) => {
    const id = req.params.id;

    User.getById(id, (err, results) => {
        if (err) return res.status(500).json(err);
        res.json(results[0]);
    });
};

// CREATE user
exports.createUser = (req, res) => {
    const data = req.body;

    User.create(data, (err, result) => {
        if (err) return res.status(500).json(err);
        res.json({ message: "User created", id: result.insertId });
    });
};

// UPDATE user
exports.updateUser = (req, res) => {
    const id = req.params.id;
    const data = req.body;

    User.update(id, data, (err) => {
        if (err) return res.status(500).json(err);
        res.json({ message: "User updated" });
    });
};

// DELETE user
exports.deleteUser = (req, res) => {
    const id = req.params.id;

    User.delete(id, (err) => {
        if (err) return res.status(500).json(err);
        res.json({ message: "User deleted" });
    });
};