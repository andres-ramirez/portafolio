export class Escuderia {

    constructor(public nombre: String, public jefe_equipo: String,
        public sede: String, public chasis: String, public motor: String,
        public campeonatos: Number, public pilotos:{
            piloto1:{
                edad: Number,
                pais: String,
                campeonatos: Number,
                equipo: String,
                numero_coche: Number
            },
            piloto2:{
                edad: Number,
                pais: String,
                campeonatos: Number,
                equipo: String,
                numero_coche: Number
            }
        }){

    }
}