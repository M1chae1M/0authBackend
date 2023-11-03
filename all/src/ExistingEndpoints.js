export default function ExistingEndpoints(req,res){
    const {backend_adres,frontend_adres}=process.env
    res.json({
        "endpoints":[
            backend_adres,
            frontend_adres,
            `${backend_adres}/test`,
            `${backend_adres}/all`,
            `${backend_adres}/all/:page/:limit`,
            `${backend_adres}/logged`,
            `${backend_adres}/logout`,
            `${backend_adres}/login`,
            `${backend_adres}/signin`,
            `${backend_adres}/select`,
            `${backend_adres}/insert`,
            `${backend_adres}/update`,
            `${backend_adres}/delete`,
            `${backend_adres}/signin`,
            `${backend_adres}/auth/:type`,
            `${backend_adres}/auth/:type/callback`,
            `${backend_adres}/auth/:type/success`,
            `${backend_adres}/auth/:type/failure`,
            `${backend_adres}/count`,
        ],
        "frontend":{
            used_package:[
                'next.js',
                'bootstrap',
                'react-bootstrap',
                'styled-components',
                'react-icons',
                'react-intersection-observer',
                'react-paginate',
            ],
            problems:[
                `When attempting to authenticate using strategies other than "local", a new window opens, where it is possible to log into the service using a google, facebook or github account. This window, however, opens an address with a different address and communicates with the parent window using postMessage this window itself has to receive data from the backend in a different way than the session due to the use of vercel as hosting, so the jwt token data is passed as url param`,
                `The mysql server is free as a result of sending a valid request to change the data in the database, and then immediately querying the data in response will receive a record without changes, as this operation is asynchronous. Therefore, the front-end has functions that mimic the execution of operations such as delete, insert, update, in order to display the changed data immediately after a valid request, even before these changes are made to the official database.`,
            ],
            endpoints:[
                `/ - containing CRUD (page available without login, but will not allow database manipulation)`,
                `/login - subpage containing a form for logging in (page available only if you are not already logged in)`,
                `/signin - subpage containing a form for creating a new account (available only if you are not already logged in)`,
                `/resource_code - the page you are currently on`,
                `/login/login_success - path to which you are directed after a successful login attempt via google, facebook or github`,
                `/login/login_failure - path to which user is redirected after an attempt to log in via: google, facebook, or github was unsuccessful`,
            ],
        },
        "backend":{
            used_package:[
                'express',
                'axios',
                'babel',
                'bcryptjs',
                'jsonwebtoken',
                'knex',
                'mysql2',
                'passport and its strategies for logging in with login and password, google account, facebook, github',
            ],
            problems:[
                `vercel is serverless, so I had to stop using state and rebuild the application to be JWT-based`,
                `vercel did not accept the bcrypt library so I had to use the bcryptjs library instead`,
            ],
            endpoints:[
                `/all - returns the entire "display_data" array (if the user is logged in)`,
                `/all/:page/:limit - returns a fragment of the "display_data" array containing the number of elements equal to "limit"`,
                `/logged - checks that the user the JWT token points to is definitely an existing user `,
                `/logout - logs out the user`,
                `/login - allows the user to log in using a login and password`,
                `/signin - allows you to create a new account using your login, password and email address`,
                `/select - allows to execute "select" type queries on the database`,
                `/insert - allows to execute on the database a query of the "insert" type`,
                `/update - allows to execute on the database a query of the "update" type`,
                `/delete - allows to execute on the database a query of the "delete" type`,
                `/auth/:type: - initialises the authorisation process with a specific authorisation provider`,
                `/auth/:type/callback: - handles the callback message from the authorization provider`,
                `/count - returns information on how many records are in the "display_data" table`,
            ]
        }
    })
}
