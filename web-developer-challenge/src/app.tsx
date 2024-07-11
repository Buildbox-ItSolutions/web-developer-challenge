import { useState } from "react";
import { Form } from "./components/form";
import { Header } from "./components/header";
import { List } from "./components/list";
import { IPost } from "./Interfaces/Ipost";


export function App() {
  const [postList, setPostList] = useState<IPost[]>([])

  const removePost = (id: number) => {
    setPostList(
      postList.filter(post => {
        return post.id !== id;
      })
    )
  }

  return (
    <div className="flex flex-col items-center">
      <Header/>
      <Form postList={postList} setPostList={setPostList}/>
      <div className="flex flex-col mt-20">
        <p className="text-[#5f5f5f] font-semibold text-xl">Feed:</p>
        <List postList={postList} handleRemove={removePost}/> 
      </div>
    </div>
  )
}

