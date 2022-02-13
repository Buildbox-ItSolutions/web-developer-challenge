export interface NewsProps {
    id: string;
    author: string;  
    date: Date;
    title: string;
    subtitle?: string;
    content: string;
}