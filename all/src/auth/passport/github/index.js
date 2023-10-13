import {template_passport} from '../functions/passportTemplate'

const {github_clientID,github_clientSecret}=process.env

export const github_passport=async()=>template_passport(
    require('passport-github2').Strategy,
    'github',
    github_clientID,
    github_clientSecret,
    ['user','email','id'],
    []
);