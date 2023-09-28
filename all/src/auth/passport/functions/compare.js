import bcrypt from 'bcryptjs';

export function compare(id, users, done){
    const user=users[0]
    bcrypt.compare(id, user.password, (err, result)=>{
        if(err){
            console.error('Błąd podczas porównywania hasła:', err);
            return done(null, false)
        }
    
        if(result){
            console.log('Hasło jest poprawne. Zostałeś zalogowany na istniejące konto.');
            delete user.password;
            return done(null, user)
        }else{
            console.log('Hasło jest niepoprawne, ale owe konto istnieje. Spróbuj ponownie.');
            return done(null, false)
        }
    });
}