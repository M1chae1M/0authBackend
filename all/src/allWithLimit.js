import baza from "./database"

export default async function allWithLimit(req,res){
    const {page, limit}=req.params
    let acPage=page
    var selected_pages=await baza.selected_page('display_data', page>0?page:0, limit>0?limit:0)

    while(selected_pages?.length===0 && acPage-1>=0 && limit>0){
        selected_pages=await baza.selected_page('display_data', acPage>0?acPage:0, limit>0?limit:0);
        selected_pages?.length > 0 && console.log(`w końcu udało się przy ${acPage}`);
        if(selected_pages?.length > 0){
            break;
        }
        acPage--;
    }

    res.json({selected_pages:selected_pages,page:acPage})
}