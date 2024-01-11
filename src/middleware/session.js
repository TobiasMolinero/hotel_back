import { verifyToken } from "../utils/jwt.js";

export const checkToken = (req, res, next) => {
    try {
        const jwtByUser = req.header.authorization;
        const jwt = jwtByUser.split(" ").pop();
        const isUser = verifyToken(`${jwt}`);
        req.user = isUser;
        console.log({jwtByUser});
        next();
    } catch (error) {
        console.log(error);
        if(error.name === 'TokenExpiredError'){
            res.status(401).send('La sesión ha expirado.');
        } else if(error.name === 'JsonWebTokenError'){
            res.status(401).send('Token no valido.');
        } else {
            res.status(400).send('La sesión no es valida.')
        }        
    }
};