export class Carroceria {
    private _faldonDeportivo: boolean;
    private _espejosAbatibles: boolean;
    private _techoSolar: boolean;

    public constructor(faldon:boolean,
        espejos:boolean, techo: boolean
    ){
        this._faldonDeportivo = faldon;
        this._espejosAbatibles = espejos;
        this._techoSolar = techo;
    }

    public get faldonDeportivo():boolean{
        return this._faldonDeportivo;
    }

    public set faldonDeportivo(faldon:boolean){
        this._faldonDeportivo = faldon;
    }
    
    public get espejosAbatibles():boolean{
        return this._espejosAbatibles;
    }

    public set espejosAbatibles(espejos:boolean){
        this._espejosAbatibles = espejos;
    }
    
    public get techoSolar():boolean{
        return this._techoSolar;
    }

    public set techoSolar(techo:boolean){
        this._techoSolar = techo;
    }

    public mostrar() {
        let faldon = this._faldonDeportivo ? "sí" : "no" ;
        let espejos = this._espejosAbatibles ? "sí" : "no" ;
        let techo = this._techoSolar ? "sí" : "no" ;
        console.log("Carroceria: \n" +"Faldon deportivo: "+ faldon + ", espejos abatibles: " + espejos+
        ", techo solar: "+ techo +";"
        );
    }
}

