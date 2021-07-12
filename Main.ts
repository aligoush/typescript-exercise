import {Coche} from "./Coche";
import {Extra} from "./Extra";
import {Carroceria} from "./Carroceria";
import {Rueda} from "./Rueda";

let c1:Carroceria = new Carroceria(true,true,false);
let c2:Carroceria = new Carroceria(true,false,true);
let c3:Carroceria = new Carroceria(false,true,true);
let c4:Carroceria = new Carroceria(false,false,false);
let c5:Carroceria = new Carroceria(true,true,true);

let e1:Extra = new Extra(true,14,true);
let e2:Extra = new Extra(false,13,true);
let e3:Extra = new Extra(false,14,true);

let r1:Rueda = new Rueda("Aurora","lluvia");
let r2:Rueda = new Rueda("Michelin","seco");
let r3:Rueda = new Rueda("Aplus","lluvia");
let r4:Rueda = new Rueda("Centara","seco");

let car1:Coche = new Coche("Seat","Ibiza",1780,4059,1163,"rojo",
    [r1,r1,r1,r1],e2,c4);

let car2:Coche = new Coche("Land Rover","Range Rover Velar",1930,4804,1874,"gris",
    [r2,r2,r2,r2],e1,c3);

let car3:Coche = new Coche("Land Rover","Range Rover",1983,5000,2328,"blanco",
    [r2,r2,r2,r2],e1,c5);

let car4:Coche = new Coche("Audi","Audi e-tron GT",1964,4989,2420,
    "plateado",[r3,r3,r3,r3],e1,c5);

console.log("Coche 1:");
car1.mostrarDatos();
console.log("Coche 2:");
car2.mostrarDatos();
console.log("Coche 3:");
car3.mostrarDatos();