const express = require('express');
const router = express.Router();

//Login Page
router.get('/login', (req, res) => res.render('login'));

//Register Page
router.get('/register', (req, res) => res.render('register'));

//Register Handle
router.post('/register', (req, res) => {

    const { name, email, password, password2 } = req.body;
    let error = [];
    //check required fields
    if (!name || !email || !password || !password2) {
        error.push({ msg: 'Please fill in all fields' });
    }

    //check Password match
    if (password !== password2) {
        error.push({ msg: 'passwords do not match' });
    }

    if (password.length < 6) {
        error.push({ msg: 'password should be at least 6 charatcters' });
    }

    if (error.length > 0) {
        res.render('register', {
            error,
            name,
            email,
            password,
            password2
        });
    }
    else {
        res.send('dashboard');
    }
});


module.exports = router;