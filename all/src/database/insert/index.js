import baza from ".."

export default async function insertQuery(req,res){
    const {data,offset_data}=req.body??{}
    const {limit,page}=offset_data??{}

    // const selected=await baza.selected_page('display_data',page,limit)
    const db_query_imitation=await baza.selected_page('display_data',page,limit)
    const query_req=await baza.insert('display_data', data)

    // const db_query_imitation=[...selected];

    const fields=['id','name','age','email','city','country','occupation','salary']

    // const newRecord=Object?.fromEntries?.(fields?.map(x=>[x, '']))??[];
    const newRecord=[]
    db_query_imitation.push({ ...newRecord, ...data, id:null });

    res.json({query_req, db_query_imitation})
    
    // res.json({query_req, db_query_imitation:{}})
}