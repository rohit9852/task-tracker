import React, { useState } from 'react';
import { toast } from 'react-toastify';  
import "react-toastify/dist/ReactToastify.min.css";
import './addTask.css';

export default function({addTask}) {

    const [ userInput, setUserInput ] = useState('');
    const [ date, setDate ] = useState('');
    const [ userAssigned, setUserAssigned ] = useState('');
    const [ error, setError ]  = useState('')

    const handleCAssigeehange = (e) => {
        setUserAssigned(e.currentTarget.value)
    }

    const handleTaskChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    const handleDateChange = (e) => {
        setDate(e.currentTarget.value);
    }

    toast.configure()
    const handleSubmit = (e) => {
        e.preventDefault();
        if(userInput.length!= 0 && date.length!= 0 && userAssigned.length!=0) {
        addTask(userInput,date,userAssigned);
        toast('Task Added Succesfully',{
            position: toast.POSITION.TOP_CENTER
        })
        } else {
            setError('All data are required.')
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
                <p className='errMessage'>{error}</p>
            </form>
        </div>
    )
}