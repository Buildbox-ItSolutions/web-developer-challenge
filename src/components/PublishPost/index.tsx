import { ContainerPost} from "../../styles";
import CreatePost from "./containers/CreatePost";
import Feed from "./containers/Feed";

export default function PublishPost() {



  return (
    <ContainerPost>
      <Feed />
      <CreatePost />
    </ContainerPost>
  );
}
