import {template_passport} from '../functions/passportTemplate'

const {facebook_clientID,facebook_clientSecret}=process.env

export const facebook_passport=async()=>template_passport(
    require('passport-facebook').Strategy,
    'facebook',
    facebook_clientID,
    facebook_clientSecret,
    [],
    ['id', 'displayName']
);