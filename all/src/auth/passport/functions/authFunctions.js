import passport from "passport"
import {signToken} from "../../../token/signToken";

const {frontend_adres}=process.env

export const template_callback=(req, res, next)=>{
    const {type}=req.params
    passport.authenticate(type, (err, user, info)=>{
        if(err){
          return next(err);
        }
    
        if(!user){
            res.redirect(`${frontend_adres}/login/login_failure?success=false&token=${null}&message="Nieprawidłowe dane uwierzytelniające z ${type}"`);
        }
    
        req.logIn(user, (err)=>{
            if(err){
                return next(err);
            }
    
            const token=signToken(user);
            res.redirect(`${frontend_adres}/login/login_success?success=true&token=${token}&message="Zalogowano pomyślnie przez ${type}"`);
        });
    })(req, res, next);
}

export const template_auth=(req, res, next)=>{
    const {type}=req.params
    passport.authenticate(type)(req, res, next)
}