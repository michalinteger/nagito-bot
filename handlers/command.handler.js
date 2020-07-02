const fs = require("fs");
var commandList = fs.readdirSync("commands");

for ( var commandNr = 0; commandNr < commandList.length; commandNr++ ) {
    var command = commandList[commandNr];
    if ( command.includes(".command.js") ) {
        console.log("var " + command.split(".")[0] + " = require(\"./command/" + command + "\")" + ";");
        eval("var " + command.split(".")[0] + " = require(\"./command/" + command + "\")" + ";");
    }
}

var a = info("aa");
