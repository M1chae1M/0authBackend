import knex from "knex";
import {config} from 'dotenv'

config()
const {host, user, password, database}=process.env

class DB{
    knex
    constructor(){
        this.knex=knex({
            client: 'mysql2',
            connection:{host,user,password,database}
        });
    }
    select(table, data, where){
        return this.knex.select(data).from(table).where(where).catch(error=>'niestety nie udało się pobrać owych rekordów z bazy danych');
    }
    insert(table, data){
        return this.knex(table).insert(data).catch(error=>'niestety nie udało się wprowadzić nowych rekordów do bazy danych');
    }
    update(table, data, where){
        return this.knex(table).where(where).update(data).catch(error=>'niestety nie udało się zaktualizować owych rekordów z bazy danych');
    }
    delete(table, where){
        return this.knex(table).where(where).del().catch(error=>'niestety nie udało się usunąć owych rekordów z bazy danych');
    }
}

export const baza=new DB()