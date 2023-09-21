import { HomeWorkRepositoryr } from "../infraestructure/HomeWorkRepository";

export class DeleteHomeWorkUseCase{
    constructor(readonly homeRepo: HomeWorkRepositoryr){}
    
    async run(idh: number){
        const deleteH = await this.homeRepo.deltehomwork(idh);
        if(!this.homeRepo){
            throw new Error("ERROR DEL SERVIDOR");
        }
        return deleteH;
    }
}