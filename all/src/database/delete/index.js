import baza from ".."
import _ from 'lodash'
import delete_imitation from "./imitation"

export default async function deleteQuery(req,res){
    const {where,offset_data}=req.body

    const query_req=await baza.delete('display_data', where)
    const db_query_imitation=await delete_imitation(where,offset_data)

    res.json({query_req,db_query_imitation})
}