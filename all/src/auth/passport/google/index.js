import {template_passport} from '../functions/passportTemplate'

const {google_clientID,google_clientSecret}=process.env

export const google_passport=()=>template_passport(
    require('passport-google-oauth20').Strategy,
    'google',
    google_clientID,
    google_clientSecret,
    ['https://www.googleapis.com/auth/userinfo.profile', 'https://www.googleapis.com/auth/userinfo.email'],
    []
);