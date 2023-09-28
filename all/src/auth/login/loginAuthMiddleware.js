export default function loginAuthMiddleware(req,res,next){
    if(req.isAuthenticated()){
        const {username}=req.session
        res.json(`jesteś już zalogowany jako: ${username}`)
    }else{
        next()
    }
}