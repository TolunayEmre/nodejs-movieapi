const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken')

router.post('/AddUser', (req, res, next) => {
  const { username, password } = req.body;

  const user = new User({
    username,
    password
  });

  const promise = user.save()

  promise.then((data) => {
    res.json(data);
  }).catch((err) => {
    res.json(err)
  });
});

router.post('/AddUserBcrypt', (req, res, next) => {
  const { username, password } = req.body;

  bcryptjs.hash(password, 10).then((hash) => {
    const user = new User({
      username,
      password: hash
    });

    const promise = user.save()

    promise.then((data) => {
      res.json(data);
    }).catch((err) => {
      res.json(err)
    });
  })
});

router.post('/Authentication', (req, res, next) => {
  const { username, password } = req.body;

  User.findOne({
    username
  }, (err, user) => {
    if (err) {
      throw err;
    }

    if (!user) {
      res.json({
        status: false,
        message: 'User not found!'
      });
    } else {
      bcryptjs.compare(password, user.password).then((result) => {
        if (!result) {
          res.json({
            status: false,
            message: 'Wrong Password!'
          })
        } else {
          const payload = {
            username
          };
          const token = jwt.sign(payload, req.app.get('api_secret_key'), {
            expiresIn: 720
          });

          res.json({
            status: true,
            token
          })
        }
      })
    }
  })
})
module.exports = router;
