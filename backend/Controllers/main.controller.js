const User = require('../Daos/main.dao');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const SECRET_KEY = 'secretkey123456';

exports.createUser = (req, res, next) => {
  const newUser = {
    id: req.body.id,
    rol: req.body.rol,
    password: bcrypt.hashSync(req.body.password)
  }

  User.create(newUser, (err, user) => {
    if (err && err.code === 11000)
      return
    /* res.status(409).send('ID already exists'); */
    /*  res.send('ID already exists'); */
    res.send({
      message: 'ID already exists'
    });
    if (err)
      return res.status(500).send('Server error');

    const expiresIn = 24 * 60 * 60;
    const accessToken = jwt.sign({
        id: user.id
      },
      SECRET_KEY, {
        expiresIn: expiresIn
      });
    const dataUser = {
      id: user.id,
      rol: user.rol,
      accessToken: accessToken,
      expiresIn: expiresIn
    }
    // response 
    res.send({
      dataUser
    });
  });
}

exports.loginUser = (req, res, next) => {
  const userData = {
    id: req.body.id,
    rol: req.body.rol,
    password: req.body.password
  }
  User.findOne({
    id: userData.id
  }, (err, user) => {

    if (err)
      return res.status(500).send('Server error!');

    if (!user) {
      // id does not exist
      /* res.status(409).send({
        message: 'Something is wrong'
      }); */

      // response 
      res.send({
        message: 'Something is wrong'
      });
    } else {
      const resultPassword = bcrypt.compareSync(userData.password, user.password);
      if (resultPassword) {
        const expiresIn = 24 * 60 * 60;
        const accessToken = jwt.sign({
          id: user.id
        }, SECRET_KEY, {
          expiresIn: expiresIn
        });

        const dataUser = {
          id: user.id,
          rol: user.rol,
          accessToken: accessToken,
          expiresIn: expiresIn
        }
        res.send({
          dataUser
        });
      } else {
        /* res.status(409).send({
          message: 'Something is wrong'
        }); */
        res.send({
          message: 'Something is wrong'
        });
      }
    }
  });
}