"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var Server = /** @class */ (function () {
    function Server(puerto) {
        this.port = puerto;
        this.app = express();
    }
    Server.init = function (puerto) {
        return new Server(puerto);
    };
    Server.prototype.start = function (callback) {
        this.app.listen(this.port, function () {
            console.log("Servidor corriendo en el puerto 3000");
        });
    };
    return Server;
}());
exports.default = Server;
