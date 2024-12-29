import {ADD_NOTE, DELETE_NOTE} from "../actions/noteActions";

const initialState = {
    notes: [
        {text : 'This is first notes . qerqiure qerqew eqr qwer qerqwerf qewrqwra sads wf ewfikjds weiufbv'
            , createdOn : new Date()
        },
        {
        text : 'This is second notes. weruwir werwr werwr werfadscx weafsx asdfxc xcxzc dfdsdgv',
        createdOn : new Date()
        },
    ]
};

export function noteReducer(state=initialState, action){
    switch(action.type){
        case ADD_NOTE:
            return {
                ...state,
                notes:[
                    ...state.notes,
                    {
                        text: action.text,
                        createdOn: new Date()
                    }
                ]
            }
        case DELETE_NOTE:
            state.notes.splice(action.index,1);
            return {
                ...state,
                notes: [...state.notes]
            }     
        default:
            return state;     
    }
}

