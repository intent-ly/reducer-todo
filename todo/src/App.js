import React, { useReducer } from "react";
import reducer from './reducers/TaskReducer';
import actions from './actions/TaskActions'
import './App.css';

//Global State
const initialState = { currentValue: '', memory: ''}

export default function App(){
  const [state, dispatch] = useReducer(reducer, initialState)

  const handleAdd=()=>{
    dispatch(actions.addAction());
  }
  const handleRemove=()=>{
    dispatch(actions.removeAction());
  }
  const handleEdit=()=>{
    dispatch(actions.editAction());
  }

  return(
    <div className="App">
      <textarea rows='1' value={state.currentValue } id='task' type='text' name='answer'></textarea>
      <br />
      <button type='button' onClick={handleAdd} className='addTask'> ➕ </button>
      <button type='button' onClick={handleRemove} className='removeTask'> ➖ </button>
      <button type='button' onClick={handleEdit} className='editTask'> 🖊 </button>

      <div className='container'>

      </div>
    </div>
  )
}