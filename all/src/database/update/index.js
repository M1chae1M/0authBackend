import baza from ".."
import _ from 'lodash'

export default async function updateQuery(req,res){
    const {data, where,offset_data}=req.body??{}
    const {limit,page}=offset_data??{}

    const query_req=await baza.update('display_data', data, where)
    const selected=await baza.selected_page('display_data',page,limit)

    const db_query_imitation=_.map([...selected], item=>{
        if(_.isMatch(item, where)){
            return { ...item, ...data };
        }
        return item;
    });

    res.json({query_req, db_query_imitation})
}