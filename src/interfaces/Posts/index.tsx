export interface PostsProps {
    id: string;
    img?: string;
    author: string;  
    date: Date;
    title: string;
    subtitle?: string;
    content: string;
}