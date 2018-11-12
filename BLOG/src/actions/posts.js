import { createAction } from 'redux-actions';
import {blog} from '../blog.js';

// Акшн
export const postsLoaded= createAction('[Posts] loaded');
export const postIdLoaded= createAction('[PostId] loaded');


// export const getPosts = (cat, numbers) => (dispatch) => {
//     fetch(`http://127.0.0.1:3050/posts/${cat}/${numbers}`
//     ).then((res) => {
//         return res.json();
//     }).then((posts) =>{
//         dispatch(postsLoaded(posts));
//     }).catch((err) => console.log('error catch', err));
// };

export const getPosts = (cat,numbers) =>(dispatch) =>{

    const posts = cat === '0' ?
        blog.posts.slice(0, numbers):
        blog.posts.filter((post)=>{
            return post.category === cat;
        }).slice(0, numbers);

    const result =  {
        posts: posts.map((post) => {
            return {
                title: post.title,
                prevText: post.prevText,
                prevImg: post.prevImg,
                date: post.date,
                author:post.author,
                category:  blog.categories.find((cat) => {
                    return cat._id === post.category;
                }),
                id: post._id,
            }}),
        finish: (+numbers > posts.length) ,
    };
    dispatch(postsLoaded(result));
};

// export const getPost = (id, number) => (dispatch) => {
//     fetch(`http://127.0.0.1:3050/post/${id}/${number}`
//     ).then((res) => {
//         return res.json();
//     }).then((post) =>{
//         dispatch(postIdLoaded(post));
//     }).catch((err) => console.log('error catch', err));
// };

export const getPost = (id, number) => (dispatch) => {
    const post = blog.posts.find(post =>{
        return post._id === id;
    });
    // post.author = blog.users.find(user => {return user._id === post.author;});
    dispatch(postIdLoaded({post: {
            ...post,
            author: blog.users.find(user => {return user._id === post.author;})
        }}));
};