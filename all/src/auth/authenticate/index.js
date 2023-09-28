export default function authenticate(req,res,next){
    if(req.isAuthenticated()){
        next()
    }else{
        res.json({data:[], message:'nie jesteś zalogowany!', logged:false})
    }
}