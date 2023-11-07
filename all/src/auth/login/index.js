import passport from "passport";
import {signToken} from "../../token/signToken";

export default function login(req, res, next){
  passport.authenticate('local', (err, user, info)=>{
    if(err){
      return next(err);
    }

    if(!user){
      return res.status(401).json({ success: false, message: 'Nieprawidłowe dane uwierzytelniające!' });
    }
    req.logIn(user, (err)=>{
      if(err){
        return next(err);
      }
      const token=signToken(user)

      return res.status(200).json({ success: true, message: 'Zalogowano pomyślnie.', token});
    });
  })(req, res, next);
}