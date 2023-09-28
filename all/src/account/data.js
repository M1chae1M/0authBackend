import {baza} from "../database";

export default async function userData(req,res){
    const {username}=req.session
    const results=await baza.select('short',[],{login:username}).catch(err=>console.log(err))
    if(results){
        const result=results[0]
        delete result.id
        delete result.password
        delete result.strategy
        res.json({result:result})
    }else{
        res.json({message:`Coś poszło nie tak przy wczytywaniu danych użytkownika o loginie: ${username}. Spróbuj ponownie później.`})
    }
}