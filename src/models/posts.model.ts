import instance from "../utils/axios.utils";
import { modelError } from "../utils/functions.utils";

const posts = {
    getPosts : () => {
        let promise = new Promise((resolve, reject) => {
            let url = 'posts?_sort=createdAt&_order=desc';
            instance()
              .get(url)
              .then(res => {
                console.log("res ------>>>>>>>",res.data?.body.length);
                
                resolve(res?.data);
              })
              .catch(error => {
                reject(modelError(error));
              });
          });
          return promise;
    },

    createPosts : (body : any) => {
        let promise = new Promise((resolve, reject) => {
            let url = '/posts';
            instance()
              .post(url , body )
              .then(res => {
                console.log("heello --- - -  - ->>>>>",res);
                resolve(res.data);
              })
              .catch(error => {
                reject(modelError(error));
              });
          });
          return promise;
    }
}

export default posts;