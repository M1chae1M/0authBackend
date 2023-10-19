const {frontend_adres}=process.env

export function success(req, res){
    res.redirect(`${frontend_adres}/login/success_t`);
}

export function failure(req, res){
    res.redirect(`${frontend_adres}/login/failure_t`);
}