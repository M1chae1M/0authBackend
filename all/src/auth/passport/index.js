import passport from 'passport'
import {local_passport} from './local'
import {github_passport} from './github'
import {facebook_passport} from './facebook'
import {google_passport} from './google'

export async function configPassport(){
    local_passport()
    github_passport()
    facebook_passport()
    google_passport()

    passport.serializeUser((user, done)=>done(null, user));
    // passport.deserializeUser(async (user, done)=>done(null, user.id));
    passport.deserializeUser(async (user, done)=>done(null, user.login));
}