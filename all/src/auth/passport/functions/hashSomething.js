import bcrypt from 'bcryptjs';
import {baza} from '../../../database';

export function hashSomething(profile, email, strategy, done){
    const {id, displayName, username}=profile
    bcrypt.hash(id, 10, async (err, password)=>{
        if(err){
            console.error('Błąd podczas szyfrowania hasła:', err);
            return done(null, false)
        }
        const login=displayName??username
        const data={login, password, email, strategy, age:18}
        const result=await baza.insert('short', data)
        if(result){
            const where={login, email, strategy}
            const users=await baza.select('short', ['id','login'], where)
            const user=users[0]
            console.log('Zalogowałeś się na usera, który właśnie został stworzony. ')                    
            return done(null, user);
        }else{
            console.log('Nie udało Ci się dodać nowego usera, spróbuj ponownie.')
            return done(null, false, {message:'Błąd podczas dodawania do bazy danych nowego użytkownika.'});
        }
    });
}