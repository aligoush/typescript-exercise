

type Pantalla = 12 | 13 | 14 ; 

export class Extra {
    
    private _asientoCuero: boolean;
    private _pantalla: Pantalla;
    private _asistenteAparcamiento:boolean;

    public constructor (asientoCuero:boolean,
        pantalla:Pantalla, asistenteAparcamiento:boolean
    ){
        this._asientoCuero = asientoCuero;
        this._pantalla = pantalla;
        this._asistenteAparcamiento = asistenteAparcamiento;
    }

    public get asientoCuero():boolean{
        return this._asientoCuero;
    }

    public set asientoCuero(asiento:boolean){
        this._asientoCuero = asiento;
    }

    public get pantalla():Pantalla{
        return this._pantalla;
    }

    public set pantalla(pantalla:Pantalla){
        this._pantalla = pantalla;
    }

    public get asistenteAparcamiento():boolean{
        return this._asientoCuero;
    }

    public set asistenteAparcamiento(parking:boolean){
        this._asistenteAparcamiento = parking;
    }

    public mostrar() {
        let asientos = this._asientoCuero ? "sí" : "no";
        let aparcamiento = this._asistenteAparcamiento ? "sí" : "no";
        console.log("Asiento de cuero: " + asientos + ", asistente de aparcamiento: "+ aparcamiento + ", pantalla: "+ this._pantalla +" pulgadas;");
    }
}