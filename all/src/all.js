import baza from "./database"

export async function all(req, res){
    const result=await baza.select('display_data', '*', {})
    res.json(result)
}