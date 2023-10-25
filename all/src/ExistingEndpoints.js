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
        "backend":[
            `/all - zwraca całą tablicę "display_data" (jeśli użytkownik jest zalogowany)`,
            `/all/:page/:limit - zwraca fragment tablicy "display_data" zawierający ilość elementów równą "limit"`,
            `/logged - sprawdza, czy użytkownik na którego wskazuje token JWT na pewno jest istniejącym użytkownikiem `,
            `/logout - wylogowuje użytkownika`,
            `/login - pozwala się zalogować przy pomocy loginu i hasła`,
            `/signin - pozwala utworzyć nowe konto przy pomocy loginu, hasła oraz adresu email`,
            `/select - pozwala na wykonanie na bazie danych zapytania typu "select"`,
            `/insert - pozwala na wykonanie na bazie danych zapytania typu "insert"`,
            `/update - pozwala na wykonanie na bazie danych zapytania typu "update"`,
            `/delete - pozwala na wykonanie na bazie danych zapytania typu "delete"`,
            `/auth/:type: - inicjalizuje proces autoryzacji z konkretnym dostawcą autoryzacji`,
            `/auth/:type/callback: - obsługuga zwrotnej wiadomości od dostawcy autoryzacji`,
            `/count - zwraca informację jak wiele rekordów znajduje się w tabeli "display_data"`,
        ],
        "frontend":[

        ]
    })
}