const dotenv = require("dotenv").config()

const token = process.env.token;
if (process.env.spam == "true") {
    var spam = true;
} else {
    var spam = false;
}

var toExport = [token, spam]

module.exports = {}
