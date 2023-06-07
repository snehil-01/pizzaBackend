const express = require('express');
const { registerUser, loginUser, me } = require('../Controllers/User');
const { verifyTokenAndAuthorization } = require('../Middlewares/verifyToken');
const router = express.Router();


router.post('/register',registerUser);
router.post('/login',loginUser);
router.post('/me/:id',verifyTokenAndAuthorization,me);

module.exports = router;