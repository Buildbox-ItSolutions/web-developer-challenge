import { dbClient } from './supaConfig';
import { NewsProps } from '../interfaces/News';

const dbName ='buildBox';

export const addNews = async (news: NewsProps) => {
    dbClient.from(dbName).insert([news]).then()
}

export const getNews = async () => {
    return dbClient
            .from('buildBox')
            .select('*')
            .order('id', {ascending: true})
            .then( response => {
                return response.data
    })
}

export const deleteNews = async (id: number) => {
    dbClient
    .from(dbName)
    .delete()
    .match({id: id})
    .then( resp => {
        console.log(resp, 'Noticia Removida');
        
    })
}

// Função de deletar
// Função de editara