import passport from "passport"

export const template_callback=(req, res, next)=>{
    const {type}=req.params    
    passport.authenticate(type, {
        successRedirect:`/auth/${type}/success`,
        failureRedirect:`/auth/${type}/failure`
    })(req,res,next)
}

export const template_auth=(req, res, next)=>{
    const {type}=req.params
    passport.authenticate(type)(req, res, next)
}