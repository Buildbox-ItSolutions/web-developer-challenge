import { DeleteIcon } from "../pics/icons";
import { PostContent, PostSend, PostSendUser, PostText, styles, View } from "../styles";
import Avatar from "./avatar";

function Post({item,index,remove}:any):JSX.Element {
  return (
    <View>
      <Avatar item={item}/>
      <PostContent>
        <PostText> {item.text} </PostText>
        <PostSend> Enviado por</PostSend>
        <PostSendUser> {item.sent} </PostSendUser>
      </PostContent>
      <div style={styles.delete} onClick={() => remove(index)}>
        <DeleteIcon />
      </div>
    </View>  
  )
}

export default Post;