import { dbClient } from './supaConfig';
const dbName ='buildBox';
import { NewsProps } from '../interfaces/News';


export const addNews = async (news: NewsProps) => {
    dbClient.from(dbName).insert([news]).then()
}

// function realTimeMessage() {
//     return dbClient
//     .from(dbName)
//     .on('INSERT', (response) => {
//       addMessage(response.new)
//     })
//     .subscribe()
//   }

export const getNews = async () => {
    return dbClient
            .from('buildBox')
            .select('*')
            .order('id', {ascending: true})
            .then( response => {
                return response.data
    })
        
}



// Função de deletar
// Função de editara