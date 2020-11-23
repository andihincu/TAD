let Persona = function(){
    this.nom = nomEntrat;
    this.congnom = congnomEntrat;
};

Persona.prototype.saluda=function(){
    console.log('Hola, em dic '+ this.nom+' '+this.congnom);
};
Persona.prototype.setNom = function(nomNou){
    this.nom=nomNou;
}
Persona.prototype.setCognom = function(cognomNou){
    this.congnom= cognomNou;
} 
Persona.prototype.getNom = function (nomNou){
    return this.nom;
}
Persona.prototype.getCognom = function(cognomNou){
return this.congnom;
}

let traballador = new Persona("Andi","Hincu");
let treballador2 = new Persona("Albert", "Hincu")

treballador.saluda();

treballador2.saluda();