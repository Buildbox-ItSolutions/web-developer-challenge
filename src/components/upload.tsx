import { ImageIcon } from "../pics/icons";
import { UploadBtn, UploadView } from "../styles";
import { jsonPost, randomUser } from "../utils";
import Avatar from "./avatar";

function Upload({setRandomPost,randomPost}:any):JSX.Element {

  function genRandomPost(){
    const newPost = jsonPost(randomUser());
    setRandomPost(newPost);
  }

  return (
    <UploadView>
      {randomPost.sent ? 
        <Avatar item={randomPost}/> 
      :
        <UploadBtn onClick={genRandomPost}>
          <ImageIcon/>
        </UploadBtn>
      }
    </UploadView>
  );
}

export default Upload;