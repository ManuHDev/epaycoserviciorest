const express = require('express');
const path = require('path');

const app = express();
const bodyParser = require('body-parser');

require('./config/config');

app.use(bodyParser.urlencoded({ extended: false}));

app.use(bodyParser.json());

app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
	res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
	res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
	next();
}); 

app.use( express.static( path.resolve(__dirname, '../public')));

app.use(require('./routes/index'));

app.listen(process.env.PORT, () => {
    console.log(`listen on port: ${process.env.PORT}`);
});