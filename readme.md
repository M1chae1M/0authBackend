Technologie wykorzystane do stworzenia backendu:
    ◊   express
    ◊   axios
    ◊   babel
    ◊   bcryptjs
    ◊   jsonwebtoken
    ◊   knex
    ◊   mysql2
    ◊   passport oraz jego strategie do logowania przy pomocy loginu i hasła, konta google, facebooka, githuba

Problemy podczas tworzenia aplikacji:
    ◊   vercel jest serverless, więc musiałem przestać używać stanu i przebudować aplikację tak, by była oparta o JWT
    ◊   vercel nie "łykał" biblioteki bcrypt więc musiałem zamiast niej wykorzystać bibliotekę bcryptjs

Adresy:
    ◊   /all - zwraca całą tablicę "display_data" (jeśli użytkownik jest zalogowany)
    ◊   /all/:page/:limit - zwraca fragment tablicy "display_data" zawierający ilość elementów równą "limit"
    ◊   /logged - sprawdza, czy użytkownik na którego wskazuje token JWT na pewno jest istniejącym użytkownikiem 
    ◊   /logout - wylogowuje użytkownika
    ◊   /login - pozwala się zalogować przy pomocy loginu i hasła
    ◊   /signin - pozwala utworzyć nowe konto przy pomocy loginu, hasła oraz adresu email
    ◊   /select - pozwala na wykonanie na bazie danych zapytania typu "select"
    ◊   /insert - pozwala na wykonanie na bazie danych zapytania typu "insert"
    ◊   /update - pozwala na wykonanie na bazie danych zapytania typu "update"
    ◊   /delete - pozwala na wykonanie na bazie danych zapytania typu "delete"
    ◊   /auth/:type: - inicjalizuje proces autoryzacji z konkretnym dostawcą autoryzacji
    ◊   /auth/:type/callback: - obsługuga zwrotnej wiadomości od dostawcy autoryzacji
    ◊   /count - zwraca informację jak wiele rekordów znajduje się w tabeli "display_data"
