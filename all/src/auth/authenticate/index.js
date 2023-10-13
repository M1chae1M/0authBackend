import {checkToken} from "../../token/checkToken"

export function authenticate(req,res,next){
    const checked=checkToken(req.body.token??'')
    if(checked){
        next()
    }else{
        res.json({
            username:undefined,
            data:[],
            message:'nie jesteś zalogowany!',
            logged:false
        })
    }
}