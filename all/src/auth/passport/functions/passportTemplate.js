import passport from 'passport';
import {baza} from '../../../database';
import {compare} from './compare';
import {hashSomething} from './hashSomething';

export async function template_passport(Strategy, strategy, clientID, clientSecret, scope, profileFields){
    const {backend_adres}=process.env
        
    passport.use(
        new Strategy({clientID, scope, clientSecret, profileFields, callbackURL:`${backend_adres}/auth/${strategy}/callback`}, async (accessToken, refreshToken, profile, done)=>{
            const {emails, id, displayName, username}=profile
            const email=emails?.[0]?.value??null
            const login=displayName??username
            const where={login, email, strategy}

            const users=await baza.select('short',['id','login','password'], where)
            if(users.length>0){
                compare(id, users, done)
            }else{
                hashSomething(profile, email, strategy, done)
            }
        })
    )
}