import passport from "passport";

export default function login(req, res, next){
  passport.authenticate('local', (err, user, info)=>{
    if(err){
      return next(err);
    }

    if(!user){
      return res.status(401).json({ success: false, message: 'Nieprawidłowe dane uwierzytelniające' });
    }
    req.logIn(user, (err)=>{
      if(err){
        return next(err);
      }
      const {username}=req.body
      req.session.username=username;

      return res.status(200).json({ success: true, message: 'Zalogowano pomyślnie' });
    });
  })(req, res, next);
}