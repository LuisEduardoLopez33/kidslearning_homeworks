import { HomeWorkData } from "../domain/HomeWorkRepository";
import { HomeWorkRepositoryr } from "../infraestructure/HomeWorkRepository";

export class CreateHomeWorkUseCase {
    constructor(readonly homeWorkRepository: HomeWorkRepositoryr){}
    async run(homeworkd: HomeWorkData){
        const homework = await this.homeWorkRepository.create(homeworkd);
        if(!homework){
            throw new Error("NO SE CREO LA TAREA")
        }
        return homework;
    }
}