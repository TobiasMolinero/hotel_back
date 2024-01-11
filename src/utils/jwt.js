import pkg_jwt from "jsonwebtoken";

const {sign, verify} = pkg_jwt;
const JWT_SECRET = process.env.JWT_SECRET || 'token2024';

export const generateToken = (id) => {
    const jwt = sign({id}, JWT_SECRET, {
        expiresIn: '5m',
    });
    return jwt;
};

export const verifyToken = (jwt) => {
    const isOk = verify(jwt, JWT_SECRET);
    return isOk; 
}