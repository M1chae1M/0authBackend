import baza from ".."
import _ from 'lodash'
import update_imitation from './imitation'

export default async function updateQuery(req,res){
    const {data, where,offset_data}=req.body??{}

    const query_req=await baza.update('display_data', data, where)
    const db_query_imitation=await update_imitation(data, where,offset_data)

    res.json({query_req, db_query_imitation})
}