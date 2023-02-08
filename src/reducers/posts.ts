import { useReducer } from "react";
import { v4 as uuidRandom } from "uuid";
import { actionType, postType } from "../@types/data/postReducer";


const initialState: postType[] = [];

const reducer = (state: postType[], action: actionType) => {
    switch (action.type) {
        case 'ADD':
            if (action.payload.assigned && action.payload.message && action.payload.image) {
                const newState=[...state];
                newState.push({
                    id: uuidRandom(),
                    assigned: action.payload?.assigned,
                    message: action.payload?.message,
                    image:action.payload?.image
                })
                return newState;
            }
            break;
        case 'DEL':
            let newState=[...state];
            if (action.payload.id) {
                newState = newState.filter(item => item.id !== action.payload.id);
                return newState;
            }
            break;
    }
    return state;
}

export const usePosts = () => {
    return useReducer(reducer, initialState);
}