const dotenv = require("dotenv").config()

var token = process.env.token;

if (process.env.spam == "true") {
    var spam = true;
} else {
    var spam = false;
}

module.exports = {
    token: token,
    spam: spam
}
