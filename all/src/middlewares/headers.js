export function headers(req, res, next){
    const {frontend_adres}=process.env
    res.header('Access-Control-Allow-Origin', frontend_adres);
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.header('Access-Control-Allow-Credentials', 'true');
    next();
}