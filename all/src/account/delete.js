import baza from "../database"
import {checkToken} from "../token/checkToken"

export default async function deleteUser(req,res){
    const {login}=checkToken(req.body.token)

    const result=await baza.delete('short',{login:login}).catch(err=>console.log(err))
    if(result){
        res.json({message:`Udało Ci się poprawnie usunąć swojego użytkownika o loginie: ${login}.`})
    }else{
        res.json({message:`Coś poszło nie tak przy usuwaniu użytkownika o loginie: ${login}. Spróbuj ponownie później.`})
    }
}