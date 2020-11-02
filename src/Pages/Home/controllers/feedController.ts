/* eslint-disable react-hooks/rules-of-hooks */
import { useDispatch, useSelector } from "react-redux";
import { deletePost } from "../../../GlobalStates/stores/posts/actions";
import { PostsTypes } from "../../../GlobalStates/stores/posts/reducer";

export class FeedController {
  posts: PostsTypes[];
  private dispatch: any;
  constructor() {
    this.posts = useSelector((state: any) => state.feed.posts);
    this.dispatch = useDispatch();
  }

  handleDeletePost(index: number): void {
    this.dispatch(deletePost({ index }));
  }
}
