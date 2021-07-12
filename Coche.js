"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Coche = void 0;
var Coche = /** @class */ (function () {
    function Coche(marca, modelo, ancho, largo, peso, color, ruedas, extras, carroceria) {
        this._marca = marca;
        this._modelo = modelo;
        this._ancho = ancho;
        this._largo = largo;
        this._peso = peso;
        this._color = color;
        this._ruedas = ruedas; // ??
        this._extras = extras;
        this._carroceria = carroceria;
    }
    Object.defineProperty(Coche.prototype, "marca", {
        get: function () {
            return this._marca;
        },
        set: function (marca) {
            this._marca = marca;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Coche.prototype, "modelo", {
        get: function () {
            return this._modelo;
        },
        set: function (modelo) {
            this._modelo = modelo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Coche.prototype, "ancho", {
        get: function () {
            return this._ancho;
        },
        set: function (ancho) {
            this._ancho = ancho;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Coche.prototype, "largo", {
        get: function () {
            return this._largo;
        },
        set: function (largo) {
            this._largo = largo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Coche.prototype, "peso", {
        get: function () {
            return this._peso;
        },
        set: function (peso) {
            this._peso = peso;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Coche.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (color) {
            this._color = color;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Coche.prototype, "ruedas", {
        get: function () {
            return this._ruedas;
        },
        set: function (ruedas) {
            this._ruedas = ruedas;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Coche.prototype, "extras", {
        get: function () {
            return this._extras;
        },
        set: function (extras) {
            this._extras = extras;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Coche.prototype, "carroceria", {
        get: function () {
            return this._carroceria;
        },
        set: function (carroceria) {
            this._carroceria = carroceria;
        },
        enumerable: false,
        configurable: true
    });
    Coche.prototype.mostrarRuedas = function () {
        var i = 1;
        for (var _i = 0, _a = this.ruedas; _i < _a.length; _i++) {
            var rueda = _a[_i];
            console.log("Rueda " + i + ": ");
            rueda.mostrar();
            i++;
        }
    };
    Coche.prototype.mostrarExtras = function () {
        this.extras.mostrar();
    };
    Coche.prototype.mostrarCarroceria = function () {
        this.carroceria.mostrar();
    };
    Coche.prototype.mostrarDatos = function () {
        console.log("Marca y modelo del coche: " + this.marca + ", " + this.modelo);
        console.log("Ancho: " + this.ancho + " mm");
        console.log("Largo: " + this.largo + " mm");
        console.log("Peso: " + this.peso + " kg");
        console.log("Color: " + this.color);
        this.mostrarRuedas();
        this.mostrarExtras();
        this.mostrarCarroceria();
        console.log("\n");
    };
    return Coche;
}());
exports.Coche = Coche;
