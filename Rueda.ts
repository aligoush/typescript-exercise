type Tipo = "lluvia"| "seco";
export class Rueda{
    private _marca:string;
    private _tipo:Tipo;
    public constructor (
        marca:string, tipo:Tipo
    ){
        this._marca = marca;
        this._tipo = tipo;
    }

    public get marca():string{
        return this._marca;
    }

    public set marca(marca:string){
        this._marca = marca;
    }

    public get tipo():Tipo{
        return this._tipo;
    }

    public set tipo(tipo:Tipo){
        this._tipo = tipo;
    }

    public mostrar(){
        console.log("Marca: "+ this._marca + ", tipo: "+this._tipo+";");
    }


}