import { CREATE_MESSAGE} from './types';

//CREATE MSG
export default createMessage = msg =>{
    return {
        type: CREATE_MESSAGE,
        payload: msg

    };
};