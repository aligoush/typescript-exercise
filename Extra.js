"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Extra = void 0;
var Extra = /** @class */ (function () {
    function Extra(asientoCuero, pantalla, asistenteAparcamiento) {
        this._asientoCuero = asientoCuero;
        this._pantalla = pantalla;
        this._asistenteAparcamiento = asistenteAparcamiento;
    }
    Object.defineProperty(Extra.prototype, "asientoCuero", {
        get: function () {
            return this._asientoCuero;
        },
        set: function (asiento) {
            this._asientoCuero = asiento;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Extra.prototype, "pantalla", {
        get: function () {
            return this._pantalla;
        },
        set: function (pantalla) {
            this._pantalla = pantalla;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Extra.prototype, "asistenteAparcamiento", {
        get: function () {
            return this._asientoCuero;
        },
        set: function (parking) {
            this._asistenteAparcamiento = parking;
        },
        enumerable: false,
        configurable: true
    });
    Extra.prototype.mostrar = function () {
        var asientos = this._asientoCuero ? "sí" : "no";
        var aparcamiento = this._asistenteAparcamiento ? "sí" : "no";
        console.log("Asiento de cuero: " + asientos + ", asistente de aparcamiento: " + aparcamiento + ", pantalla: " + this._pantalla + " pulgadas;");
    };
    return Extra;
}());
exports.Extra = Extra;
