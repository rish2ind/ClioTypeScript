"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMessageToQueue = void 0;
var axios_1 = __importDefault(require("axios"));
var username = "guest";
var password = "guest";
var routingKey = "ClioKey"; //Binding key for queue
var exchangeName = "Clio Exchange";
// const vHostName:string = "%2f";  //this is for default host
var vHostName = "Clio";
var baseUrl = "http://localhost:15672/api/exchanges/";
var url = baseUrl + vHostName + "/" + exchangeName + "/publish";
var authCode = username + ":" + password;
var sendMessageToQueue = /** @class */ (function () {
    function sendMessageToQueue() {
    }
    sendMessageToQueue.prototype.send = function (data) {
        var msgBody = "{\"properties\":{\"content-type\":\"application/json\"},\"routing_key\":" + JSON.stringify(routingKey) + ",\"payload\":'" + JSON.stringify(data) + "',\"payload_encoding\":\"string\"}";
        var OPTIONS = {
            body: msgBody,
            headers: {
                Authorization: "Basic " + Buffer.from(authCode).toString('base64'),
                content_Type: "application/JSON"
            },
        };
        axios_1.default.post(url, msgBody, {
            headers: {
                Authorization: "Basic " + Buffer.from(authCode).toString('base64'),
                content_Type: "application/JSON"
            }
        })
            .then(function (response) {
            console.log(response.data);
        })
            .catch(function (Error) {
            console.log('error : ' + Error);
        });
    };
    ;
    return sendMessageToQueue;
}());
exports.sendMessageToQueue = sendMessageToQueue;
