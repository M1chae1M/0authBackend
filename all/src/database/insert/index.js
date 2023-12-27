import baza from ".."

export default async function insertQuery(req,res){
    const {data,offset_data}=req.body
    const {limit,page}=offset_data??{}
    const query_req=await baza.insert('display_data', data)
    const selected=await baza.selected_page('display_data',page,limit)

    const db_query_imitation=[...selected];
    const newRecord=Object.fromEntries(Object.keys(selected?.[0] ?? {}).map(x=>[x, '']));
    db_query_imitation.push({ ...newRecord, ...data, id:null });
    // console.log(db_query_imitation)
    console.log(query_req)

    // res.json(query_req)
    res.json({query_req, db_query_imitation})
}