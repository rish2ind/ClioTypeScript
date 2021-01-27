"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Services = void 0;
var axios_1 = __importDefault(require("axios"));
var BankAccount_1 = require("./responses/BankAccount");
var Services = /** @class */ (function () {
    function Services() {
    }
    Services.prototype.getAccounts = function (cb) {
        try {
            axios_1.default.get('https://app.clio.com/api/v4/bank_accounts.json?fields=name,id,account_number,type', {
                headers: {
                    Authorization: "Bearer 7873-VgdAluK0fiVrZgarRkKG0YXnMRsPaRWUjf3"
                }
            })
                .then(function (response) {
                var result = response.data;
                var account = Object.assign(new BankAccount_1.DataList(), result);
                console.log('Processing Account Data');
                cb(account);
            })
                .catch(function (Error) {
                console.log('error : ', Error);
            });
        }
        catch (err) { }
    };
    Services.prototype.getContacts = function (cb) {
        try {
            axios_1.default.get('https://app.clio.com/api/v4/contacts.json?fields=first_name,name,id,addresses{id,street,city,province,postal_code,country},phone_numbers{id,number}', {
                headers: {
                    Authorization: "Bearer 7873-VgdAluK0fiVrZgarRkKG0YXnMRsPaRWUjf3"
                }
            })
                .then(function (response) {
                var result = response.data;
                //     let contact = Object.assign(new )
                cb(result);
            })
                .catch(function (Error) {
                console.log('error : ', Error);
            });
        }
        catch (err) { }
    };
    Services.prototype.getBills = function (cb) {
        try {
            axios_1.default.get('https://app.clio.com/api/v4/bills.json?fields=number,created_at,due_at,client{id},balance,tax_sum,type', {
                headers: {
                    Authorization: "Bearer 7873-VgdAluK0fiVrZgarRkKG0YXnMRsPaRWUjf3"
                }
            })
                .then(function (response) {
                var result = response.data;
                cb(result);
            })
                .catch(function (Error) {
                console.log('Error : ', Error);
            });
        }
        catch (err) { }
    };
    Services.prototype.getActivities = function (cb) {
        try {
            axios_1.default.get('https://app.clio.com/api/v4/activities.json?fields=type,price,note,date', {
                headers: {
                    Authorization: "Bearer 7873-VgdAluK0fiVrZgarRkKG0YXnMRsPaRWUjf3"
                }
            })
                .then(function (response) {
                var result = response.data;
                cb(result);
            })
                .catch(function (Error) {
                console.log('Error : ', Error);
            });
        }
        catch (err) { }
    };
    Services.prototype.getLineItems = function (cb) {
        try {
            axios_1.default.get('https://app.clio.com/api/v4/line_items.json?fields=description,id,price,quantity', {
                headers: {
                    Authorization: "Bearer 7873-VgdAluK0fiVrZgarRkKG0YXnMRsPaRWUjf3"
                }
            })
                .then(function (response) {
                var result = response.data;
                cb(result);
            })
                .catch(function (Error) {
                console.log('Error : ', Error);
            });
        }
        catch (err) { }
    };
    return Services;
}());
exports.Services = Services;
