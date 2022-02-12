import { dbClient } from './supaConfig';

export interface AddNewsProps {
    author: string;  
    date: Date;
    title: string;
    subtitle?: string;
    content: string;
}

export const addNews = async (news: AddNewsProps) => {
    dbClient.from('buildBox').insert([news]).then()
}

