const express = require('express');
const app = express();
const API = require('./API.js')();

app.get('/', (req, res) => {
	res.sendStatus(200)
});

app.get('/api/v1/:api', (req, res) => {
	let { api } = req.params
	let query = req.query
	if (api=="generateAuth") {
		API.generateAuth()
		res.send(API.authData)
	} else if (api=="auth") {
		res.send(API.authData)
	}
	res.send(400)
});

app.listen();

module.exports = () => {
	return app;
};