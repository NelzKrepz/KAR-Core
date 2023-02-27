const moment = require('moment');
const fs = require('fs');

"use strict";
class Logger {
	#logFolder = '.logs/';
	#fileName = 'DD-MM-YYYY HH:mm:ss';
	#fileExt = '.log';
	#logFormat = '\\[DD/MM/YYYY - HH:mm:ss \| {cond}\\]:';
	#created = moment();
	#file;

	createFile() {
		this.#file = this.#created.format(this.#fileName) + this.#fileExt;
		if (!fs.existsSync(this.#logFolder)) {
			fs.mkdir(this.#logFolder);
		}
		if (!fs.existsSync(this.#logFolder + this.#file)) {
			fs.writeFileSync(this.#logFolder + this.#file, '##### AUTO GENERATED - CREATED AT '+this.#created.format("DD/MM/YYYY - HH:mm:ss"));
		}
	}
	/*
 Set the file name (momentjs support).
 @params {string} fileName
 */
	setFilename(fileName) {
		this.#fileName = fileName
		return this;
	}
	log(...string) {
		this.createFile();
		fs.writeFileSync(this.#logFolder + this.#file, moment().format(this.#logFormat).replace('{cond}', 'LOG') + string.join(' '))
		console.log(moment().format(this.#logFormat), ...string);
	}
	warn(...string) {
		this.createFile();
		fs.writeFileSync(this.#logFolder + this.#file, moment().format(this.#logFormat).replace('{cond}', 'WARN') + string.join(' '))
		console.warn(moment().format(this.#logFormat), ...string);
	}
	error(...string) {
		this.createFile();
		fs.writeFileSync(this.#logFolder + this.#file, moment().format(this.#logFormat).replace('{cond}', 'ERROR') + string.join(' '))
		console.warn(moment().format(this.#logFormat), ...string);
	}
}

module.exports = Logger;