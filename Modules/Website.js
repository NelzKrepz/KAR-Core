const express = require('express');
const app = express();

app.get('/', (req, res) => {
	res.sendStatus(200)
});

app.get('/api/v1/:api', (req, res) => {
	let { api } = req.params
	// res.send({params: req.params, a: })
});

app.listen();

module.exports = () => {
	return app;
};