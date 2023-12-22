Technologies used to create the backend:
    ◊   express
    ◊   babel
    ◊   bcryptjs
    ◊   jsonwebtoken
    ◊   knex
    ◊   mysql2
    ◊ passport and its strategies for logging in with login and password, google account, github

Problems during application development:
    ◊ vercel is serverless, so I had to stop using state and rebuild the application to be JWT based
    ◊ vercel did not accept the bcrypt library so I had to use the bcryptjs library instead

Paths:
    ◊ /all - returns the entire "display_data" array (if the user is logged in)
    ◊ /all/:page/:limit - returns a fragment of the "display_data" array containing the number of elements equal to "limit"
    ◊ /logged - checks that the user to whom the JWT token points is definitely an existing user 
    ◊ /logout - logs out the user
    ◊ /login - allows logging in with login and password
    ◊ /signin - allows you to create a new account using your login, password and email address
    ◊ /select - allows a select query to be performed on the database
    ◊ /insert - allows an "insert" type query to be performed on the database
    ◊ /update - allows the execution of an "update" type query on the database
    ◊ /delete - allows a query of the "delete" type to be executed on the database
    ◊ /auth/:type: - initialises the authorisation process with a specific authorisation provider
    ◊ /auth/:type/callback: - handles the callback message from the authorization provider
    ◊ /count - returns information on how many records are in the "display_data" table
