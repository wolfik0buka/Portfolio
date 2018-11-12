import { createAction } from 'redux-actions';
import {blog} from '../blog.js';
// Акшн
export const userLogin= createAction('[User] login');
export const usersLoaded= createAction('[User] loaded');

export const userTryLogin = (data) => (dispatch) => {
    const user = blog.users.find(user => user.login === data.login);
    if (user){
        if (user.password === data.password){
            dispatch(userLogin({
                login: user.login,
                id: user._id,
                userpic: user.userpic ? user.userpic : false,
                logined:true,
                reason:''
            }));
        }else {
            dispatch(userLogin({logined:false, reason: 'password wrong'}));
        }
    }else {

        dispatch(userLogin({logined:false, reason: 'login not found'}));
    }
};

// export const getUsers = (number) => (dispatch) => {
//     fetch(`http://127.0.0.1:3050/users/${number}`
//     ).then((res) => {
//         return res.json();
//     }).then((users) =>{
//         dispatch(usersLoaded(users));
//     }).catch((err) => console.log('error catch', err));
// };
