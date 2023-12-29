import baza from ".."
import _ from 'lodash'

export default async function deleteQuery(req,res){
    const {where,offset_data}=req.body
    const {limit,page}=offset_data??{}

    const query_req=await baza.delete('display_data', where)
    const selected=await baza.selected_page('display_data',page,limit)

    const db_query_imitation=_.filter([...selected], item=>!_.isMatch(item, where))

    res.json({query_req,db_query_imitation})
    // res.json({query_req,db_query_imitation:{}})
}