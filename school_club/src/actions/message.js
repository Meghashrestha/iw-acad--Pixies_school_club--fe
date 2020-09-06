import { SET_USER, SET_DESP, RESET_USER} from './types';


export const setUser = user =>{
    return {
        type: SET_USER,
        payload: user

    };
};

export const setDesp = user =>{
    return {
        type: SET_DESP,
        payload: user

    };
};

export const resetUser = () =>{
    return {
        type: RESET_USER,

    };
};

