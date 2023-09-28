import {headers} from './headers'
import session from 'express-session'
import passport from 'passport';
import {json} from 'body-parser'
import cors from 'cors'

export default function middlewares(app){
    const {secret_key}=process.env

    app.use(headers)

    app.use(session({
        secret: secret_key,
        resave: false,
        saveUninitialized: true,
        // cookie: { maxAge: 10000 },
        // cookie: { maxAge: 5000 },
        cookie: { maxAge: 36000000 },
    }));

    app.use(passport.initialize())
    app.use(passport.session())
    app.use(json())

    app.use(cors({ origin:true, credentials: true }))
}