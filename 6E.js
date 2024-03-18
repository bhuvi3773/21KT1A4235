var fs = require('fs')
fs.writeFile('mean.txt', 'Mongo\nExpress\nAngular\nNode', function (error) {
    if (error) {
        return console.log(error)
    }
})
fs.readFile('mean.txt', function (error, data) {
    if (error) {
        return console.log(error)
    }
    console.log(data.toString())
})