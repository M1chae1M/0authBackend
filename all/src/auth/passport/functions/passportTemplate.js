import passport from 'passport';
import baza from '../../../database';
import bcrypt from 'bcryptjs';
import {returnEmail} from './returnEmail';

export async function template_passport(Strategy, strategy, clientID, clientSecret, scope, profileFields){
    const {backend_adres}=process.env
    const callbackURL=`${backend_adres}/auth/${strategy}/callback`
    passport.use(
        new Strategy({clientID, scope, clientSecret, profileFields, callbackURL}, async (accessToken, refreshToken, profile, done)=>{
            const {id, displayName, username}=profile||''
            const {emails}=profile||[{value:''}]
            const login=displayName??username

            const email=returnEmail(emails)

            const where={login,email,strategy}
            const results=await baza.select('short', ['id', 'login', 'password'], where);
        
            if(results && results.length > 0){
                const user=results[0]
                bcrypt.compare(id, user.password, (err, result)=>{
                    if(err){
                        return done(null,false,{message:'Błąd podczas porównywania hasła:'})
                    }
                    if(result){
                        delete user.password;
                        return done(null,user,{message:'Hasło jest poprawne. Zostałeś zalogowany na istniejące konto.'})
                    }else{
                        return done(null,false,{message:'Hasło jest niepoprawne, ale owe konto istnieje. Spróbuj ponownie.'})
                    }
                });
            }else{
                bcrypt.hash(id, 10, async (err, password)=>{
                    if(err){
                        return done(null,false,{message:'Błąd podczas szyfrowania hasła'})
                    }
                    const data={login, password, email, strategy, age:18}
                    const result=await baza.insert('short', data)
                    if(result){
                        const users=await baza.select('short', ['id','login'], where)
                        const user=users[0]
                        return done(null,user,{message:'Zalogowałeś się na usera, który właśnie został stworzony.'});
                    }else{
                        return done(null,false,{message:'Nie udało Ci się dodać nowego usera, spróbuj ponownie.'});
                    }
                });
            }
        })
    )
}