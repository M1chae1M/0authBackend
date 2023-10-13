const {frontend_adres}=process.env

export function success(req, res){
    res.redirect(`${frontend_adres}/login/success`);
}

export function failure(req, res){
    res.redirect(`${frontend_adres}/login/failure`);
}