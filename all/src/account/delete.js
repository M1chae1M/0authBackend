import {baza} from "../database"

export default async function deleteUser(req,res){
    const {username}=req.session
    const result=await baza.delete('short',{login:username}).catch(err=>console.log(err))
    if(result){
        req.session.cookie={}
        delete req.session.passport
        delete req.session.username
        res.json({message:`Udało Ci się poprawnie usunąć swojego użytkownika o loginie: ${username}.`})
    }else{
        res.json({message:`Coś poszło nie tak przy usuwaniu użytkownika o loginie: ${username}. Spróbuj ponownie później.`})
    }
}