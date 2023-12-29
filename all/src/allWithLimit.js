import fetchPage from "./fetchPage";

export default async function allWithLimit(req, res){
    const {page,limit}=req.params;
    const result=await fetchPage(page, limit);
    res.json(result);
}