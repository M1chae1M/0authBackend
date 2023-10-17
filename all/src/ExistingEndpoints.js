export function ExistingEndpoints(req,res){
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
        ]
    })
}