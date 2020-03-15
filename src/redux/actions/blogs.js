import {GET_BLOGS} from './types';
import axios from 'axios';
import {setURL} from './../utils/setUrl';


export const getBlogs = () => (dispatch, getState) => {
    axios
    .get(setURL()+'blogs')
    .then(res => {
        dispatch({
            type: GET_BLOGS,
            payload: res.data
        });
    })
    .catch(err => {
        console.log("asdfasdfadsf")
    });
}
