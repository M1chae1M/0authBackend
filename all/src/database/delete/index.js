import {baza} from ".."

export async function deleteQuery(req,res){
    const {where}=req.body
    res.json(await baza.delete('display_data', where))
}