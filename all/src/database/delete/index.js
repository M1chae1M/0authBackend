import baza from ".."

export default async function deleteQuery(req,res){
    const {where}=req.body
    const query_req=await baza.delete('display_data', where)
    // res.json()
    res.json({query_req, db_query_imitation:{}})
}