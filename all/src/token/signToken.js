import jwt from "jsonwebtoken";

export function signToken(data){
    const {JWT_secret_key}=process.env
    return jwt.sign(data, JWT_secret_key, { expiresIn: '1h' });
}