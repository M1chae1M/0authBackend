import baza from ".."

export async function selectQuery(req,res){
    const {data, where}=req.body
    const asArray=Object.keys(data)
    res.json(await baza.select('display_data', asArray, where))
}