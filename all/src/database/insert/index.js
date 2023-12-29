import baza from ".."
import insert_imitation from "./imitation"

export default async function insertQuery(req,res){
    const {data,offset_data}=req.body??{}

    const query_req=await baza.insert('display_data', data)
    const db_query_imitation=await insert_imitation(data,offset_data)

    res.json({query_req, db_query_imitation})
}