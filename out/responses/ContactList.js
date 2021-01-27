"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhoneNumbersEntity = exports.AddressesEntity = exports.DataEntity = void 0;
var DataEntity = /** @class */ (function () {
    function DataEntity(response) {
        this.first_name = response.first_name;
        this.name = response.name;
        this.id = response.id;
    }
    return DataEntity;
}());
exports.DataEntity = DataEntity;
var AddressesEntity = /** @class */ (function () {
    function AddressesEntity(response) {
        this.id = response.id;
        this.street = response.street;
        this.city = response.city;
        this.province = response.province;
        this.postal_code = response.postal_code;
        this.country = response.country;
    }
    return AddressesEntity;
}());
exports.AddressesEntity = AddressesEntity;
var PhoneNumbersEntity = /** @class */ (function () {
    function PhoneNumbersEntity(response) {
        this.id = response.data.data.id;
        this.number = response.number;
    }
    return PhoneNumbersEntity;
}());
exports.PhoneNumbersEntity = PhoneNumbersEntity;
