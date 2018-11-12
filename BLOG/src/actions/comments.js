import { createAction } from 'redux-actions';
import {userLogin} from "./users";
import {blog} from '../blog.js';
import comments from "../reducers/comments";

// Акшн
export const commentsLoaded= createAction('[Comment] loaded');

// export const getComments = (numbers) => (dispatch) => {
//     fetch(`http://127.0.0.1:3050/getLastComments/${numbers}`
//     ).then((res) => {
//         return res.json();
//     }).then((comments) =>{
//         console.log(comments);
//         dispatch(commentsLoaded(comments));
//     }).catch((err) => console.log('error catch', err));
// };

export const getComments = (numbers) => (dispatch) =>{
    const comments = blog.comments.slice(0,numbers).map(comment =>{
       return{
           body: comment.body,
           date: comment.date,
           author: blog.users.find(user => user._id === comment.author),
           post: blog.posts.find(post => post._id === comment.postParrent),
       }
    });
    const finish = (+numbers > comments.length);
    dispatch(commentsLoaded({comments: comments, finish:finish}));
};

// export const getPostComments = (id, numbers) => (dispatch) => {
//     fetch(`http://127.0.0.1:3050/getPostComments/${id}/${numbers}`
//     ).then((res) => {
//         return res.json();
//     }).then((comments) =>{
//         dispatch(commentsLoaded(comments));
//     }).catch((err) => console.log('error catch', err));
// };

export const getPostComments = (id, numbers) => (dispatch) => {
    const comments = blog.comments
        .filter(comment => comment.postParrent === id)
        .slice(0,numbers)
        .map(comment =>{
            return{
                body: comment.body,
                author: blog.users.find(user => user._id === comment.author),
                date: comment.date,
            }
        });
    const finish = (+numbers > comments.length);
    dispatch(commentsLoaded({comments: comments, finish:finish}))
};

// export const addComment= (data) => (dispatch) => {
//     fetch('http://127.0.0.1:3050/addComment', {
//         method: 'post',
//         headers: {
//             "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
//         },
//         body: `author=${data.author}&postParrent=${data.post}&body=${data.body}`,
//     }).then((res) => {
//         return res.body();
//     }).then((status) =>{
//         console.log(status);
//     }).catch((err) => console.log('error catch', err));
// };

export const addComment= (data) => (dispatch) => {
    const comment ={
        _id: Date.now(),
        body: data.body,
        author:data.author,
        postParrent : data.post,
        data: Date.now(),
    };
    blog.comments.push(comment);
};
