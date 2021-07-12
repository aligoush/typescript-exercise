import  {Carroceria} from "./Carroceria";
import {Extra} from "./Extra";
import {Rueda} from "./Rueda";

export class Coche {

    private _marca: string;
    private _modelo: string;
    private _ancho: number;
    private _largo:number;
    private _peso:number;
    private _color: string;
    private _ruedas: Rueda[];
    private _extras: Extra;
    private _carroceria: Carroceria;

    public constructor (
        marca: string, modelo: string, ancho: number,
        largo:number, peso:number, color:string,
        ruedas:Rueda[], extras: Extra, carroceria: Carroceria
    ){
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
        
    public get marca(): string {
		return this._marca;
	}

	public set marca(marca: string) {
        this._marca = marca;
	}

    public get modelo(): string {
		return this._modelo;
	}

	public set modelo(modelo: string) {
        this._modelo = modelo;
	}

    public get ancho(): number {
		return this._ancho;
	}

	public set ancho(ancho: number) {
        this._ancho = ancho;
	}

    public get largo(): number {
		return this._largo;
	}

	public set largo(largo: number) {
        this._largo = largo;
	}

    public get peso(): number {
		return this._peso;
	}

	public set peso(peso: number) {
        this._peso = peso;
	}

    public get color(): string {
		return this._color;
	}

	public set color(color: string) {
        this._color = color;
	}

    public get ruedas(): Rueda[] {
		return this._ruedas;
	}

	public set ruedas(ruedas: Rueda[]) {
        this._ruedas = ruedas;
	}

    public get extras(): Extra {
		return this._extras;
	}

	public set extras(extras: Extra) {
        this._extras = extras;
	}

    public get carroceria(): Carroceria {
		return this._carroceria;
	}

	public set carroceria(carroceria: Carroceria) {
        this._carroceria = carroceria;
	}

    public mostrarRuedas(){
        let i = 1;
        for(let rueda of this.ruedas){
            console.log("Rueda "+ i + ": ");
            rueda.mostrar();
            i++;
        }
    }

    public mostrarExtras(){
        this.extras.mostrar();
    }

    public mostrarCarroceria(){
        this.carroceria.mostrar();
    }

    public mostrarDatos(){
        console.log("Marca y modelo del coche: "+ this.marca + ", "+this.modelo);
        console.log("Ancho: "+ this.ancho +" mm");
        console.log("Largo: "+ this.largo +" mm");
        console.log("Peso: "+ this.peso+" kg");
        console.log("Color: "+this.color);
        this.mostrarRuedas();
        this.mostrarExtras();
        this.mostrarCarroceria();
        console.log("\n");
        
    }
}