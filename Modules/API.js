let authData = []
let rawAuthData = {
	code: null,
	expired: null
}

function randomizeNumber(length) {
	let char = "1234567890".split("")
	let str = ""
	for (i=0;i<length;i++) {
		str+=char[Math.floor(Math.random() * char.length)]
	}
	return str;
}

function generateAuth() {
	let data = rawAuthData
	data.code = randomizeNumber(6)
	data.expired = 0
	authData.push(data);
	return data;
}

module.exports = () => {
	return {generateAuth,authData}
};