const fs = require("fs");

module.exports.listCommands = function () {
    return fs.readdirSync("commands");
}

module.exports.loadCommands = function () {
    var loader = [];
    for ( var commandNr = 0; commandNr < commandList.length; commandNr++ ) {
        var command = commandList[commandNr];
        if ( command.includes(".command.js") ) {
            loader = loader + "var " + "commands" + command.split(".")[0] + " = require(\"../command/" + command + "\")" + ";";
        }
    }
    return loader;
}
