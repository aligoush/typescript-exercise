"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Carroceria = void 0;
var Carroceria = /** @class */ (function () {
    function Carroceria(faldon, espejos, techo) {
        this._faldonDeportivo = faldon;
        this._espejosAbatibles = espejos;
        this._techoSolar = techo;
    }
    Object.defineProperty(Carroceria.prototype, "faldonDeportivo", {
        get: function () {
            return this._faldonDeportivo;
        },
        set: function (faldon) {
            this._faldonDeportivo = faldon;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Carroceria.prototype, "espejosAbatibles", {
        get: function () {
            return this._espejosAbatibles;
        },
        set: function (espejos) {
            this._espejosAbatibles = espejos;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Carroceria.prototype, "techoSolar", {
        get: function () {
            return this._techoSolar;
        },
        set: function (techo) {
            this._techoSolar = techo;
        },
        enumerable: false,
        configurable: true
    });
    Carroceria.prototype.mostrar = function () {
        var faldon = this._faldonDeportivo ? "sí" : "no";
        var espejos = this._espejosAbatibles ? "sí" : "no";
        var techo = this._techoSolar ? "sí" : "no";
        console.log("Carroceria: \n" + "Faldon deportivo: " + faldon + ", espejos abatibles: " + espejos +
            ", techo solar: " + techo + ";");
    };
    return Carroceria;
}());
exports.Carroceria = Carroceria;
