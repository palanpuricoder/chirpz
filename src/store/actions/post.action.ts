import { CREATE_POSTS, GET_POSTS } from "../../utils/type.utils";

export function getPost(payload : any) {
  return { type: GET_POSTS, payload }
}

export function createPost() {
  return { type: CREATE_POSTS }
}
