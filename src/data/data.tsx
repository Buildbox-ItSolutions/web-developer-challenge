import { makeAutoObservable } from "mobx"
import { Post } from "../components/Post";
import { PostInterface } from "../interfaces/PostInterface"

export class Store {
    constructor() {
       makeAutoObservable(this) 
       this.addPost({
        img: "https://pbs.twimg.com/profile_images/450225659705438208/1zX32UtP.jpeg",
        name: "Mateus Jardim",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mattis ligula vel velit scelerisque iaculis. Nam mattis justo id orci commodo, eu tempus purus cursus.",
        })
    }
    public Posts:PostInterface[] = []
    public index:number = 0;
    
    public addPost(el:PostInterface) {
        el.index = this.index++
        this.Posts.unshift(el);
    }

    public delPost(index:number) {
        let res:PostInterface = this.Posts.find(post => post.index === index) as PostInterface
        this.Posts.splice(this.Posts.indexOf(res), 1);
    }

    public getAllPosts():PostInterface[] {
        return this.Posts;
    }

    public getAllPostsJsx() {
        let newArr:any = []
        this.Posts.forEach((element, i) => {
            newArr.push(<Post key={i} {...element}></Post>)
        });
        return newArr;
    }
}

export const dataStore = new Store();