import jwt from "jsonwebtoken";

export function checkToken(token){
    const {JWT_secret_key}=process.env
    try{
        return jwt.verify(token||'', JWT_secret_key);
    }catch(error){
        return undefined
    }
}