import {ADD_POST, REMOVE_POST} from "./actionsTypes";

const initialState: PostState = {
  posts: []
}

const reducer = (
    state: PostState = initialState,
    action: PostAction
) : PostState => {
    switch (action.type) {
        case ADD_POST:
            const newPost: IPost = {
                id: Math.random(),
                name: action.post.name,
                message: action.post.message,
                image: action.post.image
            };

            return {
                ...state,
                posts: state.posts.concat(newPost)
            };
        case REMOVE_POST:
            const updatePosts: IPost[] = state.posts.filter(
                post => post.id !== action.post.id
            );
            
            return {
                ...state,
                posts: updatePosts
            };
    }
    return state;
}

export default reducer;