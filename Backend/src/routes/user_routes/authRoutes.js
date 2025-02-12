const express = require('express');
const { register, login, profile } = require('../../controllers/user_controller/authcontroller');

const router = express.Router();

//regitser and login routes
router.post('/register', register);  
router.post('/login', login);    


router.get('/profile', profile);     

module.exports = router; 
