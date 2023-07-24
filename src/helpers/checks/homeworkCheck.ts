import { validateRol } from "../middlewares/verifyRol";
import { validateJWT } from "../middlewares/verifyJwt";

export const userRolCheck: any = [
    validateJWT,
    validateRol
];