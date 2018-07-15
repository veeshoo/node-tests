const express = require("express");

var app = express();

app.get('/', (req, res) => {
    res.send("Hello World");
});

app.get('/users', (req, res) => {
    res.send([{name: "Vishal",
        age: 41},
        {name: "Rishi", age: 23}
    ]);
});

app.listen(3000);

module.exports.app = app;