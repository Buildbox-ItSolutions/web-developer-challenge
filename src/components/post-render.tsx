import Post from "./post";

function PostRender({list,remove}:any):JSX.Element {
  const postListRender = list.map( (it: any, index:number) => 
    <Post item={it} index={index} remove={remove}/>  
  );
  return (postListRender)
}

export default PostRender;