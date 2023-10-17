import {baza} from "./database"

export default async function allWithLimit(req,res){
    const {page, limit}=req.params
    res.json(await baza.selected_page('display_data', page, limit))
}