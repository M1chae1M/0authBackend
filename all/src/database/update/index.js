import baza from ".."

export default async function updateQuery(req,res){
    const {data, where}=req.body
    const query_req=await baza.update('display_data', data, where)




    res.json({query_req, db_query_imitation:{}})
}