export class HomeWork{
    constructor(
        readonly id: number,
        readonly id_tarea: number,
        readonly id_profile: number,
        readonly status_tarea: string,
        readonly intentos: string,
        readonly stars: string
    ){}
}