const db = require('./db.config');

const User = {
    // GET all
    getAll: (callback) => {
        db.query('SELECT * FROM users', callback);
    },

    // GET by ID
    getById: (id, callback) => {
        db.query('SELECT * FROM users WHERE id = ?', [id], callback);
    },

    // INSERT
    create: (data, callback) => {
        db.query('INSERT INTO users SET ?', data, callback);
    },

    // UPDATE
    update: (id, data, callback) => {
        db.query('UPDATE users SET ? WHERE id = ?', [data, id], callback);
    },

    // DELETE
    delete: (id, callback) => {
        db.query('DELETE FROM users WHERE id = ?', [id], callback);
    },
};

module.exports = User;