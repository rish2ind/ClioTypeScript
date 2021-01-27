"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var index_1 = require("./index");
var bodyParser = require('body-parser');
// Create a new express app instance
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
var jsonParser = bodyParser.json();
app.get('/', function (req, res) {
    res.send('Hello World!');
});
app.listen(8080, function () {
    console.log('App is listening on port 8080!');
});
app.post('/accessToken', jsonParser, function (req, res) {
    var ro = new index_1.RequestOrganizer();
    //console.log('req.body  '+req.body);
    //console.log(req);
    var getCircularReplacer = function () {
        var seen = new WeakSet();
        return function (key, value) {
            if (typeof value === "object" && value !== null) {
                if (seen.has(value)) {
                    return;
                }
                seen.add(value);
            }
            return value;
        };
    };
    //console.log(JSON.stringify(req, getCircularReplacer()));
    ro.startProcess();
});
