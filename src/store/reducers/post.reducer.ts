
import {
    CREATE_POSTS,
    GET_POSTS
  } from '../../utils/type.utils';
import { getPost , createPost } from "../actions/post.action";

  const initialState = {
    posts : [],
  }

const postReducer = ( state =initialState , action : any) => {
    switch (action.type) {
        case CREATE_POSTS:
            return {
                ...state,
                posts : action.payload
            };
        case GET_POSTS : 
            return {
                ...state,
                posts : action.payload
            };
        default:
            return state;
            break;
    }
}

export default postReducer;