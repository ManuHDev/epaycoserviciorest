const express = require('express');
const axios = require('axios');
const services = require('../services');

require('../config/config');

const app = express();

app.get('/api/transactions', (req, res) => {
    
  axios.get(`http://${process.env.APIHOST}/api/transactions`, services.createToken(req.headers.authorization))
  .then(response => res.json(response.data))
  .catch(e => {
      console.log(e);
  });

});

app.get('/api/transactions/:id', (req, res) => {
    
  axios.get(`http://${process.env.APIHOST}/api/transactions/${req.params.id}`, services.createToken(req.headers.authorization))
  .then(response => res.json(response.data))
  .catch(e => {
      console.log(e);
  });

});

app.post('/api/recharge', (req, res) => {
  axios.post(`http://${process.env.APIHOST}/api/recharge`, {
    document: req.body.document,
    cellphone: req.body.cellphone,
    amount: req.body.amount
  }, 
  services.createToken(req.headers.authorization)
  )
  .then(response => res.json(response.data))
  .catch(e => {
    console.log(e);
  });
});

app.post('/api/payment', (req, res) => {
  axios.post(`http://${process.env.APIHOST}/api/payment`, {
    document: req.body.document,
    cellphone: req.body.cellphone,
    amount: req.body.amount,
  }, 
  services.createToken(req.headers.authorization)
  )
  .then(response => res.json(response.data))
  .catch(e => {
    console.log(e);
  });
});

app.post('/api/confirmPayment', (req, res) => {
  axios.post(`http://${process.env.APIHOST}/api/confirmPayment`, {
    token: req.body.token
  }, 
  services.createToken(req.headers.authorization)
  )
  .then(response => res.json(response.data))
  .catch(e => {
    console.log(e);
  });
});

app.post('/api/balance', (req, res) => {
  axios.post(`http://${process.env.APIHOST}/api/balance`, {
    document: req.body.document,
    cellphone: req.body.cellphone
  },
  services.createToken(req.headers.authorization)
  )
  .then(response => res.json(response.data))
  .catch(e => {
    console.log(e);
  });
});

module.exports = app;


