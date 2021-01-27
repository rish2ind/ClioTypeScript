"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataList = exports.DataEntity = exports.Paging = exports.Meta = exports.Weather = void 0;
var Weather = /** @class */ (function () {
    function Weather() {
    }
    return Weather;
}());
exports.Weather = Weather;
var Meta = /** @class */ (function () {
    function Meta(response) {
        this.paging = response.data.meta.paging;
        this.records = response.data.meta.records;
    }
    return Meta;
}());
exports.Meta = Meta;
var Paging = /** @class */ (function () {
    function Paging() {
    }
    return Paging;
}());
exports.Paging = Paging;
var DataEntity = /** @class */ (function () {
    function DataEntity(response) {
        this.name = response.data.data.name;
        this.id = response.data.data.id;
        this.account_number = response.data.data.account_number;
        this.type = response.data.data.type;
    }
    return DataEntity;
}());
exports.DataEntity = DataEntity;
var DataList = /** @class */ (function () {
    function DataList() {
    }
    return DataList;
}());
exports.DataList = DataList;
