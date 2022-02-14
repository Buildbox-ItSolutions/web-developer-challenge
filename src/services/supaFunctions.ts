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

export const uploadImage = async (event: any)  => {
    const response = await fetch(event.target.result);
    const blob = await response.blob();
    const avatarFile = event.target.files[0]

    const { data, error } = await dbClient.storage
    .from('photo')
    .upload(`newsImage/${avatarFile.name}`, blob, {
        cacheControl: '8600',
        upsert: true
    })
}


export const getBucket = async () => {
    try {
        const { data, error } = await dbClient
        .storage
        .from('photo')
        .list('newsImage', {
            limit: 100,
            offset: 0,
            // sortBy: { column: 'name', order: 'asc' },
        })
        console.log(data, 'data');
        
    } catch (error) {
        console.log(error);
    }
}