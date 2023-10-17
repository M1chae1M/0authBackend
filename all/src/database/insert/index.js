import baza from ".."

export async function insertQuery(req,res){
    const {data}=req.body
    res.json(await baza.insert('display_data', data))
}