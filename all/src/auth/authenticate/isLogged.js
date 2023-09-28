export default function isLogged(req,res){
    const {session}=req
    const {passport,cookie}=session
    if(passport && cookie){
        res.json({message:'jesteś zalogowany',logged:true})
    }else{
        res.json({message:'nie jesteś zalogowany',logged:false})
    }
}