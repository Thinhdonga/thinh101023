var express = require('express');
const fs = require('fs');

var router = express.Router();

const [storedUsername, storedPassword] = fs.readFileSync('user.txt', 'utf8').split(':');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Login Form' });
});

// Route cho '/home'
router.get('/home', (req, res) => {
  res.render('home', { title: 'Trang chủ' });
});

router.post('/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  // Kiểm tra xác thực
  if (username === storedUsername && password === storedPassword) {
    res.redirect('/home');
  } else {
    res.render('index', {
      title: 'Login Form',
      error: 'Sai tên người dùng hoặc mật khẩu'
    });
  }
});

module.exports = router;