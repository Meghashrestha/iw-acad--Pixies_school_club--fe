import { USER_LOADED, USER_LOADING, AUTH_ERROR, SET_USER, SET_DESP, RESET_USER} from '../actions/types';

const initialsState ={
    isAuthenticated: null,
    isLoading: false,
    isSuperAdmin: false,
    isStaff: false,
    isMember: false,
    first_name: '',
    last_name: '',
    middle_name: '',
    email: '',
    id: 0,
    description: ''
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
            case SET_USER:
                return{
                    ...state,
                    ...action.payload
                }     
            case RESET_USER:
                localStorage.clear()
                return initialsState

            case SET_DESP:
                return{
                    ...state,
                    description: action.payload
                }                                         
        default: 
            return state;
    }
}
