import baza from ".."

const newRecord={
    id:'',
    name:'',
    age:'',
    email:'',
    city:'',
    country:'',
    occupation:'',
    salary:''
}

export default async function insert_imitation(data,offset_data){
    const {limit,page}=offset_data??{}
    const db_query_imitation=await baza.selected_page('display_data',page,limit)

    // const fields=['id','name','age','email','city','country','occupation','salary']
    // const newRecord=Object?.fromEntries?.(fields?.map(x=>[x, '']))??{};
    // const newRecord = fields?.reduce((acc,field)=>({...acc,[field]:''}),{});

    db_query_imitation.push({ ...newRecord, ...data, id:null });
    return db_query_imitation
}