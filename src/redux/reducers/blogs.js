import {GET_BLOGS} from '../actions/types';


initialState = {
    all_blogs: {},
}

export default function(state = initialState, action){
    switch(action.type){
        case GET_BLOGS:
            console.log(action);
            return {
                ...state,
                all_blogs: action.payload,
            }
        default:
            return state;
    }
}
