import { dbClient } from './supaConfig';
import { NewsProps } from '../interfaces/News';
import { v4 as uuidv4 } from 'uuid'

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
    const avatarFile = event.target.files[0];
    const fileName = uuidv4();

    const { data, error } = await dbClient
        .storage
        .from('photo')
        .upload(`porra/${fileName}`, avatarFile, {
            cacheControl: '8600',
            upsert: false
    })

    return data
}

export const getImages = async () => {
    try {
        const { data, error } = await dbClient
            .storage
            .from('photo')
            .list('news', {
                limit: 10,
                offset: 0,
                sortBy: { column: 'name', order: 'asc' },
        })
        return data
    } catch (error) {
        console.log(error)
    }
}

export const getPublicUrl = async (name: string) => {

    const { publicURL, error } = dbClient
        .storage
        .from('photo')
        .getPublicUrl(`news/${name}`);

    return publicURL
}