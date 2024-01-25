import { ADD_POST, REMOVE_POST } from './actionsTypes';

export function addPost(post: IPost) {
    const action: PostAction = {
        type: ADD_POST,
        post
    };

    return simulateHttpRequest(action);
};

export function removePost(post: IPost) {
    const action: PostAction = {
        type: REMOVE_POST,
        post
    }
    return simulateHttpRequest(action);
};

export function simulateHttpRequest(action: PostAction) {
    return (dispatch: DispatchType) => {
        setTimeout(() => {
            dispatch(action);
        }, 500);
    }
};