import express from 'express'
import testowy from "./testowy"
import middlewares from "./src/middlewares"
import login from './src/auth/login'
import authenticate from './src/auth/authenticate'
import loginAuthMiddleware from './src/auth/login/loginAuthMiddleware'
import configPassport from './src/auth/passport'
import selectQuery from './src/database/select'
import insertQuery from './src/database/insert'
import updateQuery from './src/database/update'
import deleteQuery from './src/database/delete'
import signIn from './src/auth/signIn'
import logout from './src/auth/logout'
import all from './src/all'
import isLogged from './src/auth/authenticate/isLogged'
import {template_auth,template_callback} from './src/auth/passport/functions/authFunctions'
import ExistingEndpoints from './src/ExistingEndpoints'
import userData from './src/account/data'
import deleteUser from './src/account/delete'
import count from './src/database/select/count'
import allWithLimit from './src/allWithLimit'

const {PORT}=process.env || 8080

export const app=express()

middlewares(app)
configPassport()

app.get('/auth/:type',template_auth)
app.get('/auth/:type/callback',template_callback)

app.post('/select',authenticate,selectQuery)
app.post('/insert',authenticate,insertQuery)
app.post('/update',authenticate,updateQuery)
app.post('/delete',authenticate,deleteQuery)

app.post('/count',count)

app.post('/all',authenticate,all)
app.post('/all/:page/:limit',authenticate,allWithLimit)

app.post('/login',loginAuthMiddleware,login)
app.post('/logged',authenticate,isLogged)
app.post('/signin',signIn)
app.post('/logout',logout)

app.post('/account/delete',authenticate,deleteUser)
app.post('/account/data',authenticate,userData)

app.get("/",ExistingEndpoints)

app.get('/test',testowy)

app.listen(PORT,()=>console.log(`Running on port ${PORT}.`))