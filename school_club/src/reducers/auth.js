import { USER_LOADED, USER_LOADING, AUTH_ERROR, SET_IS_SUPERADMIN, SET_IS_STAFF, SET_IS_MEMBER} from '../actions/types';

const initialsState ={
    token : localStorage.getItem('token'),
    isAuthenticated: null,
    isLoading: false,
    user: null,
    isSuperAdmin: false,
    isStaff: false,
    isMember: false,
}

export default function (state= initialsState,action) {
    switch(action.type){
        case USER_LOADING:
            return{
                ...state,
                isLoading: true
            }
        case USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                isLoading: false,
                user: action.payload
            }
            case AUTH_ERROR:
                localStorage.removeItem('token');
                return {
                    ...state,
                    token:null,
                    user: null,
                    isAuthenticated: false,
                    isLoading: false
                }
            case SET_IS_SUPERADMIN:
                return{
                    ...state,
                    isSuperAdmin: action.payload
                }    
            case SET_IS_STAFF:
                    return{
                        ...state,
                        isStaff: action.payload
                    }    
            case SET_IS_MEMBER:
                        return{
                            ...state,
                            isMember: action.payload
                        }    
        default: 
            return state;
    }
}