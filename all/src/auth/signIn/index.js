import baza from "../../database"
import bcrypt from 'bcryptjs'

const strategy='local'

export default async function signIn(req,res){
    const {username, password, email, age}=req.body
    const login=username
    const result=await baza.select('short', ['id','login','email'],{login})

    if(result.length>0){
        res.json({success:false,message:'Taki user już istnieje!'})
    }else{
        bcrypt.hash(password, 10, async (err, password)=>{
            if(err) res.json({success:false,message:'Błąd podczas szyfrowania hasła.'})
            
            const data={ id:null, login, password, email, age, strategy }
            const result=await baza.insert('short', data)

            if(result) res.json({success:true,message:'Utworzyłeś właśnie nowego usera!'})
            else res.json({success:false,message:'Nie udało Ci się dodać nowego usera, spróbuj ponownie.'})
        })
    }
}