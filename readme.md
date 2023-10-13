Backend:

    technologie:
    express
    problemy:
        vercel jest serverless, więc musiałem przestać używać stanu i przebudować aplikację tak, by była oparta o JWT
        vercel nie łykał biblioteki bcrypt
        passport

    funckje:

    ciekawostki




Front:
    next.js
    bootstrap

    server mysql jest wolny w wyniku czego wysłanie poprawnego rządania mającego na celu zmianę danych w bazie danych w odpowiedzi otrzyma dane bez zmian, gdyż ta operacja jest asynchroniczna. W związku z tym front posiada funkcje imitujące wykonywanie takich operacji jak delete, insert, update, by od razu po wykonaniu poprawnego rządania wyświetlić zmienione dane jeszcze przed wprowadzeniem tych zmian w oficjalnej bazie danych