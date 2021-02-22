import React, { useState } from 'react';
import AddTask from './addTask';
import TaskList from './taskList';
import {data} from '../constant/existingData';
import { toast } from 'react-toastify';  
import "react-toastify/dist/ReactToastify.min.css";
import './layout.css';

export default function Layout() {
    const [ toDoList, setToDoList ] = useState(data);
    toast.configure()
    const addTask = (userInput,date,userAssigned ) => {
      let copy = [...toDoList];
      let temp = { id:toDoList.length+1,name: userInput, date: date, assigned:userAssigned}
      copy.unshift(temp);
      setToDoList(copy);
    }
    const onRemove = id => e => {
      setToDoList(toDoList.filter(todo => todo.id !== id));
      toast('Task remove Succesfully',{
          position: toast.POSITION.TOP_CENTER
      })
    };

    return (
        <div className='layoutWraper'>
            <div className="headerBar">
                <h1 className='title'>Task Tarcker</h1>
                <h4 className='version'>v2.0</h4>
            </div>
            <div className='gg'>
                <AddTask 
                addTask={addTask}
                />
                <TaskList
                toDoList={toDoList}
                onRemove={onRemove}
                />
            </div>
        </div>
    )
}