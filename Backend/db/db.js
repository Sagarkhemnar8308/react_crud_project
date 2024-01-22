const mongoose = require('mongoose');
let connection = mongoose.connect("mongodb://127.0.0.1:27017/Users").then((e) => {
    console.log("Connected ....................");
}).catch((e) => {
    console.log("get error to Connected ....................");
});

module.exports = connection;