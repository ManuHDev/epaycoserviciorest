const express = require('express');
const axios = require('axios');
const services = require('../services');

require('../config/config');

const app = express();

app.post('/api/auth/signup', (req, res) => {
  axios.post(`http://${process.env.APIHOST}/api/auth/signup`, {
      name: req.body.name,
      email: req.body.email,
      document: req.body.document,
      cellphone: req.body.cellphone,
      password: req.body.password,
  })
  .then(response => res.json(response.data))
  .catch(e => {
      console.log(e);
  });
});

app.post('/api/auth/login', (req, res) => {
    axios.post(`http://${process.env.APIHOST}/api/auth/login`, {
        email: req.body.email,
        password: req.body.password
    })
    .then(response => res.json(response.data))
    .catch(e => {
        console.log(e);
    });
});

app.get('/api/auth/logout', (req, res) => {
  axios.get(`http://${process.env.APIHOST}/api/auth/logout`,
  services.createToken(req.headers.authorization)
  )
  .then(response => res.json(response.data))
  .catch(e => {
    console.log(e);
  });
});

app.get('/api/auth/user', (req, res) => {
  axios.get(`http://${process.env.APIHOST}/api/auth/user`, 
    services.createToken(req.headers.authorization)
  )
  .then(response => res.json(response.data))
  .catch(e => {
      console.log(e.status);
  }); 

});

module.exports = app;