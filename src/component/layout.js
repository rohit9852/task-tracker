import React, { useState } from 'react';
import AddTask from './addTask';
import TaskList from './taskList';
import {data} from '../constant/existingData';
import './layout.css';

export default function Layout() {
    const [ toDoList, setToDoList ] = useState(data);

      const addTask = (userInput,date,userAssigned ) => {
        let copy = [...toDoList];
        let temp = { id:toDoList.length+1,name: userInput, date: date, assigned:userAssigned}
        copy.unshift(temp);
        setToDoList(copy);
      }
      const onRemove = id => e => {
        setToDoList(toDoList.filter(todo => todo.id !== id));
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