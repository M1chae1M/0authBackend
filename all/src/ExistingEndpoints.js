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
                `podczas próby autoryzacji przy pomocy strategii innych, niż "local" otwierane jest nowe okno, gdzie przy pomocy konta google, facebook, lub github możliwe jest zalogowanie się do serwisu. Okno to jednak otwiera adres o innym adresie oraz komunikuje się z oknem-rodzicem przy pomocy postMessage okno to samo w sobie zaś musi otrzymać dane z backendu w sposób inny, niż sesja ze względu na wykorzystanie vercela jako hostingu, więc dane typu token jwt są przekazywane jako url param`,
                `server mysql jest wolny w wyniku czego wysłanie poprawnego rządania mającego na celu zmianę danych w bazie, a następnie natychmiastowe zapytanie od te dane w odpowiedzi otrzyma rekord bez zmian, gdyż ta operacja jest asynchroniczna. W związku z tym front posiada funkcje imitujące wykonywanie takich operacji jak delete, insert, update, by od razu po wykonaniu poprawnego rządania wyświetlić zmienione dane jeszcze przed wprowadzeniem tych zmian w oficjalnej bazie danych`,
            ],
            endpoints:[
                `/ - zawierająca CRUDA (strona dostępna bez logowania, jednak nie pozwoli na manipulowanie bazą danych)`,
                `/login - podstrona zawierająca formularz do służący logowania (strona dostępna tylko jeśli nie jesteś już zalogowany)`,
                `/signin - podstrona zawierająca formularz służący do zakłożenia nowego konta (strona dostępna tylko jeśli nie jesteś już zalogowany)`,
                `/resource_code - strona na której się aktualnie znajdujesz`,
                `/login/login_success - ścieżka do której jest przykierowywany użytkownik po próbie zalogowania się przez: google, facebooka, czy github zakończonej pomyślnie`,
                `/login/login_failure - ścieżka do której jest przykierowywany użytkownik po próbie zalogowania się przez: google, facebooka, czy github zakończonej NIEpomyślnie`,
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
                'passport oraz jego strategie do logowania przy pomocy loginu i hasła, konta google, facebooka, githuba',
            ],
            problems:[
                `vercel jest serverless, więc musiałem przestać używać stanu i przebudować aplikację tak, by była oparta o JWT`,
                `vercel nie "łykał" biblioteki bcrypt więc musiałem zamiast niej wykorzystać bibliotekę bcryptjs`,
            ],
            endpoints:[
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
            ]
        }
    })
}
