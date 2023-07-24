import { HomeWorkRepositoryr } from "../infraestructure/HomeWorkRepository";

export class ObtenerHomeWorkUseCase {
    constructor(readonly homeworkRepository: HomeWorkRepositoryr){}

    async run(idprofile: number){
        const homeworks = await this.homeworkRepository.getHomeworks(idprofile);
        if(!homeworks){
            throw new Error("NO SE OBTUVIERON LAS TAREAS ")
        }
        return homeworks;
    }
}