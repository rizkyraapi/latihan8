const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

router.get('/', userController.getAllUsers);        //get all
router.get('/:id', userController.getUserById);     //get by id
router.post('/', userController.createUser);        //New data
router.put('/:id', userController.updateUser);      //update by id  
router.delete('/:id', userController.deleteUser);   //delete


module.exports = router;