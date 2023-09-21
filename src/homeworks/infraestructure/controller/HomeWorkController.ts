import { Request, Response } from "express";
import { CreateHomeWorkUseCase } from "../../application/CreateHomeWorkUseCase";
import { ObtenerHomeWorkUseCase } from "../../application/ObtenerHomeWorksUseCase";
import { HomeWorkData, HomeWorkUpdateData } from "../../domain/HomeWorkRepository";
import { ActualizarHomeWorkUseCase } from "../../application/ActualizarHomeWork";
import { DeleteHomeWorkUseCase } from "../../application/DeleteHomeWork";
export class HomeWorkController {
    constructor(
        readonly createHomeWorkUseCase: CreateHomeWorkUseCase,
        readonly obtenerHomeWorkUseCase: ObtenerHomeWorkUseCase,
        readonly actualizarHomeWorkUseCase: ActualizarHomeWorkUseCase,
        readonly deleteHomeWorkUseCase: DeleteHomeWorkUseCase
        ){}
    async createHomework(req: Request, res: Response){
        const data: HomeWorkData ={
            id_tarea: req.body.id_tarea,
            id_profile: req.body.id_profile,
            status_tarea: req.body.status_tarea,
            intentos: req.body.intentos,
            stars: req.body.stars
        } 
        try{
            const homeWork = await this.createHomeWorkUseCase.run(data);
            if(homeWork == 1){
                res.status(200).send({
                    status: "success",
                    data: "se guardo los datos"
                    
                });
            }else{
                res.status(200).send('NO SE CREO LA TAREA')
            }
        }catch(error){
            res.status(500).send({
                status: "error",
                data: "Ocurrio un error",
                msn: error,
              });
        }
    }

    async getListHomeWorks(req: Request, res: Response){
        const idProfile = req.body.id_profile;
        try{
            const homeWorks = await this.obtenerHomeWorkUseCase.run(idProfile);
            if(homeWorks){
                if(homeWorks == 2){
                    res.status(404).send({
                        status: "error",
                        data: "EL PERFIL NO TIENE TAREAS",
                        
                      });
                }else{
                    res.status(200).send(homeWorks);
                }
                
            }else{
                res.status(404).send({
                    status: "error",
                    data: "NO SE ENCONTRARON TAREAS",
                    
                  });
            }
        }catch(error){
            res.status(404).send({
                status: "error",
                data: "Ocurrio un error",
                msn: error,
              });

        }
    }

    async updateHomeWok(req: Request, res: Response){
        try{
            const data: HomeWorkUpdateData = req.body;
            const update = await this.actualizarHomeWorkUseCase.run(data);
            if(update == 1){
                res.status(200).send("DATOS ACTUALIZADOS");
            }
            if(update == 2){
                res.status(200).send("NO SE PUDO ACTUALIZAR LOS DATOS DEL LA TAREA PORQUE NO EXISTE");
            }
        }catch(error){
            res.status(404).send({
                status: "error",
                data: "Ocurrio un error",
                msn: error,
            });

        }
    }

    async deleteHomeWork(req: Request, res: Response){
        try{
            const idh = req.body.id_tarea;
            const deleteHomework =  await this.deleteHomeWorkUseCase.run(idh);
            if(deleteHomework == 1){
                res.status(200).send("DATO ELIMINADO");
            }
            if(deleteHomework == 2){
                res.status(400).send("NO SE PUDO ELIMINAR O NO EXISTE LA TAREA");
            }
        }catch(error){
            res.status(404).send({
                status: "error",
                data: "Ocurrio un error",
                msn: error,
            });
        }
    }
}