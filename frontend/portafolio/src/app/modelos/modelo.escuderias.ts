export class Escuderias {

    constructor (public _id: string, public nombre: string, public jefe_equipo: string,
        public sede: string, public chasis: string, public motor: string,
        public campeonatos: number, public poles: number, public pilotos:[string, string]){

    }

}