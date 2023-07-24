import jwt  from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";

export const validateJWT = async( req: Request, res: Response, next: NextFunction ) => {
    const authorization = req.header('Authorization');
    const token = authorization ? authorization.split(' ')[1] : false;
    if(!token){
        return res.status(401).json({
            msg:'No hay token en la petición'
        });
    }

    try{
        const user = await verifyJWT(token);
        if(user == 2){
            return res.status(401).json({
                msg:'Token no valido - usuario no existente en DB'
            });
        }
        
        next();
    }catch(err){
        res.status(401).json({
            msg: 'Token no valido'
        });
    }
}

export const verifyJWT = async(token: string): Promise<number> => {
    const llave = process.env.SECRETKEY || "ELMokYpNWVhKDQNEyKiXs7Hbl0U"
    try {
        const jwtV = jwt.verify(token, llave);
        if(jwtV){
            return 1;
        }
        return 2;
    } catch (error) {
        return 2;
    }
}