const fs = require('fs');
const path = require('path');
const Modules = path.join(__dirname, '/Modules/');
const Logger = require(Modules+'Logger.js');
const Client = require(Modules+'Client.js')();
const Log = new Logger();
require(Modules+'CommandHandler.js')(Client, Log);
const Web = require(Modules+'Website.js');