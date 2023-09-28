import passport from 'passport';
import {baza} from '../../../database';
import bcrypt from 'bcryptjs'
import {Strategy} from 'passport-local'

export function local_passport(){
    passport.use(new Strategy(
        async (username, password, done)=>{
            const users=await baza.select('short', ['id','login', 'password'], {
                login:username,
                strategy:'local',
            })

            if(users.length<1){
                return done(null, false, { message: 'Nieprawidłowe dane uwierzytelniające' });
            }else{
                const user=users[0]
                const hashed=user.password
                bcrypt.compare(password, hashed, (err, isMatch)=>{
                    if(err){
                        console.log('Błąd podczas porównywania hasła.');
                        return done(null, false);
                    }
                
                    if(isMatch){
                        console.log('Udane.');
                        delete user.password
                        return done(null, user);
                    }else{
                        console.log('Nieudane.');
                        return done(null, false);
                    }
                });
            }
        }
    ));
}