var http = require('http')
var mymodule = require('./6C(1)')
var server = http.createServer(function (req, res) {
    res.write(mymodule.welcome())
    res.write("\n" + mymodule.goodbye())
    res.end()
})
server.listen(8440, console.log("Node server starts on 8440 port number"))
