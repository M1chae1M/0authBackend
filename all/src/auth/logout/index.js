export default function logout(req,res){
    req.session.cookie={}
    delete req.session.passport
    delete req.session.username
    res.json({message:'wylogowałeś się',success:true, logged:false})
}