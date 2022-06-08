export class Escuderia {

    constructor(public nombre: String, public jefe_equipo: String,
        public sede: String, public chasis: String, public motor: String,
        public campeonatos: number, public poles: number, public pilotosA:[String, String], public pilotos:{
            pilotoUno:{
                nacimiento: Date,
                pais: String,
                campeonatos: number,
                podios: number,
                poles: number,
                equipo: String,
                numero_coche: number
            },
            pilotoDos:{
                nacimiento: Date,
                pais: String,
                campeonatos: number,
                podios: number,
                poles: number,
                equipo: String,
                numero_coche: number
            }
        }){

    }
}