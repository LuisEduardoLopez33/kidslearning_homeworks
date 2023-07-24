import { HomeWorkUpdateData } from "../domain/HomeWorkRepository";
import { HomeWorkRepositoryr } from "../infraestructure/HomeWorkRepository";

export class ActualizarHomeWorkUseCase {
    constructor(readonly homeworkRepo: HomeWorkRepositoryr){}

    async run(homework: HomeWorkUpdateData){
        const homeworkUpdate = await this.homeworkRepo.updateHomeWork(homework);
        if(!homeworkUpdate){
            throw new Error("NO SE PUDO ACTUALIZAR LOS DATOS");
        }
        return homeworkUpdate;
    }
}