export function success(req, res){
    req.session.username=req.session.passport.user.login
    res.redirect('http://localhost:3000/login/success');
}

export function failure(req, res){
    res.redirect('http://localhost:3000/login/failure');
}