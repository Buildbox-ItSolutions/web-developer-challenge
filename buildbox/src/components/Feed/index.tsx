import { FeedContainer, FeedMessages } from "./style";
import deletingImage from "../../assets/delete.svg";
const Feed = () => {
  return (
    <FeedContainer>
      <p className="feed">Feed</p>
      <FeedMessages>
        <div className="deletingContainer">
          <img src={deletingImage} alt="delete" />
        </div>
        <div className="photo"></div>
        <div className="message">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa
            recusandae nesciunt aut natus est in, voluptas quis vero, alias
            voluptatibus maiores nobis blanditiis dicta soluta voluptate fuga.
            Ea, quam repudiandae.
          </p>
          <div>Autor</div>
          <p className="name">Fulano de tal</p>
        </div>
      </FeedMessages>
    </FeedContainer>
  );
};
export default Feed;
