"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rueda = void 0;
var Rueda = /** @class */ (function () {
    function Rueda(marca, tipo) {
        this._marca = marca;
        this._tipo = tipo;
    }
    Object.defineProperty(Rueda.prototype, "marca", {
        get: function () {
            return this._marca;
        },
        set: function (marca) {
            this._marca = marca;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rueda.prototype, "tipo", {
        get: function () {
            return this._tipo;
        },
        set: function (tipo) {
            this._tipo = tipo;
        },
        enumerable: false,
        configurable: true
    });
    Rueda.prototype.mostrar = function () {
        console.log("Marca: " + this._marca + ", tipo: " + this._tipo + ";");
    };
    return Rueda;
}());
exports.Rueda = Rueda;
