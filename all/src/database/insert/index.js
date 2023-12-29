import baza from ".."
import insert_imitation from "./imitation"

export default async function insertQuery(req,res){
    const {data,offset_data}=req.body??{}
    
    const db_query_imitation=await insert_imitation(data,offset_data)
    const query_req=await baza.insert('display_data', data)

    res.json({query_req, db_query_imitation})
}