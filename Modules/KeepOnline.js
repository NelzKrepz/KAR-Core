const fetch = require('node-fetch');

setInterval(() => {
	fetch('https://KAR-Core.hasannelz.repl.co', {
		method: 'GET',
		body: null
	});
}, 15000);