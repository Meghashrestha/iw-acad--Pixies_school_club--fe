import { CREATE_MESSAGE, SET_USER, SET_DESP} from './types';


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
