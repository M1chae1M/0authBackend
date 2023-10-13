import {baza} from "../database"
import {checkToken} from "../token/checkToken"

export async function userData(req,res){
    const {login}=checkToken(req.body.token)

    const results=await baza.select('short',[],{login:login}).catch(err=>console.log(err))
    if(results){
        const result=results[0]
        delete result.id
        delete result.password
        delete result.strategy
        res.json({result:result})
    }else{
        res.json({message:`Coś poszło nie tak przy wczytywaniu danych użytkownika o loginie: ${login}. Spróbuj ponownie później.`})
    }
}