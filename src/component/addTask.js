import React, { useState } from 'react';
import './addTask.css';

export default function({addTask}) {

    const [ userInput, setUserInput ] = useState('');
    const [ date, setDate ] = useState('');
    const [ userAssigned, setUserAssigned ] = useState('');

    const handleCAssigeehange = (e) => {
        setUserAssigned(e.currentTarget.value)
    }

    const handleTaskChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    const handleDateChange = (e) => {
        setDate(e.currentTarget.value);
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        if(userInput!=null && date!= null && userAssigned!=null) {
        addTask(userInput,date,userAssigned);
        }
        setUserInput("");
        setDate('');
        setUserAssigned('')
    }

    return(
        <div className='addWrapper'>
            <h2 className='titleAdd'>AddTask</h2>
        
            <form onSubmit={handleSubmit} className='formWraper'>
            <label>Task Name</label>
                <input value={userInput} type="text" onChange={handleTaskChange} className='taskName'/>
                <label>Date</label>
                <input type='Date'value={date} onChange={handleDateChange} className='date' />
                <label>Assigned To</label>
                <input value={userAssigned} type="text" onChange={handleCAssigeehange} className='assignee'/>
                <button className='btn'>Submit</button>
            </form>
        </div>
    )
}