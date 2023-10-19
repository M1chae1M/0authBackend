import {checkToken} from "../../token/checkToken"

export default function loginAuthMiddleware(req,res,next){
    const checked=checkToken(req.body.token)
    if(checked){
        res.json(`jesteś już zalogowany jako: ${checked.login}`)
    }else{
        next()
    }
}