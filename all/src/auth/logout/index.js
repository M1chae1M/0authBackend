export function logout(req,res){
    res.json({message:'wylogowałeś się',success:true, logged:false})
}