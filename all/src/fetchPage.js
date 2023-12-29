import baza from "./database";

export default async function fetchPage(page, limit){
    const selected_pages=await baza.selected_page('display_data', page>0?page:0, limit>0?limit:0);
  
    if(selected_pages.length > 0){
        return { selected_pages, page };
    }
  
    if(page - 1 >= 0 && limit > 0){
        return fetchPage(page - 1, limit);
    }
  
    return { selected_pages: [], page };
}