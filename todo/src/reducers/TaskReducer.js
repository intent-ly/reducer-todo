
export const ADD_TASK = "ADD_TASK"
export const REMOVE_TASK = "REMOVE_TASK"
export const EDIT_TASK = "EXPORT_TASK"

const reducer = (state, action) =>{
    switch (action.type){
        case ADD_TASK:
            return { ...state, currentValue: action.payload };
        case REMOVE_TASK:
            return { ...state, memory: ''};
        case EDIT_TASK:
            return { ...state, memory: action.payload};
        default:
            return state;
    }
};

export default reducer;