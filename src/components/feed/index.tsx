import { FeedContainer, PostContainer, PostsList } from "./styles";
import deleteIcon from "@/assets/icons/delete.svg";

export function Feed() {
  return (
    <FeedContainer>
      <h2>Feed</h2>
      <PostsList>
        <PostContainer>
          <button className="delete-btn">
            <img src={deleteIcon} alt="" className="delete-icon" />
          </button>
          <img
            src="https://avatars.githubusercontent.com/u/77457083?v=4"
            alt=""
            className="avatar-img"
          />
          <div className="texts-container">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur
              natus doloremque dicta odit eius tempora dignissimos aspernatur
              voluptate, consequatur modi ducimus exercitationem repellat iste
              odio reiciendis perspiciatis quaerat eveniet hic?
            </p>

            <div>
              <span>Enviado por</span>
              <strong>Manuela Oliveira</strong>
            </div>
          </div>
        </PostContainer>
      </PostsList>
    </FeedContainer>
  );
}
