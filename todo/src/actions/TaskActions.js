import { ADD_TASK, REMOVE_TASK, EDIT_TASK } from '../reducers/TaskReducer';

const addAction  = (value) =>{
    return ({ type: ADD_TASK, payload: value });
}
const removeAction = (value) =>{
    return ({ type: REMOVE_TASK });
}
const editAction = (value) =>{
    return ({ type: EDIT_TASK, payload: value})
}

export default {
    addAction: addAction,
    removeAction: removeAction,
    editAction: editAction,
}