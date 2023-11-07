import baza from "../database"
import {checkToken} from "../token/checkToken"

export default async function userData(req,res){
    const {login,email}=checkToken(req.body.token)

    const results=await baza.select('short',['*'],{email}).catch(err=>console.log(err))
    if(results){
        const result=results[0]
        // delete result.id
        // delete result.password
        // delete result.strategy
        const {login, email, age}=result??''
        res.json({result:{login,email,age}})
    }else{
        res.json({message:`Coś poszło nie tak przy wczytywaniu danych użytkownika o loginie: ${login}. Spróbuj ponownie później.`})
    }
}