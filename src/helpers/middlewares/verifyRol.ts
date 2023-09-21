import { NextFunction, Request, Response } from "express";

export const validateRol = async (req: Request, res: Response, next: NextFunction) => {
    const roldeusuario = req.body.user_rol;
    if(!roldeusuario){
        return res.status(400).json({
            msg: 'NO EXISTE EL ROL DE USUARIO PROPORCIONADO EN LA PETICION'
         });
    }
    const validar = await getRol(roldeusuario);
    if (validar == 1)
         return res.status(400).json({
             msg: 'ESTE USUARIO NO ES VALIDO PARA MODIFICAR TAREAS'
         });
    if(validar == 4)
         return res.status(400).json({
            msg: 'NO EXISTE EL ROL DE USUARIO PROPORCIONADO EN LA PETICION'
         });
     next();
 };

export const getRol = async (id: number): Promise<number> =>{
    if(id == 1){
        // este usuario es gratuito y no tiene privilegios
        return 1;
    }
    if(id > 3 || id <1){
        return 4;
    }
    return 2;
}