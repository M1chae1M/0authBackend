import {checkToken} from "../../token/checkToken"

export default function isLogged(req,res){
    const checked=checkToken(req.body.token)
    if(checked){
        res.json({
            username:checked.login,
            message:'jesteś zalogowany',
            logged:true
        })
    }else{
        res.json({
            username:checked.login??undefined,
            message:'nie jesteś zalogowany',
            logged:false
        })
    }
}