export function returnEmail(emails){
    if(emails && emails.length > 0 && emails[0] && emails[0].value){
        return emails[0].value;
    }else{
        return '';
    } 
}