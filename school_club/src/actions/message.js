import { CREATE_MESSAGE, SET_IS_SUPERADMIN} from './types';


export const setsuperAdmin = status =>{
    return {
        type: SET_IS_SUPERADMIN,
        payload: status

    };
};